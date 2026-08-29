#!/bin/bash

#
# Copyright (c) wink.travel 2026
#

# Deploys the current branch's build to a Firebase Hosting preview channel.
# Invoked by Bamboo on every plan-branch build. The Bamboo task that calls this
# script carries a task condition excluding 'master' -- there is no staging
# environment; master goes straight from CI validation to a tag-triggered
# production release (see releaseToMaster.bash). This script assumes that
# exclusion is already enforced by the caller and does not re-check it.

set -euo pipefail

BRANCH_NAME="${1:?Usage: deploy-preview-channel.bash <branch-name>}"
EXPIRES="${PREVIEW_CHANNEL_EXPIRES:-7d}"

# Firebase channel IDs: lowercase letters, digits, hyphens only; <=63 chars.
CHANNEL_ID=$(echo "$BRANCH_NAME" \
  | tr '[:upper:]' '[:lower:]' \
  | tr -c 'a-z0-9-' '-' \
  | sed -E 's/-+/-/g; s/^-+|-+$//g' \
  | cut -c1-63)

if [[ -z "$CHANNEL_ID" ]]; then
  echo "ERROR: Could not derive a valid Firebase channel id from branch '$BRANCH_NAME'."
  exit 1
fi

echo "==> Deploying branch '$BRANCH_NAME' to preview channel '$CHANNEL_ID' (expires in $EXPIRES)..."

RESULT_FILE="$(mktemp)"
trap 'rm -f "$RESULT_FILE"' EXIT

npx firebase-tools hosting:channel:deploy "$CHANNEL_ID" \
  --expires "$EXPIRES" \
  --json > "$RESULT_FILE"

cat "$RESULT_FILE"

PREVIEW_URL=$(node -e "
  const r = JSON.parse(require('fs').readFileSync('$RESULT_FILE', 'utf8'));
  const site = Object.keys(r.result)[0];
  console.log(r.result[site].url);
")

echo "==> Preview URL: ${PREVIEW_URL}"

# Best-effort: surface the preview URL on the branch's PR, if one is open.
if command -v gh >/dev/null 2>&1 && [[ -n "${GH_API_TOKEN:-}" ]]; then
  export GH_TOKEN="$GH_API_TOKEN"
  gh pr comment "$BRANCH_NAME" --body "🔥 Preview deployed: ${PREVIEW_URL} (expires in ${EXPIRES})" \
    || echo "==> No open PR for '$BRANCH_NAME' (or comment failed) -- skipping."
fi
