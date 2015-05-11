'use strict';

var Router = require('react-router');

var route = function (routes, location, callback) {
    var router = Router.create({
        routes:            routes,
        location:          location,
        onError:           function (error) {
            callback(error);
        },
        onAbort:           function (reason) {
            var error = new Error('routing aborted');
            if (reason.constructor.name === 'Redirect') {
                error.redirect = router.makePath(reason.to, reason.params, reason.query);
            }
            else {
                error.reason = reason;
            }
            callback(error);
        }
    });
    router.run(function (Root, state) {
        callback(null, Root, state);
    });
};

module.exports = route;
