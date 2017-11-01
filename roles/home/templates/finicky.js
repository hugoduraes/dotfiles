finicky.setDefaultBrowser('com.apple.safari')

// Open Spotify links in client
finicky.onUrl(function (url, opts) {
  if (url.match(/^https?:\/\/open\.spotify\.com/)) {
    return {
      bundleIdentifier: 'com.spotify.client'
    }
  }
});
