/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'The Algorithmic Freelancers', // Title for your website.
  tagline: 'Deciphering the mechanics of Anthem',
  url: 'http://algorithmic-freelancers.github.io', // Your website URL
  baseUrl: '/docs/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'docs',
  organizationName: 'algorithmic-freelancers',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'mechanics/overview', label: 'Guide'},
    // {doc: 'todo', label: 'Contributing'},
    // {page: 'help', label: 'Help'},
    {blog: true, label: 'Experiments'},
  ],

  blogSidebarTitle: { default: 'Recent Studies', all: 'All Studies' },

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  headerIcon: 'img/logo.svg',
  footerIcon: 'img/logo.svg',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#20232a',
    secondaryColor: '#20232a',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} The Algorithmic Freelancers`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  //Internal Site URLs
  customDocsPath: 'guide',
  docsUrl: 'guide',

  // Open Graph and Twitter card images.
  ogImage: 'img/favicon.png',
  twitterImage: 'img/favicon.png',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Twitter info
  twitter: true,
  twitterUsername: 'AlgorithmicThe',

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/algorithmic-freelancers/docs',
};

module.exports = siteConfig;
