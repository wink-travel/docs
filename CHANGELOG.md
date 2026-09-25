# docs changelog

Changelog of docs.

## v1.2.0 (2026-09-24)

### Features

-  **seo**  mark every changelog page noindex,nofollow ([6c826](https://github.com/wink-travel/docs/commit/6c82629565621c1) Bjorn Harvold)  
-  **changelog**  publish Partner API contract releases (#42) ([ca3ac](https://github.com/wink-travel/docs/commit/ca3ac499d27b324) Bjorn Harvold)  

### Bug Fixes

-  **consent**  make the banner theme-aware, readable and locale-correct ([ced36](https://github.com/wink-travel/docs/commit/ced361ff6007ff4) Bjorn Harvold)  

### Other changes

**Release audit: paragraph styling, dead links, and a clean build (#80)**

* Fix the marketing cards broken by a heading nested inside a link 
* The featured audience cards render in pieces: an empty bordered box, then the 
* title, body and CTA spilling out below it. It is live on wink.travel today and 
* affects the homepage, Solutions, Hotels, Partners, Builders, Products, Contact, 
* Booking Engine and WinkLinks. 
* Cause: Starlight&#x27;s rehype-heading-links plugin wraps every heading that has an 
* &#x60;id&#x60; in a &#x60;&lt;div class&#x3D;&quot;sl-heading-wrapper&quot;&gt;&#x60; and appends an 
* &#x60;&lt;a class&#x3D;&quot;sl-anchor-link&quot;&gt;&#x60;. Nine of these cards are an &#x60;&lt;a&gt;&#x60; that wraps an 
* &#x60;&lt;h3&gt;&#x60;, so the generated markup puts an anchor inside an anchor. Nested anchors 
* are invalid, so the browser&#x27;s parser closes the outer card link at that point 
* and every later child escapes the card -- which is exactly the fragmentation on 
* screen. Invisible in review: the MDX source is correct, the damage is done by a 
* plugin downstream, and &#x60;astro check&#x60; does not render. 
* Fix: card titles are no longer headings. &#x60;&lt;h3 class&#x3D;&quot;...&quot;&gt;&#x60; becomes 
* &#x60;&lt;div class&#x3D;&quot;...&quot;&gt;&#x60; with the same classes, so the visual result is identical 
* (Tailwind Preflight zeroes margins on both and all spacing here is explicit). 
* No heading means no id, no anchor, no nesting. A &#x60;&lt;div&gt;&#x60; is used rather than a 
* &#x60;&lt;p&gt;&#x60; because a &#x60;&lt;p&gt;&#x60; in MDX gets its own auto-wrapped paragraph -- the trap 
* this repo has hit twice before. 
* Applied to 9 English cards and the 462 copies across 43 locales, since the 
* translated files carry the same markup and the next i18n run is a day away. 
* Not changed, deliberately: the site-wide &#x60;markdown.headingLinks&#x60; flag would 
* also fix it in one line, but it would strip anchor links from the whole 
* documentation layer to repair nine marketing cards. 
* Verified by screenshot at 1440px before and after: the card now renders as one 
* unit -- badge, title, copy and CTA in the left column, the three check rows in 
* the right -- matching the locked featured-card pattern. Confirmed the same 
* breakage exists in the deployed production build, so this is a pre-existing 
* defect and not a regression from the recent merges. 
* Co-Authored-By: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* Drop &quot;Request API access&quot; — the API is open, so send people to the docs 
* &quot;Request API access&quot; implied a gate that does not exist. Nothing is walled: 
* the Consumer and Booking Engine APIs are free, the MCP server is hosted and 
* public, and a developer only needs OAuth2 credentials. The CTA was sending 
* people to app.wink.travel to ask permission for something already available. 
* All six buttons now read &quot;Get started&quot; and point at /api/overview/, the API 
* reference landing. 
* Two follow-on labels, because the change would otherwise leave a contradiction 
* on the page: 
* - /platforms/ paired the old CTA with &quot;Read the docs&quot; pointing at /builders/, 
* which is a marketing page, not documentation. With the new button going to 
* the real docs, that label named the wrong thing twice over, so it is now 
* &quot;For Builders&quot;. 
* - The API resource page&#x27;s secondary already pointed at /api/overview/, which 
* the primary now covers, so it points at the MCP server docs instead. 
* Prose carrying the same implication is corrected too: the builders FAQ and 
* stepper, the platforms integration FAQ, the builders closing paragraph, and the 
* llms.txt summary line that told AI readers the CTA was &quot;request API access&quot;. 
* Locale copies still carry the translated old wording and the old link; they 
* come current on the next i18n run, which is Bjorn&#x27;s. 
* Verified on a dev server: all six CTAs resolve, /api/overview/, 
* /developers/mcp/, /developers/build-on-wink/ and /builders/ all return 200, and 
* no &quot;request access&quot; phrasing remains in English source or llms.txt. 
* Co-Authored-By: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* Repair paragraphs that lost their styling, and the links that 404 
* Two defects found by auditing the built site rather than the source. 
* MDX auto-wraps the inner text of a multi-line &#x60;&lt;p class&#x3D;&quot;...&quot;&gt;&#x60; in a second 
* &#x60;&lt;p&gt;&#x60;. A &#x60;&lt;p&gt;&#x60; cannot contain a &#x60;&lt;p&gt;&#x60;, so the browser force-closes the styled 
* one and the text escapes with no classes -- losing max-width, the muted colour 
* and top margin. It rendered as &#x60;&lt;/p&gt;&lt;/p&gt;&#x60; on 111 built pages including the 
* homepage, every product page and every audience page. The repo has hit this 
* trap twice before; the documented fix is to keep styled blocks on one line, so 
* 7,087 such blocks are now single-lined across English and every locale. 
* The transform is whitespace-only by construction: code fences are masked out 
* first, and each file is written only if stripping all whitespace leaves it 
* byte-identical. A first attempt without those guards inserted a stray fence 
* into 43 files -- caught by the MDX guard, reverted, and redone. 
* Links, from a full crawl of the built output: 
* - &#x60;/api&#x60; 404s (the API landing is &#x60;/api/overview/&#x60;), linked 37 times from the 
* portal documentation. 
* - &#x60;/dev/&#x60; and &#x60;/travel-content-creators/&#x60; were renamed in #33 and survive only 
* through firebase.json redirects. 24 and 18 internal links, plus two canonical 
* URLs in llms.txt, now point at &#x60;/builders/&#x60; and &#x60;/travel-creators/&#x60; directly 
* rather than taking a redirect hop on every visit. 
* Verified: claims guard, mdx guard (8,489 files) and astro check all clean. 
* Co-Authored-By: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* Limit the paragraph repair to English source 
* Collapsing a multi-line &lt;p&gt; is not always semantically neutral. ko/pricing.mdx 
* carries &quot;~15%&quot; and &quot;15~25%&quot; on adjacent lines; joined into one line, GFM reads 
* the two tildes as a strikethrough span and it crosses a &lt;/span&gt;, so the build 
* fails. The whitespace-only assertion could not catch this -- the bytes were 
* identical, the parse was not. 
* Locale paragraph formatting is therefore restored, and the repair applies to 
* the 37 English files (156 blocks) where it was verified safe. The locale copies 
* regenerate from English on the next i18n run and will inherit the single-line 
* form then. 
* No English paragraph carries the same hazard: every collapsed block was 
* re-checked for paired inline-markdown characters. 
* Co-Authored-By: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* fix(builders): align developer-access copy with the open, no-approval message 
* The rewritten FAQ said there is no approval step while the next answer 
* still called access controlled and approved. Drop the remaining 
* approval wording in builders, platforms and partners. 
* Co-Authored-By: Claude Opus 5.5 (1M context) &lt;noreply@anthropic.com&gt; 
* Claude-Session: https://claude.ai/code/session_01PAEsjxpLHCmVsdMSyNWySN 
* --------- 
* Co-authored-by: Yann &lt;yann@Yanns-MacBook-Pro.local&gt; 
* Co-authored-by: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* Co-authored-by: Bjorn Harvold &lt;bjorn@harvold.com&gt; 

[64bfa](https://github.com/wink-travel/docs/commit/64bfaffda7e028b) YannWink *2026-09-23 13:35:21*

**Add six question-shaped resource pages for AI search (#73)**

* Perplexity and other answer engines pick the page that answers the question in 
* the asker&#x27;s own words. The 14 existing Resources pages are all explainer-shaped 
* -- &quot;What is X&quot;, &quot;A practical guide&quot; -- so the site had strong material and 
* almost no page that opens by answering a question someone actually types. 
* Six pages, each on a distinct query intent none of the existing pages claims: 
* - hotel-affiliate-programs -- how programs pay, what commission is a 
* percentage OF, attribution windows, running one as a hotel 
* - travel-creator-hotel-commissions -- what a creator earns, and why a 
* bookable link keeps paying after a brand fee stops 
* - hotel-booking-fees-explained -- what a direct booking costs, separated into 
* platform fee, pass-through card processing and conditional commission 
* - travel-agency-hotel-booking -- direct hotel supply vs a wholesaler&#x27;s, for 
* agencies, DMCs and tour operators 
* - hotel-booking-api -- the four capabilities a booking integration needs, and 
* the three levels of integration 
* - who-can-sell-hotel-rooms -- when a travel-agency licence is actually 
* required, and why referral and merchant-of-record are different activities 
* Deliberately NOT written: a &quot;can AI assistants book a hotel&quot; page, which was on 
* the original list. /resources/ai-agents-hotel-booking/ already answers it well, 
* and a second page would cannibalise it -- the site&#x27;s own rule is to keep the 
* distinctive page and cut the redundant one. hotel-booking-fees-explained is 
* scoped to fee mechanics and cross-links to direct-bookings-vs-ota-economics for 
* the channel comparison, so those two do not compete either. 
* Every page follows the locked Resources template exactly -- splash layout, 
* ResourceSchema, breadcrumb, a &quot;short answer&quot; block that answers in the first 
* paragraph, mkt-prose body, related cards, FaqGrid with emitJsonLd, dark CTA 
* band -- and all six are listed on the Resources index. 
* Numbers follow the locked wording: 1.5% platform fee plus card processing at 
* cost, 4.0% only as a labelled illustration, 10% default commission calculated 
* after fees, 6-month attribution, and the hotel as merchant of record. No 
* provider is named. 
* Verified on a dev server: all six return 200; each emits exactly one Article, 
* one BreadcrumbList and one 6-question FAQPage with no duplicate types; all 26 
* internal links resolve; the claims guard reports the same 56 pre-existing 
* contradictions as master, so these add none; and with #53 merged in the pages 
* still emit only one BreadcrumbList. 
* Co-authored-by: Yann &lt;yann@Yanns-MacBook-Pro.local&gt; 
* Co-authored-by: Claude Opus 5 &lt;noreply@anthropic.com&gt; 

[cfcb7](https://github.com/wink-travel/docs/commit/cfcb747d04a6bce) YannWink *2026-09-22 16:42:03*

**Date the sitemap, stop the changelog decay, and disambiguate the brand (#72)**

* Date the sitemap, stop the changelog decay, and disambiguate the brand 
* Three AEO gaps, all verified against the live site rather than assumed. 
* The sitemap shipped 16,138 URLs with zero &lt;lastmod&gt;. Nothing looked fresh, 
* and answer engines weight freshness. Dates now come from the last commit that 
* touched each source file -- honest, and it asks no frontmatter discipline of 
* authors. A URL with no resolvable source file gets no date rather than a 
* guessed one; a partial sitemap is valid, a wrong date is not. One &#x60;git log&#x60; 
* pass at config load covers all 16k URLs, and if git is unavailable the index 
* comes back empty so a build can never fail over this. 
* Release-note URLs decay on a schedule: &#x60;keepRecent(25)&#x60; retires older releases 
* every release, so an indexed changelog URL 404s a few releases later. 48 are 
* already dead. They are now excluded from the sitemap and marked 
* noindex,follow -- still readable and still passing link weight to docs, but no 
* longer entering an index they will fall out of. The 48 already indexed get 
* exact 301s in the redirects PR; a glob is impossible there because it would 
* shadow the 100 live changelog pages. 
* &quot;Wink&quot; competes with a smart-home brand and an analytics product, so the 
* Organization node now carries the names people actually search 
* (alternateName), the property Google uses to separate same-named entities 
* (disambiguatingDescription), and knowsAbout topics. 
* The homepage -- the page most likely to be cited -- declared no 
* SoftwareApplication at all, so nothing said what Wink *is* as a product. 
* Product pages each declare their own through ProductJsonLd, so the homepage 
* now reuses that same component rather than introducing a second pattern. It is 
* passed no &#x60;faqs&#x60; on purpose: FaqJsonLd already emits the FAQPage there and two 
* would be a duplicate, which is a real Google error. ProductJsonLd gained one 
* optional prop so the offer can state the actual terms -- a 1.5% platform fee 
* plus card processing at cost -- instead of the generic &quot;Free tier available&quot;. 
* Verified: the lastmod lookup resolves correctly for marketing, resources, 
* docs, locale and fallback URLs and returns nothing for generated routes; the 
* claims guard reports the same 56 pre-existing contradictions as master, so 
* this adds none (all 56 are #48&#x27;s to fix). 
* Co-Authored-By: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* fix: crashing sitemap lastmod fallback, changelog overview noindex, and $0 offer JSON-LD 
* - buildLastmodIndex()&#x27;s git-failure path now returns the same {byPath, english} 
* shape as its success path, instead of a bare Map() that made 
* makeLastmodLookup destructure undefined and throw on the very first lookup 
* in any environment where &#x60;git log&#x60; fails. 
* - toPathname()&#x27;s index-stripping regex is now case-insensitive, matching 
* content.config.ts&#x27;s generateId. 
* - Dropped a dead loop in buildLastmodIndex that re-set entries already set 
* identically by the loop above it. 
* - The sitemap filter and custom-head.astro&#x27;s noindex check both excluded all 
* of /changelog/, including the stable, hand-authored /changelog/overview/ 
* landing page. Both now carve out that one page. 
* - ProductJsonLd&#x27;s offersFree branch hardcoded price &quot;0&quot; even when a custom 
* offerDescription states real, non-zero pricing terms (the homepage&#x27;s 1.5% 
* platform fee / 10% commission copy) -- now omits &#x60;price&#x60; in that case 
* instead of asserting a contradictory $0. 
* - Added unit tests for sitemap-lastmod.mjs (Node&#x27;s built-in test runner, no 
* new dependency) covering the git-failure fallback, the case-insensitive 
* index collapse, and the locale-fallback lookup behavior. 
* Co-Authored-By: Claude Sonnet 5 &lt;noreply@anthropic.com&gt; 
* fix: keep partner-api and overview changelog pages indexable 
* The changelog exclusion added in the previous commit was over-broad: it 
* dropped every /changelog/ URL from the sitemap and noindexed it, including 
* /changelog/partner-api/... (content.config.ts documents this feed as 
* deliberately uncapped -- every tag is a wire contract integrators pin to, 
* the opposite of the churning application/platform feeds keepRecent(25) 
* trims) and /changelog/overview/ (a permanent, hand-authored landing page). 
* - New shared src/lib/changelog-churn.mjs replaces the ad hoc regex/.includes 
* checks duplicated between astro.config.mjs&#x27;s sitemap filter and 
* custom-head.astro&#x27;s noindex check, so they can&#x27;t drift apart again. 
* - New shared src/lib/docs-slug.mjs extracts the file-path-to-route-id logic 
* out of content.config.ts&#x27;s generateId, and sitemap-lastmod.mjs&#x27;s 
* toPathname now calls it instead of reimplementing the same rule 
* independently. 
* - test:unit now runs &#x60;node --test src&#x60; (Node&#x27;s own recursive discovery) 
* instead of &#x60;node --test src/**/*.test.mjs&#x60;, which relied on shell-level 
* &#x60;**&#x60; glob expansion that isn&#x27;t guaranteed under npm&#x27;s default POSIX shell. 
* Co-Authored-By: Claude Sonnet 5 &lt;noreply@anthropic.com&gt; 
* fix: restore &amp;ast; footnote escaping lost in five pricing translations 
* The English pricing.mdx escapes its footnote asterisks as &amp;ast; specifically 
* because a literal &#x60;*&#x60; is markdown emphasis syntax. bg, lv, ru, th and uk&#x27;s 
* translated pricing.mdx (from i18n sync 68f39422) all came back with literal 
* &#x60;*&#x60; instead, in all 5 of the source&#x27;s 5 &amp;ast; locations. Two of them -- 
* the &quot;~15%&quot; and &quot;total, paid by the hotel&quot; spans -- paired as an emphasis 
* node spanning both &lt;span&gt; tags, which broke &#x60;astro build&#x60; outright (&#x60;npm 
* run check&#x60; doesn&#x27;t run a real MDX compile pass, so it stayed undetected on 
* master until someone ran a full build by hand). 
* Translated prose is unchanged; only the escaping is restored, to exactly 
* match what the English source already does at each of these 5 spots. 
* Co-Authored-By: Claude Sonnet 5 &lt;noreply@anthropic.com&gt; 
* fix: resolve schemas dir from cwd instead of a bundled import.meta.url 
* SCHEMAS_DIR was computed as &#x60;../../../../schemas/&#x60; relative to 
* import.meta.url. That resolves correctly against the source file&#x27;s own 
* path, but astro build bundles this route into a chunk at a different 
* directory depth than its source, so the same relative path overshot by one 
* directory in the production build -- landing on the repo&#x27;s parent directory 
* instead of ./schemas -- and made getStaticPaths throw ENOENT, failing the 
* build outright. It only worked in &#x60;astro dev&#x60;, where nothing is bundled or 
* moved, which is presumably why it went unnoticed since it merged. 
* astro dev/build always run with cwd at the project root, so resolve from 
* process.cwd() instead -- it isn&#x27;t affected by where the bundler places the 
* compiled route. 
* Co-Authored-By: Claude Sonnet 5 &lt;noreply@anthropic.com&gt; 
* build: add an MDX compile guard so a bad translation can&#x27;t merge silently 
* Two build-breaking bugs shipped to master this session (a translation that 
* mangled &amp;ast; escaping into literal &#x60;*&#x60;, and a bundling-fragile 
* import.meta.url path) because nothing between &#x60;npm run check&#x60; and a full, 
* manual &#x60;npm run build&#x60; actually compiles the site&#x27;s ~8,200 .mdx files. 
* &#x60;astro check&#x60; does type/schema diagnostics, not a real MDX-&gt;JSX compile 
* pass, so both sat on master undetected until someone ran a full build by 
* hand -- an 8GB, ~10 minute build nobody runs before merging. 
* scripts/check-mdx.mjs compiles every .mdx file with the bare MDX compiler 
* (no Astro plugins, no schemas, no network), which is enough to catch this 
* whole class of structural syntax error in well under a minute. Deliberately 
* covers locale directories too (unlike check-claims.ts, which skips them): 
* a file that can&#x27;t compile is broken regardless of language, and translation 
* is exactly what caused this bug. Wired into &#x60;npm run check:mdx&#x60; and a new 
* CI workflow (.github/workflows/mdx-guard.yml) that runs it on every push 
* and pull request, mirroring claims.yml&#x27;s existing pattern. 
* Co-Authored-By: Claude Sonnet 5 &lt;noreply@anthropic.com&gt; 
* --------- 
* Co-authored-by: Yann &lt;yann@Yanns-MacBook-Pro.local&gt; 
* Co-authored-by: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* Co-authored-by: Bjorn Harvold &lt;bjorn@harvold.com&gt; 

[2c703](https://github.com/wink-travel/docs/commit/2c7031f219a1a2b) YannWink *2026-09-22 16:30:47*

**Recover 110 legacy URLs with 301s, and fix the broken locale redirects (#71)**

* Recover 110 legacy URLs with 301s, and fix the locale redirects 
* An audit flagged four old URLs returning 404 with no redirect. Probing the 
* site&#x27;s history properly -- 3,077 archived URLs from the Wayback CDX index, 
* 450 of them content pages, every one requested against production -- found 
* 219 dead, not four. 110 have a clear modern equivalent and are mapped here. 
* Each 404 throws away whatever link equity and ranking history that URL 
* earned, and Perplexity and other answer engines lean on the Google and Bing 
* indexes, so a dead URL is a dead citation. 
* Two bugs surfaced while testing, both invisible on inspection: 
* The existing &#x60;/:locale/dev{,/**}&#x60; rules have never worked. &#x60;:locale&#x60; and 
* &#x60;{,/**}&#x60; each work alone, but combined they match nothing -- /es/dev/ still 
* 404s today. So the locale half of the #33 rename coverage has been inert 
* since it was added. 
* Worse, &#x60;:locale&#x60; is an unconstrained segment capture: it matches ANY first 
* segment, so &#x60;/:locale/studio&#x60; also matched the live /products/studio/ and 
* 301&#x27;d it away. A bare &#x60;:locale&#x60; is not safe in this repo. Both are replaced 
* with an RE2 named capture over the 42 real locale codes. 
* Specific sources are ordered before broader ones, because Firebase applies 
* the first matching rule and /studio would otherwise swallow 
* /studio/payment-terms. 
* Verified against the real dist/ in the Firebase hosting emulator, not by 
* reading the config: 330 redirect assertions (110 sources x bare, /es, /zh-TW) 
* all land on the intended destination, and 51 live pages -- including the 
* ones the globs sit next to -- still return 200. 
* Deliberately not mapped, and why: 
* - 48 dead /changelog/**/version/** URLs. A glob there would shadow 100 live 
* changelog pages, and keepRecent(25) mints new ones every release, so this 
* needs a policy decision rather than 48 rules. 
* - ~9 consumer travel posts from the Traveliko era (Phuket, Chiang Mai, 
* Bangkok, sustainable travel). Sending them to a B2B blog invites soft-404 
* treatment; leaving them 404 is the honest signal. 
* - WordPress scaffolding (/sample-page, /may-test-1, /locations.kml) and app 
* endpoints (/registration, /user/register), which have no marketing value. 
* Co-Authored-By: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* Redirect the 48 dead changelog URLs to their section index 
* &#x60;keepRecent(25)&#x60; in src/content.config.ts trims older releases on every 
* release, so changelog URLs Google has indexed 404 a few releases later. 48 are 
* dead today. 
* These have to be exact sources, not a glob: /changelog/**/version/** would 
* also match the 100 release pages that are still live, and Firebase evaluates 
* redirects before static files, so a glob there would delete them from the site. 
* This only cleans up what is already indexed. The recurrence is stopped in the 
* AEO signals PR, which drops the changelog from the sitemap and marks it 
* noindex,follow so these URLs stop entering an index they will fall out of. 
* Verified in the hosting emulator: all 48 redirect to their section index, and 
* the live changelog pages -- including paginated and versioned ones -- still 
* return 200. 
* Co-Authored-By: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* --------- 
* Co-authored-by: Yann &lt;yann@Yanns-MacBook-Pro.local&gt; 
* Co-authored-by: Claude Opus 5 &lt;noreply@anthropic.com&gt; 

[520e4](https://github.com/wink-travel/docs/commit/520e48275b7199c) YannWink *2026-09-22 14:33:51*

**Merge pull request #77 from wink-travel/docs/booking-reference-optional**

* docs: make Reference optional for MCP bookings 

[d3e38](https://github.com/wink-travel/docs/commit/d3e38b24128699b) flowmode *2026-09-22 09:31:01*

**Refuse a deploy that would strip search or pages from production (#54)**

* Refuse a deploy that would strip search or pages from production 
* &#x60;firebase deploy&#x60; replaces the entire hosting bucket, so whatever is missing 
* from &#x60;dist/&#x60; is deleted from the live site. Two failure modes here are 
* invisible in the build&#x27;s exit code: 
* Pagefind is the site&#x27;s only search (DocSearch is commented out). A corrupt 
* npm cache entry left &#x60;@pagefind/darwin-arm64&#x60; without its 55 MB binary, so 
* the &#x60;astro:build:done&#x60; hook failed and &#x60;dist/pagefind&#x60; was never written -- 
* while &#x60;npm run build&#x60; still exited 0. Deploying that build would have removed 
* search from production, silently. That cache is now repaired and the index 
* builds again, but nothing stopped the bad deploy except remembering not to. 
* Separately, &#x60;astro build&#x60; exits 0 even when pages fail to render; a build has 
* come out nearly empty at exit 0 before. 
* &#x60;scripts/predeploy-check.mjs&#x60; runs as a Firebase predeploy hook and checks 
* what the exit code does not: the page count is not absurdly low, the search 
* index exists and is non-empty, and the sitemap was written. Each failure says 
* how to fix it rather than only what is wrong. Dependency-free Node so it adds 
* nothing to deploy time, and SKIP_DEPLOY_PREFLIGHT&#x3D;1 overrides it for a 
* deliberate partial deploy. 
* Verified against a real 26,976-page dist: passes intact, refuses with exit 1 
* when the search index is removed, passes again when restored. 
* Co-Authored-By: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* fix(deploy): stop hardcoding the pagefind platform-package version 
* The repair command printed on a missing dist/pagefind/pagefind.js hardcoded 
* @pagefind/darwin-arm64@1.5.2. pagefind is a transitive dependency (pulled in 
* by Starlight), so its version moves on its own schedule as Astro/Starlight 
* are upgraded, with nothing to keep this literal in sync — a stale version 
* could point at a repair command that reinstalls a mismatched pair, since 
* pagefind pins its optionalDependencies to its own exact version. 
* Read the platform package name and version at runtime instead, from 
* pagefind&#x27;s own package.json and process.platform/arch. 
* Co-Authored-By: Claude Sonnet 5 &lt;noreply@anthropic.com&gt; 
* --------- 
* Co-authored-by: Yann &lt;yann@Yanns-MacBook-Pro.local&gt; 
* Co-authored-by: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* Co-authored-by: Bjorn Harvold &lt;bjorn@harvold.com&gt; 

[6fff0](https://github.com/wink-travel/docs/commit/6fff05756cfbe2d) YannWink *2026-09-22 02:59:35*

**Give the documentation layer breadcrumbs and section landing pages (#53)**

* Give the documentation layer section landing pages and breadcrumbs 
* The documentation layer had no BreadcrumbList at all -- roughly 162 
* English pages across getting-started, guides, portal, developers, 
* integrations, account, booking-engine and webinars. Marketing pages 
* declare a trail inline and Resources articles get one from 
* ResourceSchema, but nothing covered the docs. 
* A trail needs a middle crumb whose &#x60;item&#x60; URL actually resolves, and 
* most of these sections had no landing page, so six are added here: 
* getting-started, guides, developers, integrations, booking-engine and 
* webinars. Each lists what the section contains rather than standing in 
* as a stub. 
* portal and account are deliberately NOT given index pages. Both already 
* have an overview page listed first in the sidebar, so a second landing 
* page would compete with it; their crumbs point at the existing 
* /portal/overview/ and /account/overview/ instead. 
* DocsBreadcrumbJsonLd renders once from custom-head.astro and emits 
* Home &gt; Section &gt; Page. It uses an allowlist of sections rather than a 
* blocklist, so a new marketing page can never silently acquire a second 
* BreadcrumbList -- duplicate lists are a real Google error, unlike the 
* absent ones this fixes. 
* guides needs an explicit sidebar entry because that group is built from 
* its four subgroups and autogenerates nothing at its own root, so the 
* page would otherwise exist at /guides/ while being invisible in the nav. 
* Co-Authored-By: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* Claude-Session: https://claude.ai/code/session_01GhX16rWWbzrZbh84gRpYRJ 
* List the guides landing page by its real slug 
* Starlight resolves a sidebar entry against a page&#x27;s slug, and the slug for 
* guides/index.mdx is &#x60;guides&#x60;, not &#x60;guides/index&#x60; — the latter matches no 
* page and throws during route generation. 
* Co-Authored-By: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* --------- 
* Co-authored-by: Yann &lt;yann@Yanns-MacBook-Pro.local&gt; 
* Co-authored-by: Claude Opus 5 &lt;noreply@anthropic.com&gt; 

[04a21](https://github.com/wink-travel/docs/commit/04a21da27cff42d) YannWink *2026-09-22 02:37:51*

**Apply the safe dependency audit fix (#52)**

* Lockfile only -- package.json is untouched and no package is added or 
* removed. Takes npm audit from 36 advisories to 11, and critical from 1 
* to 0, high from 12 to 3. The critical was &#x60;tar&#x60;. 
* The remaining 11 are upstream-blocked, not skipped. Bumping the two 
* implicated direct dependencies was tested and cleared nothing: 
* firebase-tools 15.22.4 -&gt; 15.30.2 and starlight-openapi 0.26.1 -&gt; 0.26.2 
* both leave the same 11. They need semver-major bumps of packages those 
* two pin -- httpsnippet -&gt; form-data under starlight-openapi, and 
* @google-cloud/pubsub / gaxios / uuid / csv-parse under firebase-tools -- 
* so clearing them means either waiting for upstream or forcing majors on 
* the deploy tool and the OpenAPI renderer. Not worth the regression risk 
* for what is left. 
* What is left is also low real-world exposure: esbuild&#x27;s advisory is an 
* arbitrary file read via the dev server on Windows, and stream-json&#x27;s is a 
* DoS in a JSON filter only reachable through firebase-tools at deploy 
* time. Neither ships to a browser; both are build- or deploy-time only. 
* Claude-Session: https://claude.ai/code/session_01GhX16rWWbzrZbh84gRpYRJ 
* Co-authored-by: Yann &lt;yann@Yanns-MacBook-Pro.local&gt; 
* Co-authored-by: Claude Opus 5 &lt;noreply@anthropic.com&gt; 

[8f085](https://github.com/wink-travel/docs/commit/8f0858d65e67289) YannWink *2026-09-22 02:37:16*

**Add the missing breadcrumb to the pricing page (#49)**

* Every comparable marketing page emits a BreadcrumbList — /pricing/ was 
* the only one that didn&#x27;t, despite being a primary commercial page. Adds 
* the Home -&gt; Pricing trail using the same component and pattern as its 
* siblings. 
* Not extended to the documentation layer: sections like /guides/ and 
* /portal/ have no index page, so a middle crumb there would point at a 
* URL that does not exist, which Google rejects. That needs section 
* landing pages first. 
* Claude-Session: https://claude.ai/code/session_01GhX16rWWbzrZbh84gRpYRJ 
* Co-authored-by: Yann &lt;yann@Yanns-MacBook-Pro.local&gt; 
* Co-authored-by: Claude Opus 5 &lt;noreply@anthropic.com&gt; 

[a156b](https://github.com/wink-travel/docs/commit/a156bdf4be850af) YannWink *2026-09-22 02:36:14*

**Add a canonical claims guard and the repository's first CI (#70)**

* Correct the merchant-of-record claim on the marketing pages 
* The legal pages say the hotel is the merchant of record and that payment 
* is collected on its behalf, as its agent. These pages still said Wink was 
* the merchant of record, which contradicts the agreements a hotel signs. 
* Co-Authored-By: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* Claude-Session: https://claude.ai/code/session_01GhX16rWWbzrZbh84gRpYRJ 
* State the price as 1.5% platform fee plus card processing at cost 
* The card processing fee is now passed through to the hotel at actual 
* cost, so a fixed &quot;5.5% all-in&quot; is no longer true: the processing half 
* varies with the guest&#x27;s card and payment method. Every headline now 
* leads with the 1.5% platform fee and names the pass-through, and the 
* worked examples keep 4.0% as an illustration with a footnote saying so. 
* The processor is not named here — marketing says &quot;card processing fee&quot; 
* and the payment terms carry the detail. 
* Co-Authored-By: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* Claude-Session: https://claude.ai/code/session_01GhX16rWWbzrZbh84gRpYRJ 
* Rewrite the pricing documentation page for the pass-through model 
* Drops the acquiring-cost figures we no longer absorb (2.95%, 3.6%) and 
* the negotiation preamble, names the two models by who is merchant of 
* record, and states that payout and currency-conversion costs are the 
* payee&#x27;s, at cost. 
* Co-Authored-By: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* Claude-Session: https://claude.ai/code/session_01GhX16rWWbzrZbh84gRpYRJ 
* Escape the footnote asterisks that broke the MDX build 
* The five bare asterisks marking the card-processing footnote parsed as 
* markdown emphasis and swallowed the closing &lt;/span&gt;, failing the build 
* at pricing.mdx:90. astro check passes over this class of error, so it 
* only surfaced in a full build. Replaced with &amp;ast;, which renders the 
* same and carries no markdown meaning. 
* Co-Authored-By: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* Claude-Session: https://claude.ai/code/session_01GhX16rWWbzrZbh84gRpYRJ 
* Update a stale JSX comment above the payment card 
* The comment still read &quot;Wink is MoR&quot; above the card now titled &quot;Payment 
* collected for the hotel&quot;. Comment text only — no rendered output changes. 
* Co-Authored-By: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* Claude-Session: https://claude.ai/code/session_01GhX16rWWbzrZbh84gRpYRJ 
* Tighten the remaining merchant-of-record wording on Booking Engine 
* Four strings still leaned the wrong way after the merchant-of-record 
* correction. None asserted that Wink is the merchant of record, so they 
* were not contradictions, but they read that way: 
* - &quot;payment handled by Wink&quot; (a heading and two list items) now says 
* &quot;payment collected for the hotel&quot;, matching the rest of the page. 
* - &quot;Merchant of record available on API integrations&quot; and &quot;Merchant of 
* record (API integrations)&quot; both describe a capability offered to the 
* integrator, not to Wink. Reworded so the subject is unambiguous. 
* Co-Authored-By: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* Claude-Session: https://claude.ai/code/session_01GhX16rWWbzrZbh84gRpYRJ 
* Add a canonical claims guard and the CI to run it 
* public/llms.txt publishes Wink&#x27;s canonical positions so AI models and 
* integrators read one authoritative answer. Nothing linked those claims 
* to the ~1,200 pages that restate them, so on 8 September the site began 
* saying both &quot;Wink is the merchant of record&quot; (marketing) and &quot;Wink is 
* never the merchant of record&quot; (llms.txt). It stayed live twelve days and 
* was reported by an integrator&#x27;s AI rather than caught here. 
* The guard fails when English source contradicts a canonical position: 
* merchant-of-record phrasing, the retired &quot;5.5% all-in&quot; and &quot;4.0% payment 
* fee&quot; claims, and the canonical line going missing from llms.txt. It reads 
* source rather than dist/, so it runs in seconds with no build. 
* Validated both ways: 51 contradictions on master, 0 on the branch that 
* fixes them. 
* Locale directories are out of scope by design -- translations are 
* refreshed at release time and lag English, so gating on them would fail 
* every build in between. 
* This is also the repository&#x27;s first CI. 
* Co-Authored-By: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* Claude-Session: https://claude.ai/code/session_01GhX16rWWbzrZbh84gRpYRJ 
* Guard the flat 5.5% price claim, and watch master too 
* Three gaps left after the first pass: 
* The guard banned &quot;5.5% all-in&quot; but not other ways of stating 5.5% as the 
* price. &#x60;Pricing7Demo.astro&#x60; still promised &quot;You only pay 5.5% per booking&quot; — 
* a flat claim of exactly the kind #48 removed. The file renders nowhere (no 
* page imports it), so no visitor saw it, but a string like that is a trap for 
* whoever copies the next pricing block. Both are fixed here. 
* The new pattern is deliberately narrow: &quot;about 5.5% in total with a 4.0% 
* card fee&quot; is the approved footnoted illustration and still passes, while 
* &quot;only pay / you pay / costs / just 5.5%&quot; and &quot;5.5% per booking&quot; do not. Both 
* directions were probed against the real script, and its exit codes (1 when a 
* contradiction is present, 0 when clean) were checked, since CI depends on 
* them. 
* The workflow now also runs on push to master. It was pull_request-only 
* because master carried the 51 contradictions; this branch carries #48&#x27;s 
* corrections, so master is clean the moment it lands. Guarding master itself 
* is the point — a contradiction merged by any other route should fail here, 
* not surface twelve days later in an integrator&#x27;s AI. 
* Co-Authored-By: Claude Opus 5 &lt;noreply@anthropic.com&gt; 
* --------- 
* Co-authored-by: Yann &lt;yann@Yanns-MacBook-Pro.local&gt; 
* Co-authored-by: Claude Opus 5 &lt;noreply@anthropic.com&gt; 

[d4e9c](https://github.com/wink-travel/docs/commit/d4e9cd1671fed5a) Bjorn Harvold *2026-09-22 02:34:29*

**Gate analytics behind consent and resolve the remaining policy placeholders (#44)**

* Google Analytics was loading unconditionally and setting _ga cookies on first 
* page load for every visitor, including EEA/UK, with no consent banner anywhere 
* in the repo — while the Cookie Policy described a banner that did not exist. 
* - Google Consent Mode v2, denied by default, injected before gtag.js. GA loads 
* in cookieless mode and sets nothing until a visitor accepts. 
* - Consent banner (src/components/CookieConsent.astro), mounted site-wide via 
* the Footer override so it covers docs pages as well as marketing. Choice 
* persists in localStorage and is replayed before the first pageview. 
* - Global Privacy Control is honoured in code, not just claimed in the policy: 
* a GPC signal forces analytics storage denied, overrides any stored choice, 
* and suppresses the banner rather than inviting the visitor to override the 
* choice their browser already made. 
* Policy edits, each now backed by the implementation above: 
* - Privacy 8: adds Cloudflare (CDN, email obfuscation). Firebase was already 
* covered by the existing Google entry. 
* - Privacy 12: no Article 27 representative is appointed, so the text says what 
* is true rather than implying one exists (unblocks EDIT 14). 
* - Privacy 13: the CPRA &quot;sharing&quot; question is answerable now that analytics is 
* consent-gated and GPC is honoured (unblocks EDIT 13). 
* - Cookie Policy: all four placeholders resolved — no advertising tags, the 
* banner now exists, GPC honoured, DNT not (no agreed standard). 
* No [CONFIRM] placeholder remains on any published policy page. 
* Claude-Session: https://claude.ai/code/session_01GhX16rWWbzrZbh84gRpYRJ 
* Co-authored-by: Yann &lt;yann@Yanns-MacBook-Pro.local&gt; 
* Co-authored-by: Claude Opus 5 &lt;noreply@anthropic.com&gt; 

[74890](https://github.com/wink-travel/docs/commit/74890e37c3906fe) YannWink *2026-09-08 00:41:35*


## v1.1.1 (2026-09-02)

### Bug Fixes

-  **seo**  emit valid, locale-correct BreadcrumbList structured data ([00e26](https://github.com/wink-travel/docs/commit/00e2652a346d0fd) Bjorn Harvold)  

## v1.1.0 (2026-09-02)

### Features

-  **footer**  rename Academy to Documentation, add Status link ([c8681](https://github.com/wink-travel/docs/commit/c868168b4e741d4) Bjorn Harvold)  

### Bug Fixes

-  **build**  import z from astro/zod instead of deprecated astro:content ([1754c](https://github.com/wink-travel/docs/commit/1754c9c218a002a) Bjorn Harvold)  
-  **i18n**  retry bare fetch timeouts in translate-i18n ([cedf9](https://github.com/wink-travel/docs/commit/cedf976d6079c96) Bjorn Harvold)  
-  **build**  exclude generated dirs from astro check ([408e2](https://github.com/wink-travel/docs/commit/408e2d0fd8bd2e9) Bjorn Harvold)  
-  **nav**  make mobile menu panel scroll on its own ([4dc27](https://github.com/wink-travel/docs/commit/4dc27e2c24491ff) Bjorn Harvold)  
-  **og**  restore homepage's OpenGraph image ([c3856](https://github.com/wink-travel/docs/commit/c38562ccb96ff41) Bjorn Harvold)  

## v1.0.0 (2026-08-30)

### Breaking changes

-  **docs**  read every schema from monorepo-java's build output, never a deployment (#28) ([1cfdb](https://github.com/wink-travel/docs/commit/1cfdb685dbc8f8a) Bjorn Harvold)  
-  **docs**  published reference pointed integrators at DEV servers + channel-manager from build output (#27) ([89b12](https://github.com/wink-travel/docs/commit/89b12b103644abb) Bjorn Harvold)  

### Features

-  add webhooks api reference, event catalog and integration guide (#31) ([97d09](https://github.com/wink-travel/docs/commit/97d0974b53563f5) Bjorn Harvold)  
-  **docs**  publish the platform taxonomy as a static reference page (#29) ([cd8b1](https://github.com/wink-travel/docs/commit/cd8b13397127eab) Bjorn Harvold)  
-  **docs**  read every schema from monorepo-java's build output, never a deployment (#28) ([1cfdb](https://github.com/wink-travel/docs/commit/1cfdb685dbc8f8a) Bjorn Harvold)  
-  **docs**  read the Partner schema from monorepo-java's build output (#25) ([ca42f](https://github.com/wink-travel/docs/commit/ca42f5d0ade57bb) Bjorn Harvold)  

### Bug Fixes

-  **switch**  re-export SwitchChangeEvent type from index ([c7d14](https://github.com/wink-travel/docs/commit/c7d145826f6b237) Bjorn Harvold)  
-  **footer**  update status page link to status.wink.travel ([4c642](https://github.com/wink-travel/docs/commit/4c6422ade45927a) Bjorn Harvold)  
-  **docs**  published reference pointed integrators at DEV servers + channel-manager from build output (#27) ([89b12](https://github.com/wink-travel/docs/commit/89b12b103644abb) Bjorn Harvold)  

### Other changes

**Agentic AI thesis page, audience axis re-cut, published pricing (#34)**

* Marketing IA and positioning work, benchmarked against Nuitée / liteAPI. 
* No pages deleted or merged. 
* ## Agentic AI 
* Promoted to a TOP-LEVEL nav item (desktop + mobile). It previously had zero 
* navigation presence despite 38 internal links pointing at /agentic-ai/ — it 
* was never in MarketingNav.astro at any commit back through phase 1. 
* Reframed from feature description to argument: H1 is now &quot;AI agents can plan 
* a trip. Almost none can book it.&quot; — the recommend-vs-transact spine. &quot;Almost 
* none&quot; is deliberate; the first/only claim is false as of mid-2026 
* (Sabre+PayPal+Mindtrip, OwlTing), and the page&#x27;s FAQ states so. 
* The four-step MCP quickstart moves to /builders/#agent-quickstart, so the 
* thesis page argues and the builders page implements. Previously both carried 
* the same technical content and closed with near-identical CTAs. 
* ## Audience axis 
* Re-cut WHO-first, not reduced — page count was never the problem (the 
* competitor runs eight audience pages successfully); the axis was. Builders 
* (&quot;build into your product&quot;) and Platforms (&quot;plug into travel commerce&quot;) were 
* the same sentence aimed at the same reader, now split into &quot;you write the 
* code&quot; vs &quot;you bring the demand, we settle&quot;. Applied in lockstep across nav, 
* homepage and Solutions card decks, SolutionsHero, ProductEntryGrid and the 
* footer. Also fixed the lane renamed to /builders/ still being labelled 
* &quot;For Developers&quot; in six places; the footer&#x27;s DOCS column stays &quot;Developers&quot;. 
* ## Published pricing 
* The homepage pricing section stated no numbers. It now publishes them: 5.5% 
* (1.5% platform + 4.0% payment), 10% default commission with 6-month 
* attribution, against the 15–25% OTAs charge, under &quot;You can read our rates 
* without talking to sales.&quot; The competitor publishes no pricing page at all. 
* Figures verified against /pricing/ (source of truth). 
* ## SEO/AEO + heroes 
* FAQ #1&#x27;s question and answer re-keyed (the pair feeds FAQPage JSON-LD); 
* llms.txt rewritten with a route to the relocated quickstart; three pages no 
* longer ship duplicated &quot;| Wink | Wink&quot; titles. The last four inset heroes 
* (about, products, pricing, resources) now carry data-full-bleed — all ten 
* marketing heroes are full-bleed, closing the phase-2 goal. 
* Verified in built output: 26,968 pages, no page-render errors. 
* ## Known issues, all pre-existing and NOT introduced here 
* - &#x60;npm run build&#x60; EXITS 0 even when pages fail to render — gate releases on 
* &#x60;grep -q &quot;\[ERROR\]&quot;&#x60; and a page count, never the exit code. 
* - &#x60;npm run check&#x60; exits 1 on a pre-existing starwind-pro/pricing-07 error 
* (SwitchChangeEvent), which ABORTS releaseToMaster.bash under &#x60;set -e&#x60;. 
* - Pagefind cannot build on darwin-arm64 (bin/ ships only .sha256, no binary), 
* so dist/pagefind is never generated. Production currently DOES serve a 
* working index, so deploying from an Apple-silicon machine would remove site 
* search. Confirm &#x60;dist/pagefind/pagefind.js&#x60; exists before &#x60;firebase deploy&#x60;. 

[a122c](https://github.com/wink-travel/docs/commit/a122c0dd538c4a2) YannWink *2026-08-30 14:11:18*

**Marketing phase 2: hero consistency + 10 thought-leadership blog posts (#32)**

* Phase-2 marketing work, rebased onto the #33 hero migration. 
* ## Blog 
* Adds 10 thought-leadership posts (the &quot;Where Hotel Booking Moves Next&quot; 
* series), converted from LinkedIn drafts, plus bjorn/yann author entries and 
* 10 header infographics. All 10 build, are listed on /blog/, and their cover 
* images and author avatars resolve to bundled assets. 
* ## Heroes 
* Equalises hero-box heights across the five audience/solution pages via 
* &#x60;lg:min-h-[33rem]&#x60;, layered on top of the &#x60;data-full-bleed&#x60; system from #33. 
* Also unifies the dark-hero buttons/eyebrows/headline scale/trust row, enriches 
* the sparse creators + social heroes, and fixes the ill-fitting social phone 
* overlay. 
* ## Note on scope 
* This branch originally full-bled every marketing hero via an implicit 
* &#x60;:first-of-type&#x60; CSS rule. #33 landed a better explicit &#x60;[data-full-bleed]&#x60; 
* opt-in, so that rule was dropped in the merge. Five gradient heroes — about, 
* agentic-ai, products, pricing, resources — are outside #33&#x27;s migrated set and 
* so are NOT full-width here. They render exactly as they do on master today; 
* this PR does not change them. Migrating them is a follow-up. 
* The creators marquee, which this branch had dropped, was kept as #33 
* deliberately re-worked it for full-bleed. 
* Verified: &#x60;npm run build&#x60; passes (26,968 pages). 

[5320b](https://github.com/wink-travel/docs/commit/5320be641cc5dfc) YannWink *2026-08-30 10:18:37*

**Marketing hero migration: full-bleed bands, in-band breadcrumbs, /builders/ + /travel-creators/ renames (#33)**

* Migrates every marketing hero to a full-bleed band with its breadcrumb inside, 
* renames two page URLs, and clears a batch of defects found along the way. 
* Full-bleed heroes 
* Starlight centres page content in &#x60;.sl-container&#x60; (max-width 1080px) inside a 
* &#x60;.content-panel&#x60; with 24px padding, so a &#x60;w-full&#x60; hero only ever filled that 
* column; a rule in tweaks.css additionally rounded every marketing band keyed on 
* its background, which the heroes matched incidentally. Each hero therefore read 
* as an inset rounded card rather than a page header. 
* A &#x60;data-full-bleed&#x60; opt-in attribute breaks an element out to both viewport 
* edges, opts it out of the rounded-card treatment, and — when the band opens the 
* page — drops the content panel&#x27;s top padding so it sits flush under the fixed 
* header. Inner wrappers keep their own &#x60;mx-auto max-w-*&#x60;, so only the background 
* goes edge to edge. 
* Applied to /, /solutions/, /hotels/, /partners/, /travel-creators/, /builders/, 
* /platforms/ and the six /products/* pages, plus the global footer — which also 
* moves from purple to black and now runs to the bottom of the document. 
* Breadcrumbs move inside each band. Left above, they sat in the 1080px column 
* while hero content sat in its own 1280px one — 100px apart, over an orphaned 
* 44px white strip. Inside, they inherit the hero&#x27;s container, so alignment is 
* structural rather than a matched number. 
* URL renames 
* /dev/ -&gt; /builders/ and /travel-content-creators/ -&gt; /travel-creators/, with 
* 301s in firebase.json, which had no redirects block — without it the live URLs 
* would 404 and lose their ranking history. Also updates rootFiles in 
* translate-i18n.ts and the .file.hashes.json keys, both of which key on the 
* SOURCE filename: stale keys would have orphaned the hashes and made the next 
* &#x60;npm run i18n:all&#x60; re-translate both pages in every locale. 
* Also fixed 
* - 86 orphaned locale privacy.md/terms.md files, superseded by .mdx in #21 but 
* never deleted, which produced duplicate-slug warnings: Starlight derives an 
* entry slug from the path minus its extension, so both resolved to one route. 
* - Tablet layout. Heroes split at &#x60;@xl&#x60;/&#x60;@lg&#x60; CONTAINER queries — harmless while 
* boxed in Starlight&#x27;s column, but full-bleed makes the section 100vw, so those 
* silently became &quot;576px viewport&quot; and portrait tablets got two ~340px columns 
* holding 60px type. Converted to &#x60;lg:&#x60; media queries. 
* - Homepage supply hub: spokes started at a fixed circular radius against a 
* rounded RECT card, leaving the vertical spoke 18.8 units out while the 
* diagonals sat 8-10. Gap spread across the five: 10.6 -&gt; 0.5 units. 
* - RouteConvergence: every spoke rendered, but an &#x60;items-center&#x60; grid sized the 
* middle column to the engine card, so &#x60;absolute inset-0&#x60; covered 160px of a 
* 302px row and the first and last routes looked unconnected. 
* - Stepper titles fit on one line; five boxes stack to two rows on tablets. 
* - Logo wall reveals brand colour on hover, ported from the portal home page. 
* - Developers hero MCP snippet pointed at a docs server with an invalid argument 
* order; now https://api.wink.travel/mcp with the real OAuth2 + PKCE flow. 
* - Footer regains the GitHub and Discord links dropped during the IA rebuild. 
* - Translations for bg/id/ms of the pages added in #21. 
* Not verified locally: the Firebase 301s (glob syntax only applies on deploy), the 
* logo hover (confirmed by CSS rule inspection — synthetic hover never produced a 
* real :hover state), and horizontal overflow on platforms with classic scrollbars. 

[2d2b9](https://github.com/wink-travel/docs/commit/2d2b9b2289f41a9) Bjorn Harvold *2026-08-30 07:04:34*

**Marketing IA rebuild (phase 1): new pages, positioning, legal, perf (#21)**

* feat: marketing IA rebuild phase 1 — navbar + 8 core pages 
* Add the new 4-item marketing IA (About | Solutions | Pricing | Resources) 
* as splash pages, composed from existing Starwind Pro components with the 
* approved content-rebuild copy, FAQs, CTAs, and locked commercial numbers. 
* Chrome (opt-in, so existing splash pages are untouched): 
* - MarketingNav + MarketingFooter, gated behind a &#x60;marketingNav: true&#x60; 
* frontmatter flag (docs schema extended in content.config.ts) 
* - custom-header.astro Header override + custom-footer.astro branch; the 
* nav fills Starlight&#x27;s fixed &#x60;.header&#x60; wrapper via a scoped :has() reset 
* - helper components: AudienceCards, FactStrip, LeadershipGrid, LinkCards, 
* MockupFeature (native &lt;img&gt;; avoids astro:assets public-path errors) 
* Pages: /home-v2/ (preview homepage), /about/, /solutions/, /hotels/, 
* /partners/, /dev/ (developers audience page, avoids the developers/ docs 
* collision), /pricing/, /resources/. 
* Mockups copied into public/mockups/ with lowercase kebab-case names. 
* English only; live homepage, docs, and other splash pages unchanged. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* feat: redesign FactStrip into stat-tile card 
* Replace the flat dot-separated fact row with a card of distinct stat tiles 
* (brand check badge + text, responsive auto-fit grid, hover lift) on a 
* gradient panel, with the note as an info-icon footnote. Shared component, 
* so Pricing, Hotels, Partners, Developers, Solutions, and the preview 
* homepage all update at once. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* content: standardize Wink positioning across pages 
* Use &quot;hotel social commerce platform&quot; consistently as the category 
* descriptor (matching the About H1), and align the canonical positioning 
* line to: &quot;Wink is the hotel social commerce platform connecting supply, 
* social, partner demand, AI handoffs, Booking Engine fulfillment and 
* payment.&quot; Updates titles, meta descriptions, hero subhead, the homepage 
* eyebrow, and the &quot;What is Wink?&quot; answers on About, Home, Hotels, Solutions. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* content: reposition Wink as AI-native commerce infrastructure 
* Replace the &quot;hotel social commerce platform&quot; descriptor with the new 
* canonical positioning: &quot;Wink is the AI-native commerce infrastructure for 
* hospitality, connecting hotels and partners through a unified booking, 
* fulfillment, and payment platform.&quot; Applied to titles, meta descriptions, 
* the About hero (H1 + subhead split), the homepage eyebrow, and the 
* &quot;What is Wink?&quot; answers on About, Home, Hotels, Solutions. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* feat: marketing site — legal pages, agentic positioning, creators rebuild, SEO/AEO 
* Snapshot of the marketing IA rebuild plus this session&#x27;s work: 
* - Homepage hero repositioned to the open-network framing (&#x27;One hotel supply. 
* Every seller.&#x27;); Agentic AI band surfaced high (directly below &#x27;What is Wink?&#x27;) 
* - Agentic AI page: honest recommend-vs-transact + open-standards positioning, 
* &#x27;is Wink the only one?&#x27;/comparison/standards FAQs feeding FAQPage JSON-LD 
* - Travel Content Creators page rebuilt to the house design standard (no tilts/ 
* stickers/marquee; aligned cards, Tabler icons, mkt-* typography) 
* - Legal: Terms, Privacy, Cookie, Acceptable Use drafts (Wyoming governing law, 
* CCPA+GDPR+PDPA) in the house long-form template — DRAFTS pending counsel review, 
* with [CONFIRM] markers inline; footer legal links activated 
* - SEO/AEO: @astrojs/sitemap wired up (robots.txt referenced a missing sitemap), 
* llms.txt, meta descriptions on all blog posts, breadcrumbs 
* - Creators added across nav/footer/JSON-LD/llms.txt; HomeHero/SolutionsHero 
* inline-script TS fixes; misc consistency cleanup 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* fix: correct legal entity to Winkfluence (trading name Wink) 
* - Footer Organization JSON-LD legalName: &quot;Wink Travel&quot; -&gt; &quot;Winkfluence&quot; 
* - Terms &amp; Privacy: &quot;Wink is a trading name of Winkfluence&quot; (resolves the 
* [CONFIRM] entity placeholders; registered form/suffix still to confirm) 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* polish: rebuild /dev/ hero terminal — fuller, balanced, live 
* - 4-step terminal (connect -&gt; api_search -&gt; create booking -&gt; react) with 
* realistic output, a LIVE badge and a blinking cursor 
* - fills the right column, fixing the dead-space imbalance vs hotels/partners 
* - reuses the wink-msg sequential-reveal animation from the agentic-ai hero so 
* the two technical sibling pages match 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* perf: cap changelogs + exclude from Pagefind — 47k-&gt;24k pages, 53m-&gt;10m build 
* The starlight-changelogs plugin generates a page per GitHub release for every 
* locale (no per-locale opt-out), so ~295 releases x 41 locales x (version + 
* compare) &#x3D; 27,324 pages (58% of the build) of duplicated English release notes. 
* This overwhelmed the build:done phase — Pagefind never finished and the sitemap 
* never generated. 
* - pagefind: false on both changelogs (don&#x27;t index 27k low-value pages) 
* - process: keepRecent(25) — keep the latest 25 releases per repo, drop history 
* Verified build: 24,370 pages (was 46,986), 10m22s (was 53m43s), 0 errors, 
* sitemap-index.xml + pagefind index both now generate. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* fix(security): patch form-data CRLF (high) in contact-form function 
* The /api/contact Cloud Function (functions/) is the only server-side code that 
* ships to production and handles untrusted visitor input. Non-breaking npm audit 
* fix bumps the transitive form-data to 2.5.6, clearing the high-severity CRLF 
* injection (GHSA-hmw2-7cc7-3qxx). 1 high -&gt; 0; 9 moderate remain (transitive in 
* the firebase-admin SDK, only &#x27;fixable&#x27; via a breaking downgrade — left as-is). 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* polish: convert Creators hero dark -&gt; light to match Solutions family 
* All four solution-page heroes now share the house light pattern (eyebrow pill, 
* gradient-word H1 without shimmer, rounded-md CTAs, icon-check feature row, 
* right-column visual + soft radial glow). Removes the last hero inconsistency 
* in the Hotels/Partners/Dev/Creators family. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* feat: Platforms &amp; AI page, positioning alignment, homepage consolidation, About rebuild 
* - New /platforms/ page (For Platforms &amp; AI) — commercial pitch to AI companies, 
* LLMs, banks, super apps; nav + footer wired; Agentic AI moved out of the 
* Solutions dropdown (still linked from homepage/footer/platforms) 
* - Positioning: category re-anchored to &#x27;the commerce infrastructure for 
* hospitality&#x27; (AI-native kept as badge + SEO keyword); &#x27;enable demand not own&#x27;, 
* Gen 1-&gt;4 narrative, is/is-not, worked  pricing example 
* - Homepage consolidation: cut the agentic + closed-loop bands, merged the two 
* differentiator sections, added Platforms &amp; AI as a 5th audience, aligned hero 
* - About: rebuilt investor-grade (no emoji), narrative around the transaction 
* layer / Gen 1-&gt;4 / every demand channel; real team/numbers/locations kept 
* - Creators: light family hero + product mockups (share menu+QR, embeds, 
* per-app social cards) + tasteful GenZ energy 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* polish: visual refresh — Platforms page + homepage de-box-soup 
* - Platforms: &#x27;One integration&#x27; -&gt; dark transaction-layer band (numbered 
* glass cards); audience cards get per-type accent colors; economics -&gt; 
* bold orange-&gt;pink-&gt;purple gradient band 
* - Homepage: Gen 1-&gt;4 &#x27;Why now&#x27; -&gt; connected gradient timeline; &#x27;Who is Wink 
* for?&#x27; 5 cards -&gt; clean 3-2 with accent colors; removed unused 
* ClosedLoopRing + PillarsBand imports 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* fix: surface Platforms &amp; AI across Solutions + llms.txt (consistency sweep) 
* - Solutions page: add the 5th &#x27;For Platforms &amp; AI&#x27; audience card (3-2 layout), 
* update title/description/intro to five routes, fix two stale FAQs (one 
* referenced the removed homepage Agentic AI band) 
* - llms.txt: add For Travel Creators + For Platforms &amp; AI to Core pages (both 
* were missing) and update the Solutions audience list 
* - index.mdx: fix stale &#x27;four audiences&#x27; code comment 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* content: real customer/partner logos in uniform equal-size cards 
* - Add all 21 customer/partner logos to the homepage carousel (chains, 
* independent hotels, channel managers, OTA, bank apps); rename files to clean 
* URL-safe names; drop the download*.png placeholders from the array 
* - LogoCarousel: every logo now sits in an equal white card (object-contain, no 
* distortion) so they render at a uniform size regardless of aspect ratio 
* - 5 logos have dark/opaque backgrounds (The Standard, Floral Court, Lilit, 
* Gother, KrungThai) — kept for now; swap to transparent versions later 
* - Homepage testimonials: drop unsubstantiated &#x27;and creators&#x27; claim (real hotel 
* testimonials kept) 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* fix: monochrome (grayscale) logo wall — restore the standard treatment 
* Restore the grayscale I dropped when rebuilding the cell — a customer logo wall 
* should be uniform black &amp; white, not mixed color. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* polish: per-logo size/opacity tweaks on the logo wall 
* Carousel logos now accept optional scale/opacity. Bump Hotel MYS, RakYim Siam, 
* Unicorn, U Hotels and Veranda slightly; lighten Floral Court (dark-bg tile). 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* fix: un-revisited page consistency — surface Platforms across siblings 
* Audit of pages not deep-touched this session: 
* - Solutions &#x27;Every role converges&#x27; line: add platforms to the audience list 
* - Cross-link the new /platforms/ page from its two most-related siblings: 
* agentic-ai &#x27;connected stack&#x27; pills + a line in the /dev/ &#x27;who it&#x27;s for&#x27; 
* section (it was only reachable from nav/footer/solutions) 
* - Internal links on dev/hotels/partners/pricing/resources/etc. all verified 200 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* polish: normalize font weights on resources + agentic-ai to house standard 
* Headings/eyebrows font-extrabold -&gt; font-semibold (matches mkt-h2 / mkt-kicker 
* &#x3D; 600); CTAs -&gt; font-bold (matches the gradient-CTA pattern on the newer pages). 
* These two heroes were the last stragglers in the heavier old weight; all 
* marketing heroes now share the same weight. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* chore: remove stale creator-testimonials TODO 
* Per decision, no creator testimonials will be added; drop the dangling TODO. 
* The stats band stands on its own. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* content: drop SDKs section, tighten MCP copy on build-on-wink 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* content: remove About team section; drop &#x27;For&#x27; prefix from Solutions nav + footer labels 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* polish: improve Gen 1→4 infographic — connected line, stepped gradients, Now badge 
* Homepage timeline: center the nodes so the gradient connector runs node-to-node 
* (no trailing tail/gaps), step each tile&#x27;s gradient along the orange→pink→purple 
* spectrum to tie nodes to the line, and badge Gen 4 as &#x27;Now&#x27;. Mirror the stepped 
* palette + Now pill onto the About page&#x27;s card version for consistency. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* redesign: Solutions page top — engaging hero + featured-Hotels audience section 
* - SolutionsHero: fix stale &#x27;Four ways to grow&#x27; -&gt; &#x27;Every way to grow&#x27;; add the 
* missing 5th audience lane (Platforms &amp; AI); update subcopy + docstring. 
* - solutions.mdx: replace the wall-of-text &#x27;What solutions&#x27; block and the dense 
* 5-in-3-col AudienceCards with a bespoke section — Hotels featured as the supply 
* side, the four demand-side routes in a compact color-coded row. Less text, clear 
* hierarchy, no empty 6th cell. Drop the now-unused AudienceCards import. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* solutions: retitle convergence section + remove FactStrip band 
* - &#x27;Every role converges on Booking Engine.&#x27; -&gt; &#x27;Every channel leads to the Booking Engine.&#x27; 
* - Remove the FactStrip stat band (5.5%/10%/attribution/$0 + TripPay note) and its import. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* fix(solutions): normalize section spacing — even ~6rem gaps 
* Two consecutive white sections were each py-24, doubling to ~12rem gaps 
* (How it works -&gt; See it in action, carousel -&gt; FAQ). Give those sections 
* top-only padding so each boundary lands at ~6rem like the dark-band 
* boundaries. ProductCarousel is solutions-only so this is page-scoped. 
* Bumped the audience section to py-24 for a uniform rhythm. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* polish(solutions hero): lighten the &#x27;Everyone benefits&#x27; panel 
* Drop the secondary &#x27;path&#x27; subtext line from each swimlane (icon + label + 
* benefit + arrow only) so the panel stops competing with the headline and 
* duplicating the detailed audience section below. Remove now-unused path data 
* + stale comments. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* consistency: homepage &#x27;Who is Wink for?&#x27; adopts the Solutions featured+4 pattern 
* Replace the dense 5-in-3-col AudienceCards (empty 6th cell) with the same 
* featured-Hotels + four-demand-route layout now used on Solutions, so the two 
* key pages share one audience-presentation design. Drop the unused AudienceCards import. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* consistency(spacing): normalize section rhythm to ~6rem gaps 
* Apply the top-only padding convention (pt-24, no doubled bottom) to eliminate 
* the 10-12rem white-on-white gaps: 
* - homepage: full conversion — the top run (What is Wink / Why now / Why different) 
* plus the homepage-only components (PlatformMap, ProductEntryGrid, LogoCarousel) 
* and the Who-is-Wink-for + Pricing sections. 
* - hotels &amp; partners: fix the proof-&gt;model doubled gap. 
* dev/about were already clean; platforms &amp; creators spacing will be handled in 
* their upcoming revamps. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* fix(platforms): top-only padding on the two lower light sections for uniform 6rem rhythm 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* consistency(spacing): top-only rhythm on creators, agentic-ai, pricing, resources 
* Convert light content sections to pt-24 (top-only) so inter-section gaps are a 
* uniform ~6rem; dark/muted bands keep their internal padding. Completes the 
* site-wide spacing standard. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* consistency(copy): standardize commission wording to &#x27;10% default commission&#x27; 
* Unify the variants (bare &#x27;10% commission&#x27;, &#x27;10% partner commission&#x27;, 
* &#x27;10% default partner commission&#x27;) to the dominant &#x27;10% default commission&#x27; 
* across home, solutions, hotels, agentic-ai, pricing. Leaves platforms&#x27; 
* intentional &#x27;up to a 10% commission&#x27; (variable-ceiling framing). 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* fix(nav): mobile &#x27;Solutions&#x27;/&#x27;Resources&#x27; now navigate to their pages 
* The mobile menu used &lt;details&gt;/&lt;summary&gt;, so tapping &#x27;Solutions&#x27; only toggled 
* the dropdown — never reaching /solutions/ (only the easy-to-miss &#x27;All solutions&#x27; 
* sub-item did). Make the mobile label a direct link with its sub-links listed 
* beneath it. Same for Resources. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* polish(about): add wow — gradient proof band + gradient story timeline 
* - Turn the flat &#x27;The proof&#x27; stat cards into a bold orange-&gt;pink-&gt;purple gradient 
* band with frosted-glass stats, breaking the mid-page white monotony. 
* - Give the founding-story timeline a gradient connector line through the nodes. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* redesign(pricing): marketing feel (like About/Home), not a product page 
* - Dark gradient hero (matches About/Home) replacing the light MarketingHero. 
* - Mid-page bold gradient value band ($0/$0/5.5%/~15%) replacing the flat FactStrip. 
* - Replace the Starwind Feature6 one-off with the house accent-card grid. 
* - Fix post-hero spacing; drop the now-unused MarketingHero/Feature6/FactStrip imports. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* feat(nav): add Products menu + /products/ overview page 
* - New &#x27;Products&#x27; nav dropdown (desktop grouped mega-menu + mobile), grouped 
* Core platform / Create &amp; distribute / Developer, each item individually clickable. 
* - New /products/ overview page (dark hero + grouped accent-card grid) as the 
* menu&#x27;s landing, consistent with the marketing family. 
* - Wire API -&gt; /api/overview (master&#x27;s OpenAPI restructure moved it off /api/); 
* fix the now-broken footer &#x27;API reference&#x27; link to match. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* design(products): make the overview mockup-rich, in line with the marketing family 
* Replace the plain icon accent-card grid with real product imagery: 
* - Booking Engine featured with a browser DeviceFrame mockup + value points. 
* - Extranet/Studio/WinkLinks/Social/Traveliko as mockup cards (real screenshots). 
* - API + MCP kept as a clean developer pair with a code motif (no UI to show). 
* Drop the now-unused icon imports; add DeviceFrame + IconCheck. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* design(products): alternating feature rows instead of cramped mockup cards 
* The raw-screenshot cards cropped to unreadable thumbnails. Replace the 
* Create &amp; distribute grid with alternating DeviceFrame feature rows (browser 
* frames, phone frame for WinkLinks) + accent glow — large, readable, premium, 
* cohesive with the featured Booking Engine block. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* design(booking-engine): elevate to flagship — dark hero, gradient band, retire AudienceCards 
* - Dark gradient hero (marketing family) with the checkout mockups popping on dark. 
* - New mid-page gradient value band (5.5% / every route / TripPay / 64+ webhooks). 
* - Replace the old shared AudienceCards with house accent cards. 
* - Top-only spacing pass. All DeviceFrame mockups preserved. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* design(extranet): flagship treatment — dark hero, gradient band, retire Feature6 
* - Dark gradient hero (matches Booking Engine) with the dashboard mockup on dark. 
* - Gradient value band (&#x27;Managed once. Read by every route.&#x27;). 
* - Replace the Starwind Feature6 one-off with the house feature grid. 
* - Top-only spacing pass; all ShowcaseRow/DeviceFrame mockups preserved. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* design(studio): flagship treatment — dark hero + gradient value band + spacing 
* Dark gradient hero with the discovery mockup on dark; gradient band (&#x27;Every 
* asset is bookable, not static.&#x27;); top-only spacing. PillarsBand + all 
* Shareable Links / Web Components mockups preserved (no legacy components here). 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* design(winklinks): flagship treatment — dark hero, gradient band, retire AudienceCards 
* Dark gradient hero (storefront + phone mockups on dark, code chip restyled for 
* dark); gradient value band (&#x27;One link. A whole bookable storefront.&#x27;); replace 
* AudienceCards with house accent cards; top-only spacing. All mockups preserved. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* fix(product pages): correct the spacing I botched on the 4 upgraded pages 
* My earlier pt-only script only matched py-N sections, so pb-only sections were 
* skipped and left with zero top gap (cramped seams on Booking Engine, Studio, 
* WinkLinks). Plus mixed band internals (py-16/20/24). 
* Audited each page by eye and normalized: 
* - all light content sections -&gt; pt-24 (uniform 6rem gaps; fixed the 3 cramped seams) 
* - all bands (muted / gradient / CTA) -&gt; internal py-24 
* - heroes stay py-20 @lg:py-24 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* fix(PillarsBand): top-only padding in light mode — kills the doubled gap 
* In light mode PillarsBand is a plain section but had py-24 both sides, so it 
* doubled (~12rem) with the adjacent pt-24 sections — the big empty gap below the 
* pillar cards on Extranet/Studio/WinkLinks (and Social/Traveliko). Light -&gt; pt-24; 
* dark band keeps py-24. This is the gap I missed when I claimed Extranet was fine. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* design(social): flagship treatment — dark hero, gradient band, retire Feature6 + ProductHero 
* - Replace light ProductHero with inline dark hero (phone mockup on dark). 
* - Retire the Starwind Feature6 -&gt; house feature grid. 
* - Add gradient value band (&#x27;Hotel social, ready to book.&#x27;). 
* - Spacing: all light sections pt-24, bands py-24. Verified every transition by eye 
* (no cramped seams, no doubled gaps incl. the PillarsBand boundary). 
* - All ShowcaseRow mockups + SocialPlans tiers preserved. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* design(traveliko): flagship treatment — dark hero, gradient band, spacing (incl. pb-only seam) 
* - Dark gradient hero (homepage mockup + floating offer card on dark). 
* - Gradient value band (&#x27;Consumer demand — at the same 5.5% as direct.&#x27;). 
* - Spacing pass that ALSO converts the pb-only &#x27;Where it fits&#x27; section to pt-24 
* (the cramped-seam trap) — no pb-only sections remain. Verified every 
* transition by eye. All mockups preserved. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* audit fixes: optimize images (WebP), SEO meta, content accuracy 
* - SPEED: convert all 37 mockups to resized WebP (max 1600px, q82) — public/mockups 
* 30MB -&gt; 2.1MB (93% smaller); update all 35 refs; delete the original PNG/JPEGs. 
* - SEO: trim 7 over-long meta descriptions to ~150 chars; shorten solutions + 
* platforms titles to &lt;&#x3D;60. 
* - CONTENT: unify webhook count to &#x27;64+&#x27; on booking-engine (was &#x27;60+&#x27; in one FAQ). 
* - SPACING: fix the pb-only &#x27;resources&#x27; section seam -&gt; pt-24. 
* (Org/WebSite JSON-LD already present site-wide via the footer — no change.) 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* Unify all 5 audience-page heroes to the dark hero family 
* Convert hotels, partners, travel-content-creators, dev and platforms 
* heroes from light to the shared dark gradient hero pattern 
* (#2a0f52 → #1f0a40 → #150629) used by the product pages — eyebrow 
* pill, gradient headline word, orange/glass CTAs, and white check rows. 
* Visuals preserved per page: DeviceFrame mockups (hotels/partners/ 
* creators), the agent-integration terminal (dev, darkened to contrast 
* the hero), and the &quot;stack&quot; infographic (platforms, restyled to a dark 
* glass card). Closes audit item 6. 
* Revamp Booking Engine page: cut repetition, fix spacing 
* - Merge &quot;Direct answer&quot; + &quot;One engine, every route&quot; into one section 
* (keep the route pills and the Extranet→Booking Engine distinction, 
* drop the duplicated &quot;every route resolves here&quot; thesis and a whole 
* muted band that restated the hero). 
* - Redesign &quot;How payment works&quot; from a generic 4-card grid into a 
* distinctive 2-column money-flow (copy + 5.5% callout + a vertical 
* TripPay stepper), consolidating all payment messaging in one place. 
* - Slim &quot;Built for developers &amp; AI agents&quot; from a 6-card clone of the 
* dev page into a concise teaser (intro + pills + CTAs to /dev/). 
* - Normalize spacing: all bands py-24 (mobile was py-20), section 
* headers mb-12, top-only sections pt-24. 
* - Drop 13 now-unused tabler icon imports. 
* Sharpen Booking Engine positioning around its two jobs 
* The page led with &quot;one checkout behind every booking&quot; and buried the 
* hotel-website use case as item #1 in a flat route list, so the product&#x27;s 
* actual identity got lost. Make the dual role the page&#x27;s spine: 
* - Hero now names both jobs: the booking engine hotels put ON THEIR OWN 
* WEBSITE for direct bookings, AND the transaction layer behind every 
* other route. Check row: &quot;On your website / Behind every route / 5.5%&quot;. 
* - Replace the vague 10-pill route cloud with a structured two-card 
* section: &quot;On your website&quot; (your branded direct booking engine) vs 
* &quot;Across the platform&quot; (the layer every route resolves into), so the 
* rest of the page reads as support for those two jobs. 
* Rebuild Booking Engine page to agreed content + design spec 
* Full section-by-section rebuild after locking content and design intent 
* top-down with the user: 
* Content: 
* - Hero headline locked: &quot;Powering bookings anywhere online — your 
* website, your platform.&quot; Chips: Your website / Your platform / 5.5%. 
* - Section 2 reframed around the two jobs: a complete SaaS booking engine 
* on the hotel&#x27;s own site (shown via capability list), PLUS the 
* transaction layer that converts partner/creator/AI demand, hotel in 
* control. Card labels &quot;Your website&quot; / &quot;Your platform&quot;. 
* - Developers: add merchant-of-record option, scoped to API integrations. 
* - Payment money-flow: partner split now conditional (&quot;only if 
* applicable&quot; — direct bookings have no partner). 
* - FAQ, JSON-LD, meta title/description realigned to the new positioning. 
* Design (background rhythm, spacing normalized): 
* - Reorder to the agreed 10-section skeleton (Payment before Mobile). 
* - Remove the stats value band (not in the agreed structure). 
* - Re-skin rhythm: Payment -&gt; muted band, Mobile -&gt; white, 
* Developers -&gt; dark band (dark bookends + dark mid-point). 
* - Bands py-24, white sections pt-24, headers mb-12. 
* consistency(spacing+copy): normalize remaining doubled seams to top-only rhythm 
* Full-site audit (screenshots of all 21 pages) found 8 doubled ~12rem 
* seams from both-sides padding that the earlier pt-only passes missed: 
* - hotels, partners, dev (2 sections each), solutions, platforms, about 
* (2), team, jobs: light content sections py-24 -&gt; pt-24, matching the 
* locked top-only standard used by the product pages. 
* - Homepage: Starwind Testimonial2 renders its own py-24 section; scoped 
* a class&#x3D;&quot;pb-0&quot; override on the EN usage (vendored component and the 
* 43 locale pages left untouched). 
* - LinkCards.astro: py-16 both sides -&gt; pt-24, standardizing the 
* resources-page rhythm. 
* Copy nits from the same audit: 
* - partners stat label &quot;Default partner commission&quot; -&gt; &quot;Default 
* commission&quot; (10% default commission wording standard). 
* - platforms FAQ heading &quot;Platforms &amp; AI — FAQs&quot; -&gt; &quot;Platforms &amp; AI 
* FAQs&quot; to match the sibling &quot;X FAQs&quot; pattern. 
* Verified: re-screenshot of all 10 affected pages; every seam now 
* measures ~96px and light-&gt;dark band transitions match the compliant 
* product-page pattern. No blank runs &gt;&#x3D;150px remain site-wide. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* consistency(spacing): one padding scale site-wide — pt-24 sections, py-24 band interiors 
* Second pass after fine-grained seam measurement (every blank run &gt;&#x3D;40px 
* on all 21 pages) showed the rhythm was still uneven page-to-page: 
* - &quot;What is Wink for X?&quot; answer blocks on hotels/partners/dev/platforms 
* were py-16 while creators and every product page use pt-24 — this was 
* the ~68px post-hero gap on exactly those four pages. Now pt-24. 
* - Full-bleed band interiors came in three sizes (py-16 on the audience 
* problem/engine bands + solutions, py-20 on eight mid-page bands, 
* py-24 on product/about/CTA bands). All normalized to the py-24 
* standard: hotels, partners, dev (2 each), solutions, platforms, 
* agentic-ai, pricing, creators, extranet, studio, winklinks, 
* traveliko. Heroes keep py-20 @lg:py-24 (already 96px at desktop). 
* Verified by re-measurement: section seams now cluster at ~96-110px on 
* every page; remaining sub-100 runs are uniform in-section heading and 
* row margins shared site-wide. Dark-mode render spot-checked clean. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* homepage: cut redundant PlatformMap section + plain-language What-is-Wink copy 
* Homepage design review flagged two issues: the page restated one idea 
* (hotel owns supply -&gt; many demand channels -&gt; Wink layer -&gt; Booking 
* Engine) in ~5 sections, and the copy after the hero was written in 
* category/investor language rather than for the reader. 
* - Remove the PlatformMap section. Its content is fully covered 
* downstream: ProductEntryGrid already features Booking Engine as the 
* emphasized &quot;Fulfillment layer&quot; and lists the same products (Extranet, 
* Studio, Social, WinkLinks, Traveliko, Developers), and the layer/ 
* positioning lives in the What-is-Wink cards + Who-is-Wink-for router. 
* This also kills the two dense table-style sections back-to-back — the 
* contrast table now flows straight into the audience router. Page is 
* 890px shorter with zero information loss; section rhythm unchanged 
* (no new seam at the removal point). PlatformMap.astro left in place 
* (now unused; homepage was its only caller). 
* - Rewrite the What-is-Wink body from &quot;connects hotel-controlled supply 
* with every demand channel&quot; to plain benefit language leading with the 
* hotelier&#x27;s question and the 5.5% vs 15-25% proof point. H2 category 
* line (&quot;The commerce infrastructure for hospitality&quot;) and the AI-native 
* badge kept as-is. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* consistency: house CTA close on homepage + fix contact form to Wink voice 
* Closes the two remaining homepage-review items. 
* - Homepage: add the shared dark CTA band (&quot;Ready to turn travel into 
* bookings?&quot; / Get started + Request a demo) after the FAQ, so the page 
* ends FAQ -&gt; dark CTA -&gt; footer like every audience and product page 
* (it was the only page ending FAQ -&gt; footer). Same markup/spacing as 
* the family band; seam verified clean. 
* - Contact: the page imported Contact2Demo (the vendored Starwind demo), 
* so the form block showed demo copy (&quot;We&#x27;d Love to Hear From You&quot;, 
* &quot;Found a bug?&quot;). Repoint to the real Contact2 with Wink-voice props 
* (&quot;Prefer to write?&quot; / route-finder description). Form fields and the 
* submit path (POST /api/contact -&gt; Firebase contactForm function via 
* the firebase.json rewrite) are unchanged and still work in prod; only 
* the heading/description copy changed. The page&#x27;s hero and 4-card 
* route grid were already house-style. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* chore: remove unused PlatformMap component 
* Orphaned after bd3d43df dropped it from the homepage (its only caller). 
* No remaining references in src/. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* about: cut homepage-redundant category sections, add founders + team link 
* About page review flagged that the first three content sections 
* re-explained the category almost verbatim from the homepage, delaying 
* the story, and that the page claimed &quot;built by operators&quot; with no faces 
* and no link to /team/. 
* - Remove the Gen 1-&gt;4 &quot;The shift&quot; section (verbatim dup of the homepage 
* &quot;Why now&quot; section) and the dark &quot;Every demand source asks the same 
* questions&quot; pills section. Keep the light &quot;The whole transaction layer&quot; 
* section as the single short context beat, and drop its trailing 
* &quot;own vs enable demand&quot; paragraph (also verbatim homepage). Flow is now 
* hero -&gt; transaction-layer beat -&gt; operator story -&gt; proof -&gt; beliefs 
* -&gt; founders -&gt; locations -&gt; CTA, with the story promoted to 3rd. 
* - Add a founders teaser (Bjorn Harvold, Yann Gouriou — photos, roles, 
* bios, LinkedIn) after &quot;What we believe&quot;, linking to /team/. Gives the 
* &quot;built by operators&quot; claim actual faces; placed as a light section so 
* it also breaks the muted-band run. 
* - Add Team to the footer Company column (the team page was reachable 
* from no global nav or footer link before). 
* - Drop 3 now-unused icon imports (IconBroadcast + the pre-existing dead 
* IconCheck/IconX); add IconBrandLinkedin. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* about: remove founders teaser section (per request) 
* Pulls the Bjorn/Yann founders block added in 55a6210f. Kept: the 
* homepage-redundant category-section cuts and the footer Team link. 
* Drops the now-unused IconBrandLinkedin import. 
* Flow is now hero -&gt; transaction-layer beat -&gt; operator story -&gt; proof 
* -&gt; beliefs -&gt; locations -&gt; CTA. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* solutions: cut generic how-it-works, reframe router on supply-vs-demand, fix 5th CTA route 
* Audit of the Solutions (audience-router) page found three within-page 
* issues (the homepage&lt;-&gt;Solutions card pattern match is intentional and 
* left untouched): 
* - Remove the generic &quot;How it works&quot; (Create/Distribute/Convert/Fulfill/ 
* Learn) section — it restated the convergence the Booking Engine 
* infographic shows one section earlier, in five abstract verbs, and the 
* concrete how-it-works lives on each audience sub-page. Page 685px 
* shorter and reads more like a router. 
* - Reframe the &quot;Five routes&quot; section heading/subhead to lead on the 
* supply-vs-demand distinction (&quot;Hotels control supply. Everyone else 
* creates demand.&quot;) instead of a generic &quot;Five routes. Pick your role.&quot; 
* This gives the section a thesis distinct from the hero&#x27;s five-lane 
* &quot;everyone benefits&quot; glance, and makes the locked featured-Hotels + 4 
* route-cards layout explain itself (1 supply card + 4 demand cards). 
* The cards themselves are unchanged — the locked homepage&lt;-&gt;Solutions 
* audience-presentation pattern is preserved. 
* - Add the missing &quot;For Platforms &amp; AI&quot; button to the final CTA (it 
* listed only 4 of the 5 routes). 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* fix(spacing): restore bottom padding on light sections that precede a band 
* The first spacing pass normalized light sections to pt-24 (top-only) to 
* avoid doubled gaps between consecutive light sections. That rule is wrong 
* for a light section sitting immediately before a full-bleed band (dark, 
* muted, or gradient): the band&#x27;s top edge is a hard color boundary and its 
* py-24 is internal, so a pt-only light section butts its content straight 
* against the band edge (cramped seam — visible as cards touching the dark 
* band on /solutions/). 
* Correct rule: a light section needs pb-24 when the NEXT section is a band, 
* and stays pt-only when the next section is light (else the gap doubles). 
* Audited every light-&gt;band transition site-wide (23 seams across 14 pages 
* + the /solutions/ router) and added pb-24 to each. Verified the 5 
* light-&gt;PillarsBand transitions on product pages are light-&gt;light 
* (PillarsBand renders variant&#x3D;light there) and correctly left pt-only. 
* Fixed seams spot-checked visually on solutions, hotels, about. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* partners: de-duplicate proof band — replace redundant 3-5x stat with $0 cost 
* The proof band had two cards stating the same fact: &quot;10% (vs 3-5% OTA 
* affiliate)&quot; and &quot;3-5x (higher than OTA affiliate)&quot; — the footnote even 
* spells out they&#x27;re the same (&quot;10% default commission is 3-5x typical OTA 
* affiliate rates&quot;). Replaced the 3-5x card with &quot;$0 — Cost to join — no 
* setup or platform fee&quot; so all four stats are distinct: earn rate, cost, 
* attribution, traction. Verified against pricing (partners earn 10% paid 
* from the hotel side and pay no setup/platform fee; &quot;Start free. Pay when 
* booking value is created&quot;). The 3-5x comparison is retained in card 1&#x27;s 
* note and the footnote. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* partners: drop the 1-in-3 proof stat, tidy the band to 3 aligned cards 
* Per request: remove the &quot;1 in 3 direct bookings via partners&quot; stat. 
* Band is now a clean 3-column row (10% / $0 / 6 Months) instead of 4 cols 
* with an empty cell. Added whitespace-nowrap to the stat so &quot;6 Months&quot; 
* stays on one line and all three labels align on the same baseline. 
* Footnote updated to drop the orphaned 1-in-3 claim, keeping true 
* supporting detail (commission after Wink&#x27;s 5.5%, paid on confirmed stays). 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* creators: cut redundant &#x27;By the numbers&#x27; band + fix broken chat-share images 
* - Remove the &quot;By the numbers&quot; stat band ($0 / 10% / 6 months). Those 
* exact economics are already covered in the hero chips and the 
* &quot;Everything you need to earn&quot; cards two sections up (which additionally 
* carry the storefront + attribution detail). Unlike Hotels/Partners, 
* this band had no distinct proof data — pure restatement. Cut it. 
* - Fix broken images in the &quot;Lands native in every chat&quot; gallery: the 
* code referenced shareable-link-*.png but the files on disk are .webp, 
* so all five (WhatsApp/iMessage/Messenger/Signal/Line) were 404ing. 
* Corrected the extension; images now load. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* dev: trim density, restore API-first payoff, de-duplicate surface link 
* Three fixes from the /dev/ review: 
* 1. Density — &quot;Who it&#x27;s for&quot; 6 cards -&gt; 4 (clean 2x2). Dropped &quot;Super apps 
* &amp; platforms&quot; and &quot;Loyalty &amp; banking&quot;: the section already routes those 
* audiences to /platforms/ via its own &quot;for an AI product, bank or super 
* app? See For Platforms &amp; AI&quot; line, so the cards were both redundant and 
* slightly contradictory. Kept the four dev-build audiences (product, AI, 
* agencies/DMCs, channel-manager/PMS). Grid set to 2-col so 4 cards stay 
* even (no orphan cell). Removed the now-unused IconBuildingBank import. 
* 2. Payoff was ending the API-first page on &quot;Embed hotel content WITHOUT a 
* full API build&quot; — underselling the API at the climax. Reframed to 
* &quot;From a full API build to a drop-in component&quot;: leads with the full 
* REST + MCP integration, presents Web Components as the light end of the 
* range, and adds a &quot;See the Build on Wink docs&quot; link. 
* 3. &quot;Pick your surface&quot; had two cards (API &amp; MCP, Web Components) linking 
* to the same /developers/build-on-wink/. Pointed API &amp; MCP at 
* /api/overview so the two surfaces have distinct destinations. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* platforms: tighten redundant sections 
* - Reframe &#x27;How to integrate&#x27; → &#x27;Where to go from here&#x27; springboard; 
* stop re-explaining REST+MCP (already covered by hero + 8-card band), 
* keep the three nav pills. 
* - Change transaction-layer band kicker &#x27;One integration&#x27; → 
* &#x27;Commerce infrastructure&#x27; to reduce the over-used refrain. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* booking-engine: extract money-flow to swappable infographic slot + trim redundancy 
* - New infographics/ folder convention: each hand-drawn diagram lives in its 
* own component with a SWAPPABLE header comment, so it can be replaced by an 
* improved diagram/SVG/image in one file without touching the page. 
* - Extract &#x27;How the money moves&#x27; → infographics/MoneyFlow.astro; page now 
* calls &lt;MoneyFlow /&gt; (renders pixel-identical). 
* - Trim redundant section-2 closing paragraph (kept the Extranet link), the 
* &#x27;every route resolves&#x27; thesis is already stated across later sections. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* infographics: extract shared route-convergence diagram to one swappable slot 
* The &#x27;routes -&gt; Booking Engine -&gt; confirmed outcome&#x27; diagram was duplicated 
* inline on solutions/hotels/partners/dev (byte-identical except routes, 
* outcome title/note). Extract to infographics/RouteConvergence.astro; each 
* page now drops &lt;RouteConvergence routes&#x3D;{...} outcomeTitle outcomeNote /&gt; and 
* keeps its own band + heading. Improve the diagram once -&gt; all four update, 
* and the locked shared-template stays in sync. Renders pixel-identical. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* infographics: extract platforms hero stack + document hero diagram slots 
* - Extract the /platforms/ hero &#x27;intent -&gt; transaction -&gt; confirmed booking&#x27; 
* stack into infographics/PlatformStack.astro; page drops &lt;PlatformStack /&gt; 
* (renders pixel-identical). 
* - Add the SWAPPABLE header banner to HomeHero + SolutionsHero so the supply-hub 
* and swimlanes diagrams follow the same documented swap convention (their 
* infographic is the right-hand hero column). 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* extranet: reframe distribution band around the two-layer boundary 
* The band&#x27;s headline (&#x27;One approved supply, feeding every channel&#x27;) duplicated 
* the gradient value band&#x27;s thesis (&#x27;Managed once. Read by every route&#x27;). Lead 
* instead with the section&#x27;s distinctive point — the Extranet vs Booking Engine 
* boundary that answers the top FAQ — keep the route chips as evidence, drop the 
* now-redundant trailing paragraph. No infographic on this page to slot. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* studio: reframe &#x27;And more&#x27; around the Studio/Booking Engine boundary 
* The asset-format list is recited ~6x across the page; the &#x27;And more&#x27; section 
* was a 6th recital (&#x27;Every asset Studio can create&#x27;) with its distinctive point 
* — the Studio vs Booking Engine boundary (a top FAQ) — buried in a trailing 
* line. Lead with that boundary (parallels the extranet reframe), keep the chips 
* as evidence, drop the redundant trailing paragraph. No infographic to slot. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* social: trim capabilities grid so it complements the workflow, not recaps it 
* The 6-card &#x27;What Social does&#x27; grid re-listed the workflow (Generate/Approve/ 
* Schedule) already shown with screenshots one section up, plus the content 
* engine. Drop the two most verbatim duplicates (Content generation, Approval 
* workflow); keep the four that add scannable value (Calendar, Multi-language, 
* Bookable links, Analytics); reframe heading to &#x27;The rest of the toolkit&#x27;. 
* Even 4-up grid. No infographic to slot. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* agentic-ai: extract the two hand-drawn infographics to swappable slots 
* - Hero agent-conversation mockup -&gt; infographics/AgentConversation.astro 
* (animated messages via .wink-msg-* keyframes in tweaks.css, preserved). 
* - &#x27;The shift&#x27; old-way vs with-Wink before/after flow -&gt; 
* infographics/AgenticShiftFlow.astro. 
* Both render pixel-identical; page now drops &lt;AgentConversation /&gt; and 
* &lt;AgenticShiftFlow /&gt;. Content left as-is (deliberately AEO-thorough, calibrated). 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* pricing+social: move Social/API to usage-based, retire subscription tiers 
* Aligns the marketing site with the current pricing model (per live 
* /getting-started/pricing/): Social and API are usage-based, not subscriptions. 
* - New UsagePricing.astro (shared): pay-as-you-go table — Social image $1.50 / 
* AI-image $2.50 / AI-video $14 / AI reply $0.05; Partner API 10k hotel-days 
* free then $0.0001/unit; free monthly allowance, metered on publish. 
* - /pricing/: replace the &#x27;Social is the exception&#x27; subscription block with a 
* &#x27;free core + usage-based&#x27; section (free-forever chips + usage table); update 
* the Social route card; rewrite the subscription FAQ to usage-based and add an 
* &#x27;How is API usage priced?&#x27; FAQ. Two booking models, 10% partner commission 
* and the $100 worked example were already correct — left intact. 
* - /products/social/: replace the plans/SocialPlans section with the usage table; 
* ProductJsonLd offers -&gt; offersFree. 
* - Remove now-defunct SocialPlans.astro (subscription tiers no longer offered). 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* consistency: stop calling Traveliko a &#x27;marketplace&#x27; (it positions against it) 
* The Traveliko page deliberately frames it as &#x27;not a marketplace&#x27;. Align the 
* three spots that contradicted that: products overview title + desc, the 
* Solutions image alt-text, and the nav dropdown description -&gt; &#x27;consumer 
* discovery channel&#x27;. Generic OTA/marketplace/metasearch references (homepage, 
* acceptable-use) left as-is. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* resources: add BreadcrumbJsonLd for SEO consistency 
* Resources was the only hub/product page missing breadcrumb structured data. 
* Add it to match the rest of the site (JSON-LD only, no visual change). 
* Team + Jobs audited and left as-is (clean, accurate, even grids). 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* docs(pricing): bring getting-started/pricing current with the usage-based model 
* The docs pricing page still had the old &#x27;## Subscriptions&#x27; section; master 
* already carries the canonical usage-based rewrite (What&#x27;s free / Usage 
* pay-as-you-go / no subscriptions). Pull master&#x27;s version and repoint its one 
* feat-dead link (/account/subscription, a master docs-reorg path) to feat&#x27;s 
* existing billing page (/portal/plan). Page compiles; both links resolve. 
* Note: feat is ~38 commits behind master on the docs/portal reorg; the rest of 
* those doc updates should come via the standard master-&gt;feat merge. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* pricing: rebuild the free-vs-paid section for clarity (two columns) 
* The old &#x27;The platform is free. You pay only for heavy usage.&#x27; section was 
* unclear: &#x27;heavy usage&#x27; read as a threat, and two labels used &#x27;allowance&#x27; in 
* opposite senses right next to each other. 
* Rebuild as two equal, scannable cards — &#x27;Free forever&#x27; checklist beside a 
* highlighted &#x27;Pay-as-you-go&#x27; card — under a plain heading &#x27;Free to use. Pay 
* only for what you use.&#x27; Add a compact variant&#x3D;&quot;list&quot; to UsagePricing so the 
* prices fit the narrow column; the Social page keeps the full table (default 
* variant, unchanged). 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* pricing: match the two cards — same color and equal height 
* The Free-forever and Pay-as-you-go cards were mismatched (right card had a 
* primary tint + thicker border and was taller). Make both identical 
* border-border/bg-card and drop items-start so the grid stretches them to 
* equal height. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* pricing: give both free/paid cards a light purple highlight 
* Both cards now use border-primary/20 + bg-primary/[0.05] (matching light-purple 
* tint) so they read as highlighted and identical. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* winklinks: upgrade thin &#x27;Storefront content&#x27; chip strip to an icon grid 
* Rebuild the bare heading + flat chip row as a 3-col icon-tile grid with a 
* one-line subhead, so the range of bookable content reads as a real section. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* about: replace illustrative &#x27;proof&#x27; stat band with a &#x27;Who we serve&#x27; section 
* Remove the unverified 12-month/9-hotel/4,500+ panel stats. Replace with an 
* SEO/AEO-oriented &#x27;Who we serve&#x27; section on the same gradient band: the hotel 
* segments (independent, boutique, small &amp; regional groups) and the ecosystem 
* (partners, creators, developers, AI agents), each with descriptive copy. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* hotels: replace illustrative proof band with a property-type SEO section 
* Remove the unverified panel stats (+7-25%, 4,500+, 12-month/9-hotel panel) and 
* the panel-based &#x27;What proof do you have&#x27; FAQ. Replace the proof band with an 
* SEO/AEO &#x27;Built for every kind of hotel&#x27; section — boutique, resorts, serviced 
* apartments, guesthouses, hostels, and hotel groups &amp; chains (chains welcomed, 
* not excluded) — plus a defensible fit FAQ. No pricing/OTA-comparison line here 
* (that lives on the Pricing page). The $95-195k-on-$1M OTA-savings FAQ is kept — 
* it&#x27;s arithmetic, not a performance claim. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* resources: remove the &#x27;State of Direct Distribution&#x27; report + all inbound refs 
* Per decision to drop the unverified 12-month/9-hotel Wink panel: delete the 
* report page (built around that panel) and clean every link to it — Resources 
* featured-report block, the nav Resources dropdown, the footer Resources column, 
* and the llms.txt entry. Report URL now 404s with no dangling references. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* dev: extract inline animated terminal diagram to a swappable slot 
* The /dev/ hero had an inline animated CLI/terminal mockup (the 4-step 
* connect-&gt;api_search-&gt;book-&gt;webhook flow, .wink-msg animation) that wasn&#x27;t 
* extracted in the earlier infographics pass. Move it to 
* infographics/DevTerminal.astro; page now drops &lt;DevTerminal /&gt; (pixel-identical). 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* studio: fix uneven image tiles — fill frames instead of letterboxing 
* The messaging-preview and web-component grids used object-contain in fixed 4/3 
* boxes, so mixed-ratio images floated in large white gaps at uneven heights. 
* Switch to object-cover (chat previews center-cropped; web-component cards 
* top-cropped) so every tile fills its frame uniformly — no gaps, equal heights. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* creators: fill image tiles instead of letterboxing (gallery + chat shares) 
* Both the web-component gallery (h-60) and the &#x27;lands native in every chat&#x27; tiles 
* used object-contain in fixed boxes, so mixed-ratio images pillarboxed unevenly. 
* Switch to object-cover object-top so every tile fills its frame — the hero 
* unfurl card stays visible in each chat tile; no white gaps, uniform heights. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* brand: retire TripPay + Stripe across marketing pages, infographics, llms.txt 
* Per decision to drop the TripPay brand publicly: replace &#x27;TripPay&#x27; / 
* &#x27;TripPay (Stripe-powered)&#x27; with plain &#x27;payment&#x27; or &#x27;Wink is the merchant of 
* record&#x27;, and remove the &#x27;Stripe-powered&#x27; processor mentions. Covers all 
* marketing/product pages, the MoneyFlow/DevTerminal/AgentConversation 
* infographics, and llms.txt. Zero TripPay/Stripe references remain on the 
* public brand surface. Legal pages (terms/privacy), the team bio, pricing.mdx 
* (rebuild pending) and the app/developer docs are handled separately. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* pricing: restructure for clarity — who pays, who earns, and scoped extras 
* Rebuild the page around the confirmed 3-dimension model so it&#x27;s unambiguous: 
* 1. What a booking costs — two side-by-side cards contrasting a DIRECT booking 
* (hotel pays 5.5%, keeps $94.50 on $100) vs a PARTNER-DRIVEN booking (hotel 
* ~15%, demand source earns 10% &#x3D; $9.45, hotel keeps $85.05). 
* 2. Who pays, who earns — one table across hotels + partners/creators/ 
* developers/AI agents (hotels pay on bookings; all four demand sources earn 
* up to 10%, $0 to join). 
* 3. Payment &amp; merchant of record — two models kept: Wink is MoR (5.5%) / you are 
* MoR (1.5%), no payment-brand names. 
* 4. Beyond bookings — free-forever list, then the two usage-based extras clearly 
* scoped: Social &#x3D; AI content only, API &#x3D; developers only (never hotels). 
* Removes the old route-card grid that mixed Social in with booking routes, and 
* clears all remaining TripPay/Stripe from the page. Verified light + dark. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* resources: retire TripPay + Stripe in the AEO content pages 
* Genericize the payment references in the five resources guides (&#x27;payment&#x27; / 
* &#x27;Wink is the merchant of record&#x27;), and convert the glossary &#x27;### TripPay&#x27; term 
* to a &#x27;### Payment&#x27; concept entry. Resources hub is now TripPay/Stripe-free. 
* Co-Authored-By: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* chore: ping bamboo ci to verify plan-branch trigger 
* chore: ping bamboo ci again now that plan branch is manually registered 
* fix: :bug: address ultrareview findings on marketing IA rebuild (PR #21) 
* - package.json: add missing astro-og-canvas/@astrojs/sitemap dependencies 
* (imported but never declared) and bump astro-og-canvas to ^0.13.0 to 
* resolve its Astro 7 peer-dep conflict; update the OGImageRoute call for 
* that version&#x27;s removed &#x60;param&#x60; option 
* - translate-i18n.ts: fix rootFiles (stale privacy.md/terms.md, missing 13 
* new root-level marketing pages) so i18n:all actually translates them 
* - MarketingNav/MarketingFooter: locale-prefix internal hrefs via new 
* src/lib/locale-links.ts, so translated pages keep their nav in-locale 
* instead of falling back to English 
* - RouteConvergence: compute SVG spoke count from routes.length instead of 
* a hardcoded 5, fixing misalignment on the 6-route call sites 
* - products.mdx: remove duplicate &lt;FaqJsonLd&gt;, emitting duplicate FAQPage 
* JSON-LD 
* - AgentJsonLd/ProductJsonLd: remove the conflicting Organization node both 
* emitted under the same @id as MarketingFooter&#x27;s site-wide one 
* - ProductCarousel: use the hidden attribute instead of opacity toggling so 
* off-screen slides stay out of layout and loading&#x3D;&quot;lazy&quot; actually works 
* - extract the FAQ-to-schema.org mapping duplicated across 4 components 
* into src/lib/faq-schema.ts 
* - NewBadge/LinkCards/AudienceCards: compose the shared Starwind 
* Badge/Card/Button components instead of hand-rolled markup 
* test: :white_check_mark: add Playwright suite for pages, viewports, themes, locales 
* - playwright.config.ts: 6 matrix projects (mobile/tablet/desktop x 
* light/dark) plus a single locales project, pointed at &#x60;astro dev&#x60; 
* (the production build has a pre-existing, unrelated broken relative 
* import in translated developers/webhook-events.mdx pages that fails 
* &#x60;astro build&#x60; outright — switch to preview once that&#x27;s fixed) 
* - tests/utils/discover-routes.ts: walks src/content/docs/ directly so 
* routes stay in sync automatically as pages are added/removed 
* - tests/pages.spec.ts: every English route x viewport x color scheme 
* (page loads, no console/page errors, no horizontal overflow, Starlight&#x27;s 
* data-theme follows prefers-color-scheme) 
* - tests/locales.spec.ts: every page that exists for each of the 43 
* locales today (&lt;html lang&gt; correctness, console errors) 
* - tests/locale-links.spec.ts: unit tests for withLocalePrefix plus a live 
* nav/footer locale-link check that self-activates once any locale gets a 
* translated marketing page (none do yet) 
* - src/lib/i18n-config.ts: extracted the locale list out of 
* translate-i18n.ts so it&#x27;s shared with route discovery instead of 
* duplicated 
* 8879 tests enumerate cleanly via &#x60;playwright test --list&#x60;; not run 
* end-to-end in this session — this sandbox kills any long-lived dev 
* server after ~30s regardless of how it&#x27;s launched. Run 
* &#x60;npm run test:e2e&#x60; to get real results; expect real failures on the 
* ~43 locale copies of webhook-events.mdx from the pre-existing bug noted 
* above. 
* fix: :bug: fix broken asset paths and mobile overflow found by e2e tests 
* - developers/webhook-events.mdx (43 locale copies): relative import to 
* schemas/webhooks.json was one directory level short for a locale-nested 
* file, 404ing on every non-English copy and failing &#x60;astro build&#x60; 
* outright — a pre-existing bug predating this PR 
* - astro.config.mjs: the blog author picture (may.webp) used a bare 
* /src/... path, which only resolves in dev (Vite serves /src/ directly 
* there); starlight-blog only bundles it as a real, hashed asset for a 
* path starting with &quot;.&quot; — changed to a relative import so it survives 
* a production build 
* - pricing.mdx: shrink-0 was on the wrong span in the pricing-row list 
* items, preventing long values (the Partner API row) from wrapping on 
* mobile and causing horizontal overflow 
* - products.mdx: a decorative gradient div was missing overflow-hidden on 
* its containing section (its sibling hero sections had it), bleeding 
* past the mobile viewport 
* All four found by the new Playwright suite; verified via a clean 
* &#x60;npm run build&#x60; (15,571 pages) and a full suite pass against &#x60;astro 
* preview&#x60;. 
* test: :white_check_mark: run e2e suite against a stable preview build 
* - playwright.config.ts: point webServer at &#x60;astro preview&#x60; instead of 
* &#x60;astro dev&#x60; — dev renders each route on demand and doesn&#x27;t hold up 
* under this suite&#x27;s request volume (a full locale run pegged it at 100% 
* CPU with unbounded memory growth and it stopped responding); preview 
* serves the static build and handled all 8,787 tests in under 12 minutes. 
* Runs on a dedicated port so it can&#x27;t collide with (or get silently 
* reused instead of starting fresh via reuseExistingServer) a separately- 
* running &#x60;astro dev&#x60;. 
* - add retries to absorb confirmed-transient &quot;request timed out&quot; flakes 
* under heavy parallel load (re-running any single flaky case in 
* isolation always passes, and it&#x27;s never the same page twice) 
* - discover-routes.ts: exclude draft: true pages — Starlight deliberately 
* omits these from production builds, so including them in route 
* discovery reported a real 404 as a page failure 
* Full suite now 8,787/8,787 passing against a real &#x60;npm run build&#x60; + 
* &#x60;astro preview&#x60;. 
* --------- 
* Co-authored-by: Yann &lt;yann@Yanns-MacBook-Pro.local&gt; 
* Co-authored-by: Claude Opus 4.8 &lt;noreply@anthropic.com&gt; 
* Co-authored-by: Yann &lt;yann@192.168.1.139&gt; 
* Co-authored-by: Yann &lt;yann@unicornh.com&gt; 
* Co-authored-by: Bjorn Harvold &lt;bjorn@harvold.com&gt; 

[72d3b](https://github.com/wink-travel/docs/commit/72d3b2a36726412) YannWink *2026-08-30 01:31:24*


## v0.1.13 (2026-07-31)

### Bug Fixes

-  **i18n**  stop translating import paths in mdx ([0c173](https://github.com/wink-travel/docs/commit/0c173f00a67236e) Bjorn Harvold)  

## v0.1.12 (2026-07-31)

## v0.1.11 (2026-07-28)

## v0.1.10 (2026-07-26)

## v0.1.9 (2026-07-21)

### Bug Fixes

-  **schemas**  fetch from all three apps — inventory, integrations, partner ([1693f](https://github.com/wink-travel/docs/commit/1693fe7eae5f3ba) Bjorn Harvold)  
-  **schemas**  fetch partner-app's "integrator" group for the partner audience ([641be](https://github.com/wink-travel/docs/commit/641be4923a8fdd7) Bjorn Harvold)  
-  **schemas**  source the partner OpenAPI group from partner-app, not integrations-app ([6abdc](https://github.com/wink-travel/docs/commit/6abdc80ed89cbf3) Bjorn Harvold)  

## v0.1.8 (2026-07-05)

### Bug Fixes

-  **starwind**  remove unused parentHandler field and isShort param ([7aa7a](https://github.com/wink-travel/docs/commit/7aa7a3e7c2ba299) Bjorn Harvold)  

## v0.1.7 (2026-07-02)

## v0.1.6 (2026-06-30)

## v0.1.5 (2026-06-22)

## v0.1.4 (2026-06-21)

## v0.1.3 (2026-06-16)

## v0.1.2 (2026-06-13)

### Bug Fixes

-  **i18n**  strip trailing commas from JSX attribute values after translation ([db8cb](https://github.com/wink-travel/docs/commit/db8cbc5ce0735f0) Bjorn Harvold)  

### Other changes

**0.1.2**


[629a1](https://github.com/wink-travel/docs/commit/629a1959052f19e) Bjorn Harvold *2026-06-13 19:49:24*


## v0.1.1 (2026-06-13)

### Other changes

**0.1.1**


[7a29e](https://github.com/wink-travel/docs/commit/7a29e3f17ef1e7f) Bjorn Harvold *2026-06-13 19:38:51*


## v0.1.0 (2026-05-25)

### Features

-  replace Astro action with Firebase Cloud Function for contact form ([b77d9](https://github.com/wink-travel/docs/commit/b77d9de1b15cfa0) Bjorn Harvold)  
-  **docs**  add Integrations section with 14 platform pages (#17) ([862aa](https://github.com/wink-travel/docs/commit/862aa85a5e309a8) Bjorn Harvold)  

### Bug Fixes

-  :wrench: fixed script ([6789f](https://github.com/wink-travel/docs/commit/6789f84944072dd) Bjorn Harvold)  
-  repair translation script — add missing dirs, filter .DS_Store ([da70d](https://github.com/wink-travel/docs/commit/da70d836ebd0a95) Bjorn Harvold)  
-  use local blog cover images to avoid Cloudinary rate limits during build ([71063](https://github.com/wink-travel/docs/commit/710635655e1d528) Bjorn Harvold)  
-  restore execute permission on release script ([031c2](https://github.com/wink-travel/docs/commit/031c23f9625a049) Bjorn Harvold)  
-  point footer contact link to /contact page instead of mailto ([5eff4](https://github.com/wink-travel/docs/commit/5eff42edd0d4522) Bjorn Harvold)  
-  quote YAML frontmatter values containing colons in translated docs (#13) ([8c376](https://github.com/wink-travel/docs/commit/8c3768f34aa3e45) Bjorn Harvold)  
-  correct technical errors and typos in developer docs (#12) ([d189e](https://github.com/wink-travel/docs/commit/d189e18b66a2f17) Bjorn Harvold)  
-  :bug: fixed incorrect file name ([e9215](https://github.com/wink-travel/docs/commit/e9215e1b4b756b1) Bjorn Harvold)  
-  :wrench: building again ([b2419](https://github.com/wink-travel/docs/commit/b2419a0e5b7db26) Bjorn Harvold)  
-  :lipstick: fixed pricing tip not displaying in dark mode ([77763](https://github.com/wink-travel/docs/commit/77763acf10288ef) Bjorn Harvold)  
-  :bug: fixed invalid character made by AI ([2be46](https://github.com/wink-travel/docs/commit/2be46420bd3e481) Bjorn Harvold)  
-  :wrench: updated GH api token config ([dffba](https://github.com/wink-travel/docs/commit/dffba1fc819a83b) Bjorn Harvold)  
-  :wrench: encoded html markup created by ChatGPT ([40eb4](https://github.com/wink-travel/docs/commit/40eb446e0af1408) Bjorn Harvold)  
-  :arrow_up: upgraded starlight to 0.35 that fixes an i18n recursion bug ([38d1e](https://github.com/wink-travel/docs/commit/38d1e55bc8cff91) Bjorn Harvold)  
-  :memo: fixed some missing links ([a667a](https://github.com/wink-travel/docs/commit/a667ab7a760de5f) Bjorn Harvold)  
-  :zap: fixed broken links ([ec699](https://github.com/wink-travel/docs/commit/ec6993b86009a60) Bjorn Harvold)  
-  **AC-3**  :bug: fixed incorrect link ([b62bf](https://github.com/wink-travel/docs/commit/b62bfdeaa29267d) Bjorn Harvold)  

### Other changes

**0.1.0**


[55e4e](https://github.com/wink-travel/docs/commit/55e4e744ebabcf0) Bjorn Harvold *2026-05-25 15:04:58*

**Merge pull request #16 from wink-travel/fix/add-astro-check**

* Add astro check and fix translated frontmatter 

[edf36](https://github.com/wink-travel/docs/commit/edf36b1c9aee650) flowmode *2026-03-23 04:13:57*

**Document check  to claude.md**


[0daa2](https://github.com/wink-travel/docs/commit/0daa2e6a431e0cf) flowmode *2026-03-23 04:11:43*

**Fix YAML frontmatter in translated mcp.mdx pages**

* Same quoted-string sidebar bug as ai-skills: &quot;order: 10&quot; instead of 
* the proper nested YAML key. Fixed across all 43 locales. 
* Co-Authored-By: Claude Opus 4.6 (1M context) &lt;noreply@anthropic.com&gt; 

[acd72](https://github.com/wink-travel/docs/commit/acd7249ecc79635) flowmode *2026-03-23 04:09:25*

**Add astro check for lightweight content validation**

* Install @astrojs/check and typescript, add npm run check script, 
* and document it in the README alongside the GH_API_TOKEN requirement. 
* Co-Authored-By: Claude Opus 4.6 (1M context) &lt;noreply@anthropic.com&gt; 

[92915](https://github.com/wink-travel/docs/commit/92915311cd2c4b6) flowmode *2026-03-23 04:06:23*

**Merge pull request #15 from wink-travel/fix/ai-skills-frontmatter**

* Fix ai-skills frontmatter and document GH_API_TOKEN 

[28c58](https://github.com/wink-travel/docs/commit/28c58ce96ec38e2) flowmode *2026-03-23 03:52:52*

**Fix YAML frontmatter in translated ai-skills pages and document GH_API_TOKEN**

* The translation step quoted the sidebar order as a string (&quot;order: 11&quot;) 
* instead of a proper YAML nested key, causing Astro content schema 
* validation to fail on build. Fixed across all 43 locales. 
* Also added GH_API_TOKEN environment variable documentation to the 
* README since the build depends on it for starlight-changelogs. 
* Co-Authored-By: Claude Opus 4.6 (1M context) &lt;noreply@anthropic.com&gt; 

[769a9](https://github.com/wink-travel/docs/commit/769a932dbe9fc5d) flowmode *2026-03-23 03:39:07*

**Merge remote-tracking branch 'origin/master' into fix/ai-skills-frontmatter**


[b7409](https://github.com/wink-travel/docs/commit/b7409bce2061f5a) flowmode *2026-03-23 03:38:28*

**translations for skill documentation updates**


[88387](https://github.com/wink-travel/docs/commit/88387a67302b785) flowmode *2026-03-23 03:33:44*

**Add AI Skills developer documentation**

* New page documenting the wink-api-builder skill with install 
* instructions for Claude Code, Codex, and other agents. Adds a 
* cross-reference from the MCP page to the new skills page. 
* Co-Authored-By: Claude Opus 4.6 (1M context) &lt;noreply@anthropic.com&gt; 

[116ba](https://github.com/wink-travel/docs/commit/116ba0efc72245b) flowmode *2026-03-23 03:33:44*

**Merge pull request #14 from wink-travel/skill-docs**

* Add AI Skills developer documentation 

[097c1](https://github.com/wink-travel/docs/commit/097c10e65c20c0f) flowmode *2026-03-22 08:47:11*

**translations for skill documentation updates**


[634a5](https://github.com/wink-travel/docs/commit/634a519611acc4a) flowmode *2026-03-22 07:34:23*

**Add AI Skills developer documentation**

* New page documenting the wink-api-builder skill with install 
* instructions for Claude Code, Codex, and other agents. Adds a 
* cross-reference from the MCP page to the new skills page. 
* Co-Authored-By: Claude Opus 4.6 (1M context) &lt;noreply@anthropic.com&gt; 

[ab3df](https://github.com/wink-travel/docs/commit/ab3dfb70a85659f) flowmode *2026-03-22 07:13:35*

**Merge branch 'master' of github.com:wink-travel/docs**


[9af29](https://github.com/wink-travel/docs/commit/9af296e469dd32b) Bjorn Harvold *2026-03-11 06:01:26*

**update MCP documentation to match the new MCP version 1.1**


[c08ed](https://github.com/wink-travel/docs/commit/c08edb4cf23966f) flowmode *2026-03-09 04:46:22*

**docs(#10): :memo: added funny team pics**

* resolves #10 

[95616](https://github.com/wink-travel/docs/commit/95616c8831d06b3) Bjorn Harvold *2026-01-28 04:59:57*

**Merge pull request #9 from wink-travel/index-link-country-codes**

* Translate script index.mdx link edit changes 

[b5ed0](https://github.com/wink-travel/docs/commit/b5ed0e9b8bc6c22) Bjorn Harvold *2026-01-14 06:37:24*

**merge fixes**


[ef747](https://github.com/wink-travel/docs/commit/ef747f9cac5025a) flowmode *2026-01-14 06:31:32*

**Merge remote-tracking branch 'origin/master' into index-link-country-codes**


[8d823](https://github.com/wink-travel/docs/commit/8d823b81f816dcd) flowmode *2026-01-14 06:30:44*

**Edit the translate script to add country codes to correct links in translated index.mdx files. Add the country codes to each index.mdx file**


[448dd](https://github.com/wink-travel/docs/commit/448dd659bb12920) flowmode *2026-01-14 06:22:17*

**docs(#7): :memo: added trust section**


[3c1b7](https://github.com/wink-travel/docs/commit/3c1b7b65f199553) Bjorn Harvold *2026-01-12 05:45:26*

**docs(#7): :memo: added trusted by**


[2003c](https://github.com/wink-travel/docs/commit/2003c1f67fa1ef1) Bjorn Harvold *2026-01-12 03:54:56*

**docs(#5): :memo: added pricing table**

* localized all new pages 

[210e3](https://github.com/wink-travel/docs/commit/210e373d9380763) Bjorn Harvold *2026-01-11 15:50:12*

**docs(#5): :memo: added pricing table**


[b2239](https://github.com/wink-travel/docs/commit/b223975fbd874cc) Bjorn Harvold *2026-01-11 04:15:28*

**build(#4): :wrench: added github token to env.local instead**


[b389f](https://github.com/wink-travel/docs/commit/b389ffccd6830b1) Bjorn Harvold *2026-01-10 05:40:08*

**refactor(#4): :recycle: added changelog feature**


[3a633](https://github.com/wink-travel/docs/commit/3a63323f8cc0118) Bjorn Harvold *2026-01-10 05:39:14*

**fix(#3): :wrench: updated May's blog profile url**


[66110](https://github.com/wink-travel/docs/commit/66110017d26d9f6) Bjorn Harvold *2026-01-10 03:16:59*

**fix(#2): :wrench: fixed build**


[382c1](https://github.com/wink-travel/docs/commit/382c1e734994fa5) Bjorn Harvold *2026-01-10 02:53:51*

**docs(#2): :memo: made Academy into our homepage**


[5b76e](https://github.com/wink-travel/docs/commit/5b76e13f473661b) Bjorn Harvold *2026-01-10 02:32:27*

**refactor(#2): :wrench: added Starwind UI and TailwindCSS**


[2dbb3](https://github.com/wink-travel/docs/commit/2dbb34b6369164d) Bjorn Harvold *2026-01-08 16:05:52*

**fix translation prompt to keep the formatting intact and add country codes to links**


[795af](https://github.com/wink-travel/docs/commit/795af79f72da61c) flowmode *2025-12-17 04:39:35*

**Merge branch 'master' of github.com:wink-travel/docs**


[319a2](https://github.com/wink-travel/docs/commit/319a2314c48443f) Bjorn Harvold *2025-12-14 08:27:21*

**optimize the translation prompt**


[d2eb2](https://github.com/wink-travel/docs/commit/d2eb2007a820cf1) flowmode *2025-12-10 14:07:29*

**Merge pull request #1 from wink-travel/openai-translation**

* Change translation to be done with OpenAI gpt-4.1-mini 

[1c9b5](https://github.com/wink-travel/docs/commit/1c9b546fa73136e) Bjorn Harvold *2025-12-08 06:11:53*

**change translation model and add cli-progress types**


[912d8](https://github.com/wink-travel/docs/commit/912d82da5acc57b) flowmode *2025-12-08 05:04:56*

**initial openai translation setup**


[dd56b](https://github.com/wink-travel/docs/commit/dd56bd5bd51d297) flowmode *2025-12-07 09:55:06*

**update**


[110fd](https://github.com/wink-travel/docs/commit/110fd45bc3fe2a2) flowmode *2025-11-22 09:18:36*

**fix auto-merge**


[9e2e5](https://github.com/wink-travel/docs/commit/9e2e5c55817be46) flowmode *2025-11-22 08:34:20*

**package updates and mcp documentation**


[48429](https://github.com/wink-travel/docs/commit/4842910e0eb62b6) flowmode *2025-11-22 08:17:57*

**Add github action to merge updated docs to MCP repo**


[7d22f](https://github.com/wink-travel/docs/commit/7d22fcd8ab46c4f) flowmode *2025-11-22 08:10:43*

**Merge branch 'master' of github.com:wink-travel/docs**


[7cf00](https://github.com/wink-travel/docs/commit/7cf006608696c37) Bjorn Harvold *2025-02-27 08:50:47*

**Update comparison.md**


[530da](https://github.com/wink-travel/docs/commit/530dad39d63f8c0) Ben Taylor *2025-02-24 05:41:01*

**Update TA  terms-of-service.md**


[8697a](https://github.com/wink-travel/docs/commit/8697a085169fa5e) Bjorn Harvold *2024-10-30 06:12:33*

**Update terms-of-service.md**


[c0021](https://github.com/wink-travel/docs/commit/c0021171c5ffb11) YannWink *2024-09-17 02:05:26*

**Update payment-terms.md**


[3c955](https://github.com/wink-travel/docs/commit/3c9550f74b06d19) YannWink *2024-09-17 02:04:35*

**Update payment-terms.md**


[4aed0](https://github.com/wink-travel/docs/commit/4aed0137cc269f0) YannWink *2024-09-16 12:46:19*

**Update payment-terms.md**


[226f8](https://github.com/wink-travel/docs/commit/226f80c5e00ba48) YannWink *2024-09-16 12:39:33*

**Update payment-terms.md**


[e0fe3](https://github.com/wink-travel/docs/commit/e0fe3d1f5f91434) YannWink *2024-09-16 12:33:45*

**Merge branch 'master' of github.com:wink-travel/docs**


[35486](https://github.com/wink-travel/docs/commit/35486a152276bff) Bjorn Harvold *2024-09-12 06:26:46*

**Update how-to-use.mdx test**


[2148f](https://github.com/wink-travel/docs/commit/2148f1b87875106) May *2024-09-12 04:20:01*

**Update discover-great-deals.md test**


[24ea7](https://github.com/wink-travel/docs/commit/24ea76623181f7d) May *2024-09-12 04:17:59*


## v0.0.2 (2024-08-21)

### Other changes

**0.0.2**


[cede1](https://github.com/wink-travel/docs/commit/cede163e72144fb) Bjorn Harvold *2024-08-21 04:07:49*


## v0.0.1 (2024-08-21)

### Other changes

**0.0.1**


[bf2f5](https://github.com/wink-travel/docs/commit/bf2f55d62afa018) Bjorn Harvold *2024-08-21 04:06:58*

**Initial commit**


[a1272](https://github.com/wink-travel/docs/commit/a1272ccbb2d5136) Bjorn Harvold *2024-08-18 08:16:12*


