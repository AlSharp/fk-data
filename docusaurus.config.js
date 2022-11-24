// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Free Kalmykia',
  tagline: 'In Numbers',
  url: 'https://docs.freekalmykia.org',
  baseUrl: '/',
  staticDirectories: ['public', 'static'],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Kalmykia.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AlSharp', // Usually your GitHub org/user name.
  projectName: 'fk-data', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'hal', 'ukr'],
    localeConfigs: {
      hal: {
        label: 'Halmg Keln'
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { property: 'og:site_name', content: 'Free Kalmykia Docs' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:type', content: 'article' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@freekalmykia' },
        { name: 'twitter:domain', content: 'freekalmykia.org' },
      ],
      image: 'https://docs.freekalmykia.org/img/flags/Kalmyk_default_flag.png',
      navbar: {
        title: 'Free Kalmykia',
        logo: {
          alt: 'My Site Logo',
          src: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Kalmykia.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Introdunction',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/groups/freekalmykia',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/yXGswf4Tyg',
              },
              {
                label: 'Free Nations League',
                href: 'https://www.facebook.com/FreeNationsLeague'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FreeKalmykia`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
