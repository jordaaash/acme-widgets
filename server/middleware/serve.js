'use strict';

var send = require('koa-send');
var path = require('path');

var serve = function (root) {
    return function* (next) {
        var sent = yield send(this, this.path, { root: root });
        if (sent) {
            console.log('SEND: /' + path.relative(root, sent));
        }
        else {
            yield next;
        }
    };
};

module.exports = serve;
