# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Wink's marketing website built with Astro and Starlight. It serves as a multilingual documentation and marketing platform for the Wink travel booking ecosystem.

**Tech Stack:**
- **Framework:** Astro 6.x with Starlight documentation framework
- **Styling:** Tailwind CSS v4 with custom component library ("Starwind")
- **Content:** MDX/Markdown with frontmatter for documentation
- **i18n:** 40+ languages with AI-powered translation pipeline
- **Integrations:** Cloudinary (images), MailerSend (contact forms), DocSearch, Firebase hosting (`firebase.json` serves `dist/`)

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server (localhost:4321)
npm run dev
# or
npm start

# Run schema and frontmatter validation
npm run check

# Build for production (runs with --max-old-space-size=8192; build is memory-heavy)
npm run build

# Preview production build
npm preview

# Refresh OpenAPI schema snapshots from prod (writes to ./schemas/)
npm run schemas:sync

# Translate all documentation to all languages
npm run i18n:all
# Translate specific language only
ONLY_LANG=fr npm run i18n:all
# Translate specific directory only
ONLY_DIR=agency npm run i18n:all
```

## Architecture

### Content Structure

Documentation lives in `src/content/docs/` organized by feature area:
- `agency/` - Agency portal documentation
- `booking-engine/` - Booking engine docs
- `corporate/` - Corporate portal docs
- `developers/` - API and developer guides
- `extranet/` - Property portal docs
- `social/` - Social media automation docs
- `studio/` - Affiliate portal docs
- `travel-agent/` - Travel agent portal docs
- Plus 40+ language directories (`ar/`, `fr/`, `de/`, etc.)

The `src/content.config.ts` file (Astro v6 top-level convention, not `src/content/config.ts`) defines two collections:
- `docs` - Main documentation (uses Starlight loader; custom `generateId` strips file extensions but preserves casing, and collapses `/index` segments)
- `changelogs` - Auto-synced from GitHub repos (`wink-travel/monorepo-typescript` → `changelog/application`, `wink-travel/monorepo-java` → `changelog/platform`). Loader needs `GH_API_TOKEN`; build fails without it.

### Component Architecture

**Starwind Component Library** (`src/components/starwind/`):
- Atomic UI components: Button, Card, Badge, Input, etc.
- Each component has an `index.ts` for exports
- Built with Tailwind CSS and tailwind-variants for styling

**Starwind Pro** (`src/components/starwind-pro/`):
- Marketing page sections: Hero, Feature, Pricing, Testimonial, FAQ, etc.
- Each component has a `*Demo.astro` file for documentation examples
- Used in splash pages and landing pages

**Custom Overrides** (`src/components/custom-*.astro`):
- Override default Starlight components (footer, theme select, social icons, page title)

### Translation Pipeline

The `scripts/translate-i18n.ts` script:
1. Uses OpenAI API (gpt-4.1-mini by default) to translate entire MDX files
2. Maintains translation hashes (`.file.hashes.json`) to skip unchanged files
3. Preserves MDX/JSX structure, code blocks, component syntax
4. Automatically rewrites internal links to add locale prefixes (e.g., `/path` → `/fr/path`)
5. Never translates product names (Wink, WinkLinks, Wink Studio, etc.)

**Environment variables required:**
- `OPENAI_API_KEY` - For translation service
- `OPENAI_TRANSLATION_MODEL` - Optional, defaults to gpt-4.1-mini-2025-04-14

### Actions (Server Endpoints)

`src/actions/email.ts` - Contact form handler:
- Uses MailerSend API for email delivery
- Zod validation for form inputs
- Honeypot spam protection
- Requires `MAILERSEND_API_KEY` environment variable

### Path Aliases

TypeScript path aliases defined in `tsconfig.json`:
- `@/*` → `src/*`
- `@/components/*` → `src/components/*`

## Configuration Files

- `astro.config.mjs` - Astro + Starlight configuration with plugins, sidebar, locales
- `tsconfig.json` - TypeScript configuration with strict mode
- `package.json` - Dependencies and scripts
- `src/content/config.ts` - Content collections schema

## Starlight Configuration

The site uses these Starlight plugins (see `astro.config.mjs`):
- `starlightBlog` - Blog functionality
- `starlightChangelogs` - GitHub-synced changelogs
- `starlightOpenAPI` - Renders API reference pages from OpenAPI snapshots in the top-level `schemas/` directory. Two schemas wired up: `schemas/api.json` (route `/api/`, sidebar label "Platform") and `schemas/integrations.json` (route `/integrations-api/`, sidebar label "Channel Manager"). Both schemas nest under a single "API" sidebar group via `createOpenAPISidebarGroup()` — see the `apiSidebarGroup` constant in `astro.config.mjs`. Refresh snapshots via `npm run schemas:sync` (see `scripts/sync-schemas.ts`); the script preserves last-good snapshots when upstream returns non-2xx. `schemas/api.json` may currently be a stub if `https://api.wink.travel/v3/api-docs` was unreachable at last sync — see `schemas/README.md`.
- `starlightDocSearch` is installed but currently commented out in `astro.config.mjs`.

Sidebar is explicitly listed in `astro.config.mjs` (not fully auto-generated): each top-level group is `autogenerate`'d from a directory under `src/content/docs/`, and a single "API" group (containing the `apiSidebarGroup` placeholder) appears immediately after Developers. Adding a new top-level docs section requires editing the `sidebar` array.

## Important Patterns

**Splash Pages:** Use template: splash in frontmatter and import marketing components
**Translated Content:** Never edit translated files directly - always edit English source and re-run translation
**Link Rewriting:** Internal links in translated content must have locale prefixes
**Component Props:** Marketing components use camelCase props (badgeText, primaryButtonHref, etc.)

## Environment Setup

Create `.env.local` with:
```bash
GH_API_TOKEN=your_github_token   # REQUIRED for `npm run build` (changelog loader)
OPENAI_API_KEY=your_key_here     # Only needed for `npm run i18n:all`
MAILERSEND_API_KEY=your_key_here # Only needed at runtime by the contact-form action
OPENAI_TRANSLATION_MODEL=...     # Optional; defaults to gpt-4.1-mini-2025-04-14
```

Only `GH_API_TOKEN` is required to build the site (`README.md` documents this). The OpenAI and MailerSend keys are needed only when you actually exercise translation or the contact form.

## Deployment

Built artifacts go to `dist/`, which Firebase Hosting (`firebase.json`) serves. The site is configured for `https://wink.travel`. `releaseToMaster.bash` is the release helper script.
