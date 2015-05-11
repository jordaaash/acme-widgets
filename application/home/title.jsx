'use strict';

var React = require('react');

var Title = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render:    function () {
        return (
            <h1>{ this.props.title }</h1>
        );
    }
});

module.exports = Title;
