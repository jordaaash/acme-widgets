'use strict';

var webpack           = require('webpack');
var HTMLPlugin        = require('html-webpack-plugin');
var AppCachePlugin    = require('appcache-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path              = require('path');

var root        = path.resolve(__dirname, '..');
var client      = path.join(root, 'client');
var application = path.join(root, 'application');
var dest        = path.join(root, 'public');
var templates   = path.join(__dirname, 'templates');
var include     = [client, application];

require('../env');

var config = {
    verbose: true,
    colors:  true,
    debug:   true,
    entry:   {
        application: [
            'webpack-dev-server/client?http://' + process.env.HOST + ':' + process.env.HOT_PORT,
            'webpack/hot/only-dev-server',
            path.join(client, 'index.js')
        ]
    },
    module:  {
        loaders: [
            {
                test:    /\.jsx?$/,
                loaders: ['react-hot-loader', 'babel-loader?stage=1&optional=runtime'],
                include: include
            },
            {
                test:    /\.css$/,
                loader:  ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap'),
                include: include
            },
            {
                test:    /\.styl$/,
                loader:  ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!stylus-loader'),
                include: include
            }
        ]
    },
    output:  {
        chunkFilename: '[id].js?[hash]',
        filename:      '[name].js?[hash]',
        path:          dest,
        publicPath:    process.env.PUBLIC_PATH
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin,
        new webpack.NoErrorsPlugin,
        new webpack.optimize.OccurenceOrderPlugin,
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
        new webpack.optimize.DedupePlugin,
        new ExtractTextPlugin('[name].css?[hash]', {
            allChunks: true
        }),
        new AppCachePlugin({
            filename: 'manifest.appcache',
            path:     process.env.PUBLIC_PATH
        }),
        new HTMLPlugin({
            template: path.join(templates, process.env.TEMPLATE + '.html'),
            filename: 'index.html',
            manifest: path.join(process.env.PUBLIC_PATH, '/')
        }),
        new HTMLPlugin({
            template: path.join(templates, 'manifest.html'),
            filename: 'manifest.html',
            hash:     true
        }),
        new webpack.SourceMapDevToolPlugin(
            '[file].map', null,
            "[absolute-resource-path]", "[absolute-resource-path]"
        )
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.styl']
    },
    target:  'web'
};

config.devServer = {
    contentBase:        config.output.path,
    historyApiFallback: true,
    host:               process.env.HOST,
    hot:                true,
    inline:             true,
    port:               process.env.HOT_PORT,
    progress:           true,
    // proxy:              [{
    //     path:   /^(?!.*\.hot-update\.js)(.*)$/,
    //     target: 'http://' + process.env.HOST + ':' + process.env.PORT + '/'
    // }],
    publicPath:         config.output.publicPath,
    stats:              { colors: true }
};

module.exports = config;
