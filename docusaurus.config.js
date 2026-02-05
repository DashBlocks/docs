/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Dash Documentation',
  url: 'https://dashblocks.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'DashBlocks',
  projectName: 'docs',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'Dash Documentation',
      items: [
        {
          type: 'doc',
          docId: 'packager/index',
          label: 'Packager',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'development/index',
          label: 'Development',
          position: 'left',
        },
        {
          href: 'https://dashblocks.github.io/',
          label: 'Dash',
          position: 'right',
        },
        {
          href: 'https://github.com/DashBlocks',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      // This is all supposed to be public
      appId: '63CQ0IJW9T',
      apiKey: '0e0a2613717b73dfbcfed6c8a549384b',
      indexName: 'dash',
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require('./code-themes/light'),
      darkTheme: require('./code-themes/dark'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/DashBlocks/docs/edit/master/',
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
