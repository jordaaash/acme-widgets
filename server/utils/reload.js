'use strict';

var Module = require('module');
var uncache, reload;

uncache = function (module) {
    module.children.forEach(uncache);
    delete Module._cache[module.id];
};

reload = function (module) {
    return function (name) {
        var filename = Module._resolveFilename(name, module);
        var cached   = Module._cache[filename];
        if (cached) {
            uncache(cached);
        }
        return require(filename);
    };
};

module.exports = reload;
