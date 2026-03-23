<div align="center">
  <p>
    <a href="https://wink.travel" target="_blank">
      <picture>
        <img alt="Wink logo" src="https://res.cloudinary.com/traveliko/image/upload/c_scale,h_60/v1698634317/wink/wink-logo-email-header.png" width="296" height="60" style="max-width: 100%;">
      </picture>
    </a>
  </p>
  <p>Beautifully crafted documentation built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build) </p>
</div>

## Getting Started

Install:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Validate content schemas and types (lighter than a full build):

```bash
npm run check
```

Build production artifacts:

```bash
npm run build
```

## Environment Variables

| Variable | Required | Description |
| -------- | -------- | ----------- |
| `GH_API_TOKEN` | Yes (for build) | GitHub personal access token used by `starlight-changelogs` to fetch release data from `wink-travel` repos. The build will fail without it. |

Create a `.env` file in the project root or export the variable before running `npm run build`:

```bash
export GH_API_TOKEN=ghp_...
npm run build
```
