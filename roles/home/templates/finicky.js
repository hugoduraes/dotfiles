'use strict';

module.exports = {
  defaultBrowser: "Safari",
  handlers: [
    {
      match: finicky.matchDomains([
        "tui.com",
        "jsoneditoronline.org",
        "bluejeans.com",
        "zpl.io",
        "loomio.org",
        "docs.google.com"
      ]),
      browser: "Firefox"
    },
    {
      match: /(tuigroup|tui-mobilityhub|tuimobilityhub|mindera|dynatrace|contentful|newrelic|aws\.amazon|beanstalk|zeplin)/,
      browser: "Firefox"
    }
  ]
};
