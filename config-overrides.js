const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    "os": require.resolve("os-browserify/browser"),
    "path": require.resolve("path-browserify"),
    "vm": require.resolve("vm-browserify"),
    "assert": require.resolve("assert/"),
    "stream": require.resolve("stream-browserify"),
    "querystring": require.resolve("querystring-es3"),
    "buffer": require.resolve("buffer/"),
    "crypto": require.resolve("crypto-browserify"),
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "zlib": require.resolve("browserify-zlib"),
    "url": require.resolve("url/"),
    "util": require.resolve("util/"),
    "process": require.resolve("process/browser"),
    "net": false,
    "fs": false,
    "tls": false,
    "dns": false
  };

  return config;
};
