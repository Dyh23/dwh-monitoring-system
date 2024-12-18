import './polyfills';
import 'os-browserify/browser';
import 'path-browserify';
import 'vm-browserify';
import 'assert';
import 'stream-browserify';
import 'querystring-es3';
import 'buffer';
import 'crypto-browserify';
import 'stream-http';
import 'https-browserify';
import 'browserify-zlib';
import 'url';
import 'util';
import 'process/browser';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

require('dotenv').config();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
