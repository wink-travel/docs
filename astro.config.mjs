import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://academy.wink.travel',
  integrations: [
    starlight({
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
            src: 'https://www.googletagmanager.com/gtag/js?id=G-3PPY571GZT',
            async: true,
          },
        },
        {
          tag: 'script',
          content: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3PPY571GZT');`
        },
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
          apiKey: '4035733f1e7c70ad7858be57ee1d0c6a',
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
          directory: 'link-manager'
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
          directory: 'developers'
        }
      },
      ]
    })
  ]
});