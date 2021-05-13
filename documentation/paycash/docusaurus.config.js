/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'PayCash',
  tagline: 'PayCash For Seamless Bitcoin Cash Accept On Your Website',
  url: 'https://paycash-host.github.io',
  baseUrl: '/paycash/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'paycash-host', // Usually your GitHub org/user name.
  projectName: 'paycash', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/header-logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/paycash-host/paycash',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Info',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/paycash-host/paycash',
            },
              {
              label: 'Flipstarter campaign',
              href: 'https://flipstarter.paycash.host/',
            },
              {
             label: 'Twitter',
               href: 'https://twitter.com/paycash',
             },
          ],
        },
      ],
      copyright: `PayCash An Opensource Project.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/paycash-host/paycash',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
