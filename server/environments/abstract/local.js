'use strict';

var Application = require('./application');
var Promise     = require('bluebird');
var http        = require('http');

class Local extends Application {
    constructor () {
        super();
        if (this.constructor === Local) {
            throw new Error('Local# is an abstract class and cannot be instantiated');
        }

        Promise.longStackTraces();
    }

    initialize () {
        super.initialize();

        var host   = process.env.HOST;
        var port   = process.env.PORT;
        var server = this.server = http.createServer(this.app.callback());

        server.listen(port, function () {
            return console.log('HTTP server listening on ' + host + ' at port ' + port);
        });
    }
}

module.exports = Local;
