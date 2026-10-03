/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Dash Documentation',
  url: 'https://dashblocks.org',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'DashBlocks',
  projectName: 'docs',
  trailingSlash: false,
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: 'FC7B432B964EB56C',
      },
    },
  ],
  themeConfig: {
    navbar: {
      title: 'Dash Documentation',
      items: [
        {
          href: '/packager/',
          label: 'Packager',
          position: 'left',
        },
        {
          href: '/development/',
          label: 'Development',
          position: 'left',
        },
        {
          href: 'https://dashblocks.org/',
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
      appId: 'C3D5A9N0XC',
      apiKey: 'cd65b6987bef453d2b4fede10d6e50bc',
      indexName: 'dashblocks_org',
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
