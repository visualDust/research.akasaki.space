// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import remarkGithubAdmonitionsToDirectives from "remark-github-admonitions-to-directives";

const lightCodeTheme = require("prism-react-renderer").themes.nightOwlLight;
const darkCodeTheme = require("prism-react-renderer").themes.nightOwl;
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VisualDust::Blog("Think and Do")',
  url: "https://www.gong.host",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  organizationName: "NCSU",
  projectName: "blog.gong.host", // Usually your repo name.

  markdown: {
    format: "detect",
  }, // let md compile as md

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
        docs: {
          path: "docs",
          beforeDefaultRemarkPlugins: [remarkGithubAdmonitionsToDirectives],
          remarkPlugins: [math],
          rehypePlugins: [[katex, { strict: false }]],
          routeBasePath: "docs",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.dev/visualDust/gavin.gong.host/blob/master/",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          blogTitle: "Blogs",
          blogDescription: "Gavin's blog posts",
          remarkPlugins: [math],
          rehypePlugins: [[katex, { strict: false }]],
        },
        gtag: {
          trackingID: "G-8L21D1SXCL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "https://fastly.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
      },
    ],
    require.resolve("docusaurus-plugin-image-zoom"),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: "keywords", content: "visualdust, blog" },
        { name: "og:site_name", content: "VisualDust's blogs" },
        { name: "author", content: "Gavin Gong" },
        {
          name: "description",
          content: "Where I share some writings and insights",
        },
        { name: "og:image", content: "https://gong.host/img/site_img.jpg" },
        {
          name: "og:description",
          content: "Where I share some writings and insights",
        },
      ],
      navbar: {
        title: "Gavin Gong",
        logo: {
          alt: "Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/blog",
            label: "Blogs",
            position: "left",
          },
          {
            to: "/blog/archive",
            label: "Archive",
            position: "left",
          },
          {
            to: "docs/",
            label: "Docs",
            position: "left",
          },
          {
            href: "https://neetbox.550w.host",
            label: "NEETBox",
            position: "right",
          },
          {
            href: "/about",
            label: "About",
            position: "right",
          },
          {
            href: "/links",
            label: "Links",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Pages",
            items: [
              {
                label: "Blogs",
                to: "/blog",
              },
              {
                label: "Docs",
                to: "/docs",
              },
              {
                label: "About",
                to: "/about",
              },
              {
                label: "Links",
                to: "/links",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "NEET CV",
                href: "https://github.com/neet-cv",
              },
              {
                label: "ml.akasaki.space",
                to: "https://ml.akasaki.space",
              },
              {
                label: "Sanyuan Kexie",
                href: "https://hello.kexie.space",
              },
            ],
          },
          {
            title: "Whatever",
            items: [
              {
                label: "Github",
                href: "https://github.com/VisualDust",
              },
              {
                label: "Powered by docusaurus",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `@VisualDust ${new Date().getFullYear()} all rights reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultMode: "dark",
      },
      zoom: {
        selector: ".markdown :not(em) > img",
        config: {
          background: {
            light: "rgb(255, 255, 255)",
            dark: "rgb(50, 50, 50)",
          },
        },
      },
    }),
};

module.exports = config;
