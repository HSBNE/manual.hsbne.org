// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HSBNE Handbook',
  tagline: 'The OS for the Hackerspace',
  url: 'https://manual.hsbne.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'HSBNE', // Usually your GitHub org/user name.
  projectName: 'manual.hsbne.org', // Usually your repo name.
  deploymentBranch: 'ghpages',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/hsbne/handbook/tree/main/',
          remarkPlugins: [ require('mdx-mermaid') ],
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
      navbar: {
        title: 'HSBNE Handbook',
        logo: {
          alt: 'HSBNE Logo',
          src: 'img/Logo-favicon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'thebeginning',
            position: 'left',
            label: 'The Beginning',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'The Beginning',
                to: '/docs/thebeginning',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://chat.hsbne.org',
              },
              {
                label: 'Forum',
                href: 'https://forum.hsbne.org',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.hsbne.org',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.hsbne.org',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.hsbne.org',
              },

            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/hsbne',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HSBNE, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
