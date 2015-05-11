'use strict';

require('../env');

var path = require('path');
var Class;

try {
    Class = (new Function("'use strict'; return class Class {};"))();
}
catch (error) {
}

if (Class == null) {
    require('babel-core/register')({
        extensions: ['.js', '.jsx'],
        whitelist:  ['es6.classes', 'es6.destructuring', 'es7.objectRestSpread', 'react'],
        stage:      1
    });
}
else {
    require('babel-core/register')({
        extensions: ['.jsx'],
        whitelist:  ['es6.classes', 'es6.destructuring', 'es7.objectRestSpread', 'react'],
        only:       new RegExp('^' + path.resolve(__dirname, '..', 'application').replace(/\//g, '\/')),
        stage:      1
    });
}

var Environment = require('./environments/' + process.env.NODE_ENV);
var environment = new Environment;

module.exports = environment;

environment.initialize();
