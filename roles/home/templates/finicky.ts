import type {
  FinickyConfig,
  UrlTransformer,
} from "/Applications/Finicky.app/Contents/Resources/finicky.d.ts";

const inContainer =
  (containerName: string): UrlTransformer =>
  (url: URL) =>
    `ext+container:name=${containerName}&url=${encodeURIComponent(url.toString())}`;

const workMatches = finicky.matchHostnames([
  "127.0.0.1",
  "localhost",
  /fidellimited|fidelapi|astrada/i,
  // /(.*\.)?amazon\.com$/,
  /(.*\.)?opsg\.in$/,
  /(.*\.)?amazonaws\.com$/,
  /(.*\.)?aws\.amazon\.com$/,
  /(.*\.)?atlassian\.(net|com)$/,
  /(.*\.)?astrada\.awsapps\.com$/,
  /(.*\.)?bitbucket\.org$/,
  /(.*\.)?claude\.ai$/,
  /(.*\.)?conceptboard\.com$/,
  /(.*\.)?copilot\.clari\.com$/,
  /(.*\.)?d2q5o3xr2q36wk\.cloudfront\.net$/,
  /(.*\.)?developer\.visa\.com$/,
  /(.*\.)?diagrams\.net$/,
  /(.*\.)?fidel\.uk$/,
  /(.*\.)?fidelapi\.com$/,
  /(.*\.)?fidel\.1password\.com$/,
  /(.*\.)?figma\.com$/,
  /(.*\.)?forms\.gle$/,
  /(.*\.)?github\.com$/,
  /(.*\.)?github\.io$/,
  /(.*\.)?google\.com$/,
  /(.*\.)?greenhouse\.io$/,
  /(.*\.)?humaans\.io$/,
  /(.*\.)?incident\.io$/,
  /(.*\.)?ixopay\.my\.site\.com$/,
  /(.*\.)?jamboard\.google\.com$/,
  /(.*\.)?jsoneditoronline\.org$/,
  /(.*\.)?latticehq\.com$/,
  /(.*\.)?logz.io$/,
  /(.*\.)?mastercard\.com$/,
  /(.*\.)?meet\.google\.com$/,
  /(.*\.)?metabase\.fidel\.uk$/,
  /(.*\.)?metroretro\.io$/,
  /(.*\.)?miro\.com$/,
  /(.*\.)?notion\.so$/,
  /(.*\.)?payhawk\.com$/,
  /(.*\.)?qulture\.rocks$/,
  /(.*\.)?readme\.(io|com)$/,
  /(.*\.)?slack\.com$/,
  /(.*\.)?sli\.do$/,
  /(.*\.)?spendesk\.com$/,
  /(.*\.)?spade\.com$/,
  /(.*\.)?sprinto\.com$/,
  /(.*\.)?svix\.com$/,
  /(.*\.)?teamretro\.com$/,
  /(.*\.)?teamtailor\.com$/,
  /(.*\.)?typeform\.com$/,
  /(.*\.)?udemy\.com$/,
  /(.*\.)?usepylon\.com$/,
  /(.*\.)?webhook\.site$/,
  /(.*\.)?xero\.com$/,
  /(.*\.)?zoom\.us$/,
]);

const privacyMatches = finicky.matchHostnames([
  /(.*\.)?facebook\.com$/,
  /(.*\.)?linkedin\.com$/,
  /(.*\.)?photos\.google\.com$/,
  /(.*\.)?reddit\.com$/,
  /(.*\.)?youtube\.com$/,
]);

const isContainerUrl = (url: URL) =>
  url.toString().startsWith("ext+container:");

export default {
  defaultBrowser: "Zen",
  options: {
    checkForUpdates: true,
    logRequests: false,
    keepRunning: true,
    hideIcon: false,
  },
  rewrite: [
    // PROFILE: work
    {
      match: (url: URL) => (isContainerUrl(url) ? false : workMatches(url)),
      url: inContainer("Work"),
    },
    // PROFILE: privacy
    {
      match: (url: URL) => (isContainerUrl(url) ? false : privacyMatches(url)),
      url: inContainer("Privacy"),
    },
    // PROFILE: personal (only if not previously matched)
    {
      match: (url: URL) =>
        isContainerUrl(url)
          ? false
          : !(workMatches(url) || privacyMatches(url)),
      url: inContainer("Personal"),
    },
  ],
} satisfies FinickyConfig;
