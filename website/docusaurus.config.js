const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Ohana',
  tagline: 'No developers left behind',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'oslabs', // Usually your GitHub org/user name.
  projectName: 'ohana', // Usually your repo name.
  themeConfig: {
    defaultDarkMode: true,
    navbar: {
      title: 'Ohana',
      logo: {
        alt: 'Ohana Logo',
        src: 'img/docusaurus.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/meet-the-team', label: 'Meet The Team', position: 'right'},
        {
          href: 'https://github.com/oslabs-beta/ohana',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/oslabs-beta/ohana',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Making sure no developer gets left behind. Built with Docusaurus.`,
    },
    // prism: {
    //   theme: darkCodeTheme,
    //   lightTheme: lightCodeTheme,
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/oslabs-beta/ohana',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/oslabs-beta/ohana',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
