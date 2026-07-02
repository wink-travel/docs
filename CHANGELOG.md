# docs changelog

Changelog of docs.

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


