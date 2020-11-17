'use strict';

module.exports = {
  defaultBrowser: "Safari",
  handlers: [
    {
      match: finicky.matchDomains([
        "127.0.0.1",
        "localhost",
        "tui.com",
        "jsoneditoronline.org",
        "bluejeans.com",
        "zpl.io",
        "www.loomio.org",
        "docs.google.com",
        /.*\.dunelm\.io$/,
        /.*\.dunelm\.com$/,
        /^wasp/,
        /.*\.lucidchart\.com$/,
        /.*\.atlassian\.com$/,
        /.*\.slack\.com$/,
        "dunelm.service-now.com",
        /.*\.absence\.io$/,
        "bitbucket.org",
        /.*\.zoom\.us$/,
        /.*\.teamretro\.com$/,
        /(.*\.)?auth0\.com$/,
        /(.*\.)?sentry.io$/,
        /^dunelmmill.*/,
        "funretro.io",
        "metroretro.io",
        "gitlab.com",
        /.*\.mimecast\.com$/
      ]),
      browser: "Firefox"
    },
    {
      match: /(dunelmmcdev|mercer|tuigroup|tui-mobilityhub|tuimobilityhub|mindera|dynatrace|contentful|newrelic|aws\.amazon|beanstalk|zeplin)/,
      browser: "Firefox"
    }
  ]
};
