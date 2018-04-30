var _          = require('lodash');
var webpack    = require('webpack');
var baseConfig = require('./base.config');

var config = _.merge(baseConfig, {
    devtool: 'eval',
    devServer: {
        contentBase: 'web',
        port: 8081,
        host: '0.0.0.0',
        hot: true,
        inline: true
    }
});

module.exports = config;