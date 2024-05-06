// @ts-check

const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "That Open Docs",
  tagline: "Where you learn to build BIM software",
  favicon: "img/favicon.ico",

  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        tsconfig: "./src/docs-generator/tsconfig.json",
      },
    ],
  ],

  url: "https://your-docusaurus-test-site.com",

  baseUrl: "/",

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: "img/thatopen-logo.svg",
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: "ThatOpenCompany",
          src: "img/thatopen-logo-green.svg",
        },
        items: [
          {
            href: "https://platform.thatopen.com/",
            label: "Platform",
            position: "right",
          },
          {
            href: "https://people.thatopen.com/",
            label: "People",
            position: "right",
          },
          {
            href: "https://github.com/ThatOpen",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Community",
            items: [
              {
                label: "People",
                href: "https://people.thatopen.com/",
              },
              {
                label: "ThatOpenCompany",
                href: "https://thatopen.com/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()}, That Open Company`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
