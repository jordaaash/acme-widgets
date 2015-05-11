'use strict';

var React        = require('react');
var Title        = require('./title.jsx');
var TitleChanger = require('./title_changer.jsx');
var Link         = require('react-router').Link;
var Stock        = require('../components/stock.jsx');

var HomePage = React.createClass({
    getInitialState:   function () {
        return {
            title:           'ACME Widgets',
            symbol:          null,
            submittedSymbol: null
        };
    },
    render:            function () {
        return (
            <div className={ this.getClassName() }>
                <Title title={ this.state.title }/>
                <form onSubmit={ this.handleSubmit }>
                    <input
                        onChange={ this.handleChange }
                        value={ this.state.symbol }/>
                    <button type="submit">Lookup</button>
                </form>
                <Stock
                    onChange={ this.handleStockChange }
                    symbol={ this.state.submittedSymbol }/>
            </div>
        );
    },
    getClassName:      function () {
        return 'home-page';
    },
    handleChange:      function (event) {
        var symbol = event.target.value;
        this.setState({ symbol: symbol });
    },
    handleStockChange: function (symbol, price) {
        if (parseFloat(price) > 5) {
            alert('buy!');
        }
    },
    handleSubmit:      function (event) {
        event.preventDefault();
        this.setState({ submittedSymbol: this.state.symbol });
    }
});

module.exports = HomePage;

/*
 <button onClick={ this.handleClick }>Button</button>
 <Link
 className="contact-link"
 to="contact">Contact Us</Link>
 */
