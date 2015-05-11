'use strict';

var render = require('./render');
var routes = require('../application/index.jsx');

require('./styles/index.styl');

module.exports = routes;

render(routes);
