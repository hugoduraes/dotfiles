'use strict';

module.exports = {
  defaultBrowser: "Safari",
  handlers: [
    {
      match: finicky.matchDomains([
        /device\.sso\.(.*\.)?amazonaws\.com$/
      ]),
      browser: "com.google.Chrome"
    },
    {
      match: finicky.matchDomains([
        "127.0.0.1",
        "localhost",
        "jsoneditoronline.org",
        "metabase.fidel.uk",
        /(.*\.)?google\.com$/,
        /(.*\.)?atlassian\.(net|com)$/,
        /(.*\.)?slack\.com$/,
        /(.*\.)?bitbucket\.org$/,
        /(.*\.)?zoom\.us$/,
        /(.*\.)?amazon\.com$/,
        /(.*\.)?notion\.so$/,
        /(.*\.)?figma\.com$/,
        /(.*\.)?jamboard\.google\.com$/,
        /(.*\.)?conceptboard\.com$/,
        /(.*\.)?qulture\.rocks$/,
        /(.*\.)?humaans\.io$/,
        /(.*\.)?xero\.com$/,
        /(.*\.)?teamtailor\.com$/,
        /(.*\.)?greenhouse\.io$/,
        /(.*\.)?amazonaws\.com$/
      ]),
      browser: "com.brave.Browser"
    },
    {
      match: /fidellimited|fidelapi/i,
      browser: "com.brave.Browser",
    }
  ]
};
