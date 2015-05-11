'use strict';

var React   = require('react');
var Request = require('superagent-bluebird-promise');

var Stock = React.createClass({
    propTypes:                 {
        symbol:   React.PropTypes.string,
        onChange: React.PropTypes.func
    },
    getInitialState:           function () {
        return {
            symbol: null,
            price:  null
        };
    },
    render:                    function () {
        return (
            <div className="stock">
                <dl>
                    <dt>{ this.state.symbol }</dt>
                    <dd>${ this.state.price }</dd>
                </dl>
            </div>
        );
    },
    componentWillMount:        function () {
        var symbol = this.props.symbol;
        if (symbol != null) {
            this.updateSymbol(symbol);
        }
    },
    componentWillReceiveProps: function (nextProps) {
        if (nextProps.symbol !== this.props.symbol) {
            this.updateSymbol(nextProps.symbol);
        }
    },
    updateSymbol:              function (symbol) {
        var url = 'http://finance.google.com/finance/info?client=ig&q=NASDAQ%3a' + symbol;
        Request.get(url).then(this.symbolFound);
    },
    symbolFound:               function (response) {
        var text = response.text.slice(4, -1);
        var data = JSON.parse(text)[0];
        this.setState({
            symbol: data.t,
            price:  data.l
        });
        this.props.onChange.call(this, data.t, data.l);
    }
});

module.exports = Stock;
