'use strict';

var Local = require('./abstract/local');

class Development extends Local {
    initialize () {
        super.initialize();

        if (process.env.HOT_PORT) {
            var DevServer = require('webpack-dev-server');
            var webpack   = require('webpack');
            var config    = require('../../build/webpack');
            var host      = config.devServer.host;
            var port      = config.devServer.port;
            var hot       = this.hot = new DevServer(webpack(config), config.devServer);

            hot.listen(port, function () {
                console.log('Webpack server listening on ' + host + ' at ' + port);
            });
        }
    }
}

module.exports = Development;
