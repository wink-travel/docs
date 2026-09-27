#!/usr/bin/env node
/*
 * Copyright (c) 2026 Wink.
 *
 * Files a GitHub issue for every NEW unresolved Sentry group, once per day.
 *
 * SCOPED TO THE REPO IT RUNS IN. Each repo carries its own copy of this script and its own workflow,
 * and the workflow names which Sentry projects belong to that repo (SENTRY_PROJECTS). A group from any
 * other project is out of scope and is left for the sibling repo's copy -- this job never files
 * across repositories. Adding a Sentry project to a repo is a one-line edit to that repo's workflow.
 *
 * WHY THIS NEEDS ONLY ONE TOKEN. It does not talk to GitHub at all. Sentry's installed GitHub
 * integration creates the issue AND links it back to the group in a single call, so the only
 * credential is SENTRY_USER_TOKEN, stored as a secret in each repo that runs a copy.
 *
 * DEDUPE IS THE LINK ITSELF. A group that has already been filed carries a github.com entry in its
 * `annotations[]` -- the same link the manual triage created. That is the idempotency key, so a
 * re-run, an overlapping lookback window, or a retried job cannot double-file. There is no local
 * state to keep in sync.
 *
 * ⛔ "NEW" MEANS `age:-Nh`, NOT "not yet linked". Those are very different sets: the org carries a
 * standing backlog of unresolved-and-unlinked groups (326 at the time of writing), so filing on
 * "unlinked" alone would dump hundreds of issues on the first run. The age filter is what keeps a
 * daily job daily.
 *
 * ⛔ MEASURED VOLUME, 2026-09-09: 23 new groups in 24h, 9 already linked, so 14 would be filed -- and
 * 12 of those 14 were "N+1 Query" with 1-5 events each, i.e. the Redis eviction fan-out already filed
 * as monorepo-java#942 and already fixed on develop by #902/#903. Auto-filing every new group is a
 * deliberate choice; MIN_EVENTS and IGNORE_TITLE_PATTERNS exist to damp exactly that without editing
 * this file, and MAX_ISSUES is a hard stop so a Sentry storm cannot open hundreds of issues.
 *
 * HOW TO RUN (REPO defaults to GITHUB_REPOSITORY in CI; set it by hand locally)
 *   REPO=wink-travel/x SENTRY_PROJECTS=a,b ISSUE_LABELS=bug SENTRY_USER_TOKEN=... node scripts/sentry/file_sentry_issues.mjs            # live
 *   DRY_RUN=true SENTRY_USER_TOKEN=... node scripts/sentry/file_sentry_issues.mjs
 */

const ORG = "wink2travel";
const BASE = "https://us.sentry.io/api/0";

/**
 * The installed GitHub integration. Every repo this runs for must be linked to it.
 * Discover it with `GET /organizations/{org}/repos/` -- `/organizations/{org}/integrations/` 404s
 * with this token's scopes.
 */
const INTEGRATION_ID = "135567";

/**
 * ⛔ EXPLICIT project list, never a substring test on `platform`. "java" is a substring of
 * "javascript-angular", so `platform.includes("java")` would claim every Angular project for a Java
 * repo. The list comes from the workflow (SENTRY_PROJECTS), so it is reviewed alongside the repo it
 * belongs to.
 */
const csv = (value) =>
  String(value ?? "")
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);

/** `owner/name`. GitHub Actions sets GITHUB_REPOSITORY, so CI needs no configuration for this. */
const REPO = process.env.REPO || process.env.GITHUB_REPOSITORY;
const PROJECTS = Object.freeze(csv(process.env.SENTRY_PROJECTS));
/** Must exist in the repo already; `P3` is deliberate where used: this job cannot judge severity,
 *  so P3 reads as "filed, not yet triaged". */
const LABELS = Object.freeze(csv(process.env.ISSUE_LABELS));

const TOKEN = process.env.SENTRY_USER_TOKEN;
const DRY_RUN = String(process.env.DRY_RUN ?? "false").toLowerCase() === "true";
/** 25h, not 24h: a deliberate overlap so a group arriving between runs is never missed. The
 *  annotations dedupe makes re-seeing a group harmless. */
const LOOKBACK_HOURS = Number(process.env.LOOKBACK_HOURS ?? 25);
const MIN_EVENTS = Number(process.env.MIN_EVENTS ?? 0);
const MAX_ISSUES = Number(process.env.MAX_ISSUES ?? 25);
const IGNORE_TITLE_PATTERNS = (process.env.IGNORE_TITLE_PATTERNS ?? "")
  .split(",")
  .map((p) => p.trim())
  .filter(Boolean)
  .map((p) => new RegExp(p, "i"));

if (!TOKEN) {
  console.error("SENTRY_USER_TOKEN is not set. In CI this comes from the repository secret.");
  process.exit(1);
}
if (!REPO || !REPO.includes("/")) {
  console.error("REPO (or GITHUB_REPOSITORY) must be set to owner/name.");
  process.exit(1);
}
if (PROJECTS.length === 0) {
  console.error("SENTRY_PROJECTS must list the Sentry project slugs that belong to this repo.");
  process.exit(1);
}

const auth = { Authorization: `Bearer ${TOKEN}` };

async function sentry(url, init = {}) {
  const res = await fetch(url, { ...init, headers: { ...auth, ...(init.headers ?? {}) } });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    const err = new Error(`${res.status} ${res.statusText} ${body.slice(0, 300)}`);
    err.status = res.status;
    throw err;
  }
  return res;
}

/**
 * Pages the issues endpoint, following the `Link` header.
 *
 * ⛔ Do NOT take a single page as the whole set. The MCP `search_issues` tool caps at 100 with no
 * signal that more exist, and reading one page as complete is what made the 2026-09-08 sweep miss
 * 226 of 326 issues.
 */
async function fetchNewGroups() {
  const params = new URLSearchParams({
    query: `is:unresolved age:-${LOOKBACK_HOURS}h`,
    limit: "100",
    statsPeriod: "90d",
  });
  let url = `${BASE}/organizations/${ORG}/issues/?${params}`;
  const groups = [];

  while (url) {
    const res = await sentry(url);
    groups.push(...(await res.json()));

    const link = res.headers.get("link") ?? "";
    const next = link.split(",").find((p) => p.includes('rel="next"') && p.includes('results="true"'));
    url = next ? next.slice(next.indexOf("<") + 1, next.indexOf(">")) : null;
  }

  return groups;
}

/** A github.com entry in annotations[] is the link the integration wrote when the issue was filed. */
function alreadyFiled(group) {
  return (group.annotations ?? []).some((a) => String(a?.url ?? "").includes("github.com"));
}

function describe(group) {
  return [
    `Auto-filed from Sentry by \`.github/workflows/sentry-daily-issue-filer.yml\`.`,
    ``,
    `**This has not been triaged by a human.** It is one Sentry group, which is not the same as one`,
    `root cause -- past sweeps collapsed ~100 groups into ~18 causes. Check whether an existing issue`,
    `already covers it before starting work, and close this as a duplicate if so.`,
    ``,
    `| | |`,
    `|---|---|`,
    `| Sentry | [${group.shortId}](${group.permalink}) |`,
    `| Project | \`${group.project?.slug}\` |`,
    `| Level | ${group.level ?? "unknown"} |`,
    `| Events | ${group.count} |`,
    `| Users affected | ${group.userCount ?? 0} |`,
    `| First seen | ${group.firstSeen} |`,
    `| Last seen | ${group.lastSeen} |`,
    ``,
    `**Culprit**`,
    ``,
    `\`\`\``,
    `${group.culprit ?? "(none)"}`,
    `\`\`\``,
    group.metadata?.value ? `\n**Value**\n\n\`\`\`\n${String(group.metadata.value).slice(0, 1500)}\n\`\`\`` : "",
    ``,
    `---`,
    `A commit message containing \`Fixes ${group.shortId}\` resolves the Sentry group on merge.`,
  ].join("\n");
}

async function fileIssue(group) {
  const url = `${BASE}/organizations/${ORG}/issues/${group.id}/integrations/${INTEGRATION_ID}/?action=create`;
  const res = await sentry(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      repo: REPO,
      title: `${group.title}`.slice(0, 250),
      description: describe(group),
      labels: LABELS,
    }),
  });
  return res.json();
}

async function main() {
  console.log(
    `Sentry -> GitHub issue filer${DRY_RUN ? "  [DRY RUN -- nothing will be filed]" : ""}\n` +
      `  repo=${REPO}  projects=${PROJECTS.join(",")}  labels=${LABELS.join(",")}\n` +
      `  lookback=${LOOKBACK_HOURS}h  minEvents=${MIN_EVENTS}  maxIssues=${MAX_ISSUES}  ` +
      `ignorePatterns=${IGNORE_TITLE_PATTERNS.length}`
  );

  const groups = await fetchNewGroups();
  console.log(`  new groups in window (whole org): ${groups.length}`);

  const skipped = { otherRepo: 0, filed: 0, minEvents: 0, ignored: 0 };
  const candidates = [];

  for (const g of groups) {
    if (!PROJECTS.includes(g.project?.slug)) { skipped.otherRepo += 1; continue; }
    if (alreadyFiled(g)) { skipped.filed += 1; continue; }
    if ((g.count ?? 0) < MIN_EVENTS) { skipped.minEvents += 1; continue; }
    if (IGNORE_TITLE_PATTERNS.some((re) => re.test(g.title ?? ""))) { skipped.ignored += 1; continue; }

    candidates.push(g);
  }

  console.log(
    `  other repos' projects: ${skipped.otherRepo}  already filed: ${skipped.filed}  ` +
      `below minEvents: ${skipped.minEvents}  ignored: ${skipped.ignored}`
  );

  const capped = candidates.length > MAX_ISSUES;
  const toFile = candidates.slice(0, MAX_ISSUES);
  if (capped) {
    console.error(
      `  ⚠ ${candidates.length} candidates exceeds MAX_ISSUES=${MAX_ISSUES}. Filing the first ${MAX_ISSUES}; ` +
        `the rest are NOT lost -- they stay unlinked and will be picked up once the backlog clears or the cap is raised.`
    );
  }
  console.log(`  to file: ${toFile.length}`);

  let filed = 0;
  const failures = [];

  for (const group of toFile) {
    if (DRY_RUN) {
      console.log(`  [dry-run] ${group.shortId} (${group.count} events) -> ${REPO}  ${group.title.slice(0, 70)}`);
      filed += 1;
      continue;
    }
    try {
      const created = await fileIssue(group);
      console.log(`  filed ${group.shortId} -> ${created.key ?? REPO}`);
      filed += 1;
    } catch (error) {
      failures.push(`${group.shortId}: ${error.message}`);
      console.error(`  ✗ ${group.shortId}: ${error.message}`);
    }
    await new Promise((r) => setTimeout(r, 400)); // be polite to the Sentry API
  }

  console.log(`----------------------------------------------------------------------`);
  console.log(`${DRY_RUN ? "would file" : "filed"}=${filed}  failed=${failures.length}`);

  // Surface partial failure to the Action rather than reporting a green run that filed nothing.
  if (failures.length > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
