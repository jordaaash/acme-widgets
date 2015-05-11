'use strict';

var React  = require('react');
var Router = require('react-router');
var route  = require('./route');

var render = function (routes) {
    document.addEventListener('DOMContentLoaded', function (event) {
        route(routes, Router.HistoryLocation, function (error, Root, state) {
            var element, body;
            if (error == null) {
                element = React.createElement(Root, state);
                body    = document.getElementById('body');
                React.render(element, body);
            }
            else {
                throw error;
            }
        });
    });
};

module.exports = render;
