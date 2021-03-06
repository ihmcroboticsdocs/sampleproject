/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

const siteConfig = {
  title: 'Test Site' /* title for your website */,
  tagline: 'A website for testing',
  url: 'https://ihmcroboticsdocs.github.io' /* your website url */,
  baseUrl: '/sampleproject/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'sampleproject',
  organizationName: 'ihmcroboticsdocs',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {
      href: 'https://ihmcroboticsdocs.github.io/docs/quickstarthome.html',
      label: 'Quick Start',
    },
     {
      href: 'https://ihmcroboticsdocs.github.io/docs/docshome.html',
      label: 'Docs',
    },
    {
      href: 'http://robots.ihmc.us/',
      label: 'About',
    },
    {
      href: 'https://ihmcroboticsdocs.github.io/blog/',
      label: 'Blog',
    }
  ],


   /* path to images for header/footer */
  headerIcon: 'img/running-man-logo.png',
  footerIcon: 'img/running-man-logo.png',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#064282',
    secondaryColor: '#4283c9',
  },

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Your Name or Your Company Name',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js', '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

};

module.exports = siteConfig;
