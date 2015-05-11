'use strict';

var error = function () {
    return function* (next) {
        var status;
        try {
            yield next;
        }
        catch (error) {
            status = error.status;
            if (status == null) {
                status = 500;
            }
            this.status = status;
            this.body   = {
                error: {
                    code:    status,
                    message: error.message,
                    stack:   error.stack
                }
            };
            console.log(error);
            this.app.emit('error', error, this);
        }
    };
};

module.exports = error;
