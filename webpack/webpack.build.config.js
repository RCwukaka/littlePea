var _          = require('lodash');
var path       = require('path');
var webpack    = require('webpack');
var baseConfig = require('./base.config');

var config = _.merge(baseConfig, {
    devtool: 'cheap-module-source-map '
});

module.exports = config;