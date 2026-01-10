import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'astro/config';
import starlightBlog from 'starlight-blog';
import starlightChangelogs, { makeChangelogsSidebarLinks } from 'starlight-changelogs';

import icon from 'astro-icon';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  site: 'https://wink.travel',
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
      starlightDocSearch({
        appId: 'PHYEPKXSV0',
        apiKey: '4035733f1e7c70ad7858be57ee1d0c6a',
        indexName: 'wink'
      }),
      starlightBlog({
        title: "Wink updates",
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
      ThemeSelect: './src/components/custom-theme-select.astro', // to remove the default Astro Blog icon in menu
      SocialIcons: './src/components/custom-social-icons.astro', // to remove the default RSS icon
      Footer: './src/components/custom-footer.astro',
      PageTitle: './src/components/custom-page-title.astro',  // Removes Page title from splash screens
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
      label: 'Managed Social',
      autogenerate: {
        directory: 'managed-social'
      }
    }, {
      label: 'Agency',
      autogenerate: {
        directory: 'agency'
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
    {
      label: 'Overview',
      items: [
        'changelog/overview',
        {
          label: 'Application',
          items: [...makeChangelogsSidebarLinks([
            {
              type: 'recent',
              base: 'changelog/application',
              count: 5
            },
          ])],
        },
        // {
        //   label: 'Platform',
        //   items: [...makeChangelogsSidebarLinks([
        //     {
        //       type: 'recent',
        //       base: 'changelog/platform',
        //       count: 5
        //     },
        //   ])],
        // },
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
