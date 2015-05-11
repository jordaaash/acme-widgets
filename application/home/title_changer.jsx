'use strict';

var React = require('react');
var P = React.PropTypes;

var TitleChanger = React.createClass({
    propTypes: {
        title:    P.string.isRequired,
        onChange: P.func
    },
    render:    function () {
        return (
            <input
                onChange={ this.handleChange }
                value={ this.props.title }/>
        );
    },
    handleChange: function (event) {
        var title = event.target.value;
        title = title.replace(/fuck/i, '****');
        this.props.onChange.call(this, event, title);
    }
});

module.exports = TitleChanger;
