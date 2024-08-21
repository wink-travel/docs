import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';
import { defineConfig } from 'astro/config';
// import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.wink.travel',
  integrations: [
    // sentry({
    //   dsn: "https://4a8bd03adcb23a216910ee50a0d94407@o237992.ingest.us.sentry.io/1406681",
    //   sourceMapsUploadOptions: {
    //     project: "administration",
    //     authToken: process.env.SENTRY_AUTH_TOKEN,
    //   },
    // }),
    starlight({
      favicon: 'favicon.ico',
      logo: {
        src: './src/assets/logo.png',
        alt: 'Wink Logo'
      },
      title: 'Academy',
      editLink: {
        baseUrl: 'https://github.com/wink-travel/docs/edit/master/'
      },
      plugins: [
        starlightDocSearch({
          appId: 'PHYEPKXSV0',
          apiKey: '5b2c99f3b00c17e8dbd525b85117eac4',
          indexName: 'wink'
        }),
      ],
      social: {
        github: 'https://github.com/wink-travel',
        "x.com": 'https://x.com/wink2travel',
        discord: 'https://discord.gg/t3YETu8k5n',
        facebook: 'https://facebook.com/wink2travel',
        linkedin: 'https://linkedin.com/company/wink2travel',
        instagram: 'https://instagram.com/wink2travel',
        youtube: 'https://www.youtube.com/@wink2travel',
        email: 'mailto:hi@wink.travel'
      },
      sidebar: [{
        label: 'Getting Started',
        autogenerate: {
          directory: 'getting-started'
        }
      }, {
        label: 'User Settings',
        autogenerate: {
          directory: 'user-settings'
        }
      }, {
        label: 'Affiliate Portal',
        autogenerate: {
          directory: 'studio'
        }
      }, {
        label: 'Booking Engine',
        autogenerate: {
          directory: 'booking-engine'
        }
      }, {
        label: 'Corporate Portal',
        autogenerate: {
          directory: 'corporate'
        }
      }, {
        label: 'Hotel Portal',
        autogenerate: {
          directory: 'extranet'
        }
      }, {
        label: 'Link Manager',
        autogenerate: {
          directory: 'winklinks'
        }
      }, {
        label: 'Travel Agent Portal',
        autogenerate: {
          directory: 'travel-agent'
        }
      }, {
        label: 'Payment Portal',
        autogenerate: {
          directory: 'payment'
        }
      }, {
        label: 'Guides',
        autogenerate: {
          directory: 'guides'
        }
      }, {
        label: 'Developers',
        autogenerate: {
          directory: 'developer'
        }
      },
      ]
    })
  ]
});