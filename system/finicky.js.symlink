finicky.setDefaultBrowser('com.google.Chrome')

// Open social network links in Safari
finicky.onUrl(function(url, opts) {
    if (url.match(/^https?:\/\/(www\.)?(youtube|facebook|twitter|linkedin)\.com/)) {
        return {
            bundleIdentifier: 'com.apple.Safari'
        }
    }
});

// Open Spotify links in client
finicky.onUrl(function(url, opts) {
    if (url.match(/^https?:\/\/open\.spotify\.com/)) {
        return {
            bundleIdentifier: 'com.spotify.client'
        }
    }
});
