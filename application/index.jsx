'use strict';

var React         = require('react');
var Router        = require('react-router');
var DefaultRoute  = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect      = Router.Redirect;
var Route         = Router.Route;

var routes = (
    <Route name="application" path="/" handler={ require('./application.jsx') }>
        <DefaultRoute handler={ require('./home/home_page.jsx') }/>
        <Route name="home" path="/" handler={ require('./home/home_page.jsx') }/>
        <Route name="contact" handler={ require('./contact/contact_page.jsx') }/>
    </Route>
);

module.exports = routes;
