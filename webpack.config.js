const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

module.exports = {
  mode: 'production', // Use 'production' for building optimized build
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/build/'
  },
  resolve: {
    fallback: {
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
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
      'process.browser': 'true'
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^async_hooks$/
    })
  ]
};
