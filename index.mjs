require('dotenv').config();

global.__basedir = __dirname;

require = require('@std/esm')(module, {});
module.exports = require('./src/server/index.mjs');
