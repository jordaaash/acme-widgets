'use strict';

var path         = require('path');
var koa          = require('koa');
var responseTime = require('koa-response-time');
var logger       = require('koa-logger');
var compress     = require('koa-compress');
var Promise      = require('bluebird');
var error        = require('../../middleware/error');
var serve        = require('../../middleware/serve');

class Application {
    constructor () {
        super();
        if (this.constructor === Application) {
            throw new Error('Application# is an abstract class and cannot be instantiated');
        }

        var app = this.app = koa();

        app.use(responseTime());

        app.use(logger());

        app.use(error());

        Promise.onPossiblyUnhandledRejection(function (error) {
            app.emit('error', error);
        });
    }

    initialize () {
        var app  = this.app;
        var root = path.resolve(__dirname, '..', '..', '..', 'public');

        app.use(compress());

        app.use(serve(root));
    }
}

module.exports = Application;
