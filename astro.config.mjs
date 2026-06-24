import starlight from '@astrojs/starlight';
// import starlightDocSearch from '@astrojs/starlight-docsearch';
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'astro/config';
import starlightBlog from 'starlight-blog';
import starlightChangelogs, { makeChangelogsSidebarLinks } from 'starlight-changelogs';
import starlightOpenAPI, { createOpenAPISidebarGroup } from 'starlight-openapi'
import { buildRedirects } from './scripts/build-redirects.mjs';

// Single "API" sidebar parent. Each audience below is one OpenAPI schema, so the
// rendered tree is Audience › Resource(tag) › Operation — three levels, no per-group
// or audience-wrapper nesting. Snapshots live in ./schemas/<audience>.json and are
// refreshed by `npm run schemas:sync` from the per-audience /v3/api-docs/<audience>
// endpoints (platform/supplier/consumer/affiliate/account on the Inventory app,
// partner on the Integrations app).
const apiSidebarGroup = createOpenAPISidebarGroup()

// audience id -> [sidebar label, base path prefix]. 'partner' is served by the
// Integrations app; the rest by the Inventory app.
const AUDIENCES = [
  ['reference', 'Reference', 'api'],
  ['extranet', 'Extranet', 'api'],
  ['booking-engine', 'Booking Engine', 'api'],
  ['studio', 'Studio', 'api'],
  ['social', 'Social', 'api'],
  ['link-manager', 'Link Manager', 'api'],
  ['settings', 'Settings', 'api'],
  ['payment', 'Payment', 'api'],
  ['user', 'User', 'api'],
  ['travel-agent', 'Travel Agent', 'api'],
  ['partner', 'Partner', 'integrations-api'],
]

const openApiSnippets = {
  operation: {
    clients: { javascript: ['fetch'], shell: ['curl'] },
    default: { target: 'shell', client: 'curl' },
  },
}

// Build a starlight-openapi schema entry for one audience.
const toApiSchema = ([audience, label, apiBase]) => ({
  base: `${apiBase}/${audience}`,
  schema: `./schemas/${audience}.json`,
  sidebar: {
    label,
    collapsed: true,
    group: apiSidebarGroup,
    // Sort the resource sections within each audience alphabetically (the schema
    // "Overview" link is rendered before the tags, so it stays first).
    tags: { sort: 'alphabetical' },
    operations: { badges: true, labels: 'summary', sort: 'alphabetical' },
  },
  snippets: openApiSnippets,
})

import icon from 'astro-icon';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  site: 'https://wink.travel',
  redirects: buildRedirects(),
  image: {
    domains: ['res.cloudinary.com']
  },
  integrations: [starlight({
    head: [
      {
        tag: 'meta',
        attrs: {
          property: 'og:image',
          content: 'https://res.cloudinary.com/traveliko/image/upload/v1653294291/wink/wink-social-card.png',
        },
      },
      {
        tag: 'script',
        attrs: {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-688LY2TNNR',
          async: true,
        },
      },
      {
        tag: 'script',
        content: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-688LY2TNNR');`
      },
    ],
    favicon: 'favicon.ico',
    logo: {
      src: './src/assets/logo.png',
      replacesTitle: true
    },
    title: 'Wink',
    description: 'A travel booking platform for those in the know.',
    customCss: [
      // Path to your Tailwind global CSS — must be first!
      './src/styles/starwind.css',
      './src/styles/tweaks.css',
    ],
    defaultLocale: 'root',
    lastUpdated: false,
    titleDelimiter: '|',
    // editLink: {
    //   baseUrl: 'https://github.com/wink-travel/docs/edit/master/',
    // },
    plugins: [
      // Generate the OpenAPI reference pages from local snapshots in ./schemas/.
      // Refresh snapshots with `npm run schemas:sync`.
      // Sort audience sections alphabetically by label (Account, Affiliate, Consumer,
      // Partner, Platform, Supplier). The "Overview" link is a separate sidebar item, so
      // it stays first.
      starlightOpenAPI([...AUDIENCES].sort((a, b) => a[1].localeCompare(b[1])).map(toApiSchema)),
      starlightBlog({
        title: "Wink updates",
        navigation: 'none',
        authors: {
          may: {
            name: 'May Rawddon',
            title: 'Marketing & Media',
            url: 'https://i.trvl.as/starringmay',
            picture: '/src/assets/may.webp'
          }
        }
      }),
      starlightChangelogs(),
    ],
    components: {
      SocialIcons: './src/components/custom-social-icons.astro', // to remove the default RSS icon
      Footer: './src/components/custom-footer.astro',
      PageTitle: './src/components/custom-page-title.astro',  // Removes Page title from splash screens
    },
    sidebar: [
      { label: 'Getting Started', items: [{ autogenerate: { directory: 'getting-started' } }] },
      {
        label: 'Portal',
        items: [
          'portal/analytics',
          'portal/claims',
          'portal/create-account',
          'portal/overview',
          'portal/invite',
          'portal/leaderboard',
          'portal/plan',
          { label: 'Corporate', collapsed: true, items: [{ autogenerate: { directory: 'portal/corporate' } }] },
          { label: 'Extranet', collapsed: true, items: [{ autogenerate: { directory: 'portal/extranet' } }] },
          { label: 'Link Manager', collapsed: true, items: [{ autogenerate: { directory: 'portal/link-manager' } }] },
          { label: 'Payment', collapsed: true, items: [{ autogenerate: { directory: 'portal/payment' } }] },
          { label: 'Settings', collapsed: true, items: [{ autogenerate: { directory: 'portal/settings' } }] },
          { label: 'Social', collapsed: true, items: [{ autogenerate: { directory: 'portal/social' } }] },
          { label: 'Studio', collapsed: true, items: [{ autogenerate: { directory: 'portal/studio' } }] },
          { label: 'Travel Agent', collapsed: true, items: [{ autogenerate: { directory: 'portal/travel-agent' } }] },
        ],
      },
      {
        label: 'User Settings',
        items: [
          'account/overview',
          { label: 'Profile', collapsed: true, items: [{ autogenerate: { directory: 'account/profile' } }] },
          'account/register',
        ],
      },
      { label: 'Booking Engine', items: [{ autogenerate: { directory: 'booking-engine' } }] },
      {
        label: 'Guides',
        items: [
          { label: 'For Affiliates', collapsed: true, items: [{ autogenerate: { directory: 'guides/affiliates' } }] },
          { label: 'For Developers', collapsed: true, items: [{ autogenerate: { directory: 'guides/developers' } }] },
          { label: 'For Hoteliers', collapsed: true, items: [{ autogenerate: { directory: 'guides/hoteliers' } }] },
          { label: 'For Integrators', collapsed: true, items: [{ autogenerate: { directory: 'guides/integrators' } }] },
          { label: 'General', collapsed: true, items: [{ autogenerate: { directory: 'guides/general' } }] },
        ],
      },
      { label: 'Webinars', items: [{ autogenerate: { directory: 'webinars' } }] },
      { label: 'Integrations', collapsed: true, items: [{ autogenerate: { directory: 'integrations' } }] },
      { label: 'Developers', items: [{ autogenerate: { directory: 'developers' } }] },
      {
        label: 'API', collapsed: true, items: [
          { label: 'Overview', link: '/api/overview' },
          apiSidebarGroup,
        ],
      },
    {
      label: 'Releases',
      items: [
        { label: 'Overview', link: '/changelog/overview/' },
        {
          label: 'Application',
          collapsed: true,
          items: [...makeChangelogsSidebarLinks([
            {
              type: 'recent',
              base: 'changelog/application',
              count: 5
            },
          ])],
        },
        {
          label: 'Platform',
          collapsed: true,
          items: [...makeChangelogsSidebarLinks([
            {
              type: 'recent',
              base: 'changelog/platform',
              count: 5
            },
          ])],
        },
      ]
    },
    ],
    locales: {
      root: {
        label: 'English',
        lang: 'en', // lang is required for root locales
      },
      'id': { label: 'Bahasa Indonesia', lang: 'id' },
      'ms': { label: 'Bahasa Malaysia', lang: 'ms' },
      'bg': { label: 'Български', lang: 'bg' },
      'ca': { label: 'Català', lang: 'ca' },
      'cs': { label: 'Čeština', lang: 'cs' },
      'da': { label: 'Dansk', lang: 'da' },
      'de': { label: 'Deutsch', lang: 'de' },
      'et': { label: 'Eesti', lang: 'et' },
      'es': { label: 'Español', lang: 'es' },
      'es-AR': { label: 'Español (AR)', lang: 'es-AR' },
      'es-MX': { label: 'Español (MX)', lang: 'es-MX' },
      'tl': { label: 'Filipino', lang: 'tl' },
      'fi': { label: 'Suomi', lang: 'fi' },
      'fr': { label: 'Français', lang: 'fr' },
      'el': { label: 'Ελληνικά', lang: 'el' },
      'he': { label: 'עברית', lang: 'he' },
      'hi': { label: 'हिन्दी', lang: 'hi' },
      'hr': { label: 'Hrvatski', lang: 'hr' },
      'hu': { label: 'Magyar', lang: 'hu' },
      'is': { label: 'Íslenska', lang: 'is' },
      'it': { label: 'Italiano', lang: 'it' },
      'ja': { label: '日本語', lang: 'ja' },
      'ko': { label: '한국어', lang: 'ko' },
      'lv': { label: 'Latviski', lang: 'lv' },
      'lt': { label: 'Lietuvių', lang: 'lt' },
      'nl': { label: 'Nederlands', lang: 'nl' },
      'no': { label: 'Norsk', lang: 'no' },
      'pl': { label: 'Polski', lang: 'pl' },
      'pt-BR': { label: 'Português (BR)', lang: 'pt-BR' },
      'pt-PT': { label: 'Português (PT)', lang: 'pt-PT' },
      'ro': { label: 'Română', lang: 'ro' },
      'ru': { label: 'Русский', lang: 'ru' },
      'sk': { label: 'Slovenčina', lang: 'sk' },
      'sl': { label: 'Slovenščina', lang: 'sl' },
      'sr': { label: 'Srpski', lang: 'sr' },
      'sv': { label: 'Svenska', lang: 'sv' },
      'th': { label: 'ภาษาไทย', lang: 'th' },
      'tr': { label: 'Türkçe', lang: 'tr' },
      'uk': { label: 'Українська', lang: 'uk' },
      'vi': { label: 'Tiếng Việt', lang: 'vi' },
      'ar': { label: 'العربية', lang: 'ar' },
      'zh-CN': { label: '简体中文', lang: 'zh-CN' },
      'zh-TW': { label: '繁體中文', lang: 'zh-TW' },
    },
  }), icon(), markdoc()],
  vite: {
    plugins: [tailwindcss()]
  }
});
