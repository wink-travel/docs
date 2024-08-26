import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';
import { defineConfig } from 'astro/config';
// import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://academy.wink.travel',
  integrations: [
    // sentry({
    //   dsn: "https://4a8bd03adcb23a216910ee50a0d94407@o237992.ingest.us.sentry.io/1406681",
    //   sourceMapsUploadOptions: {
    //     project: "administration",
    //     authToken: process.env.SENTRY_AUTH_TOKEN,
    //   },
    // }),
    starlight({
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://res.cloudinary.com/traveliko/image/upload/v1653294291/wink/wink-social-card.png',
          },
        }
      ],
      favicon: 'favicon.ico',
      logo: {
        src: './src/assets/logo.png',
        alt: 'Wink Logo'
      },
      title: 'Academy',
      description: 'Everything you need to learn the ins and outs of the Wink Travel Platform and become a master at creating and selling travel inventory.',
      lastUpdated: true,
      titleDelimiter: '|',
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
        label: 'User Features',
        autogenerate: {
          directory: 'user'
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
        label: 'Property Portal',
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
        label: 'Webinars',
        autogenerate: {
          directory: 'webinars'
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