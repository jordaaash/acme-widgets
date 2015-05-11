'use strict';

var path   = require('path');
var dotenv = require('dotenv');
var file   = path.join(__dirname, '.env');

dotenv.load({ path: file + '.' + (process.env.NODE_ENV || 'development') });
dotenv.load({ path: file });

module.exports = process.env;
