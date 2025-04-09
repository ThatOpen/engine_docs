import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'That Open docs',
  tagline: 'Let\'s make the AECOM industry great again.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.thatopen.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'That Open Company', // Usually your GitHub org/user name.
  projectName: 'That Open Engine', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  // staticDirectories: ["static"],
  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        tsconfig: "./src/docs-generator/tsconfig.json",
        entryPoints: "./temp/*",
        entryPointStrategy: "packages",
        plugin: ["./typedoc-plugin.mjs"],
        readme: "none",
        indexFormat: "table",
        disableSources: true,
        sidebar: { pretty: true },
        textContentMappings: {
          "title.indexPage": "📋 API",
          "title.memberPage": "{name}",
        },
        parametersFormat: "table",
        enumMembersFormat: "table",
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    // Replace with your project's social card
    image: 'img/logo.svg',
    navbar: {
      title: '',
      logo: {
        alt: 'That Open Logo',
        src: 'img/logo-purple.svg',
        srcDark: 'img/logo-green.svg',
      },
      items: [
        {
          href: 'https://thatopen.com/accelerator',
          label: '🤝 Want our help?',
          position: 'right',
        },
        {
          href: 'https://thatopen.com/',
          label: 'Project',
          position: 'right',
        },
        {
          href: 'https://people.thatopen.com/',
          label: 'Community',
          position: 'right',
        },
        {
          href: 'https://www.npmjs.com/org/thatopen',
          label: 'NPM',
          position: 'right',
        },
        {
          href: 'https://github.com/ThatOpen/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} That Open Company. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'Z3IS6MTI1S',

      // Public API key: it is safe to commit it
      apiKey: '1eb8789755fe9ba209398df87df6f52e',

      indexName: 'thatopen',

      // Optional: see doc section below
      contextualSearch: false,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
