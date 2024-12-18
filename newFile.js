module.exports = {
    resolve: {
        fallback: {
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer/"),
            "crypto": require.resolve("crypto-browserify"),
            "path": require.resolve("path-browserify"),
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "url": require.resolve("url/"),
            "os": require.resolve("os-browserify/browser"),
            "assert": require.resolve("assert"),
            "util": require.resolve("util/"),
            "process": require.resolve("process/browser")
        }
    }
};
