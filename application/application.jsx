'use strict';

var React        = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Application = React.createClass({
    render: function () {
        return (
            <div className="application">
                <RouteHandler { ...this.props }/>
            </div>
        );
    }
});

module.exports = Application;
