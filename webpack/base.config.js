var _                             = require('lodash');
var path                          = require('path');
var webpack                       = require('webpack');
var argv                          = require('yargs').argv;
var scripts                       = require('./scripts');
var autoprefixer                  = require('autoprefixer');
var HtmlWebpackPlugin             = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var rootDir = path.resolve(__dirname, '../');

var aliases = _.mapValues(scripts.aliases, function (scriptPath) {
    return path.resolve(rootDir + scriptPath);
});

module.exports = {
    context: rootDir,
    entry: {
        app: './src/index.js',
        ramda: ['ramda'],
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, '../web/assets'),
        chunkFilename: 'js/bundle.[id].[hash].js',
    },
    resolve:{
        alias: aliases,
        extensions:['*','.js','.json','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: 'babel-loader',
                exclude: [/node_modules/]
            },{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                            javascriptEnabled: true,
                            modifyVars: {
                                'primary-color': '#531dab',
                            },
                        }
                    }
                ]
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [ { 
                        loader: "url-loader?limit=100000" , 
                        options: {
                            limit:10000,
                            name: 'img/[name].[hash].[ext]'
                        }
                    } ]
            }, {
                test: /(\.otf|\.woff|\.woff2|\.svg|\.eot|\.ttf)/,
                use: [ { 
                    loader: "url-loader?limit=10000&mimetype=application/font-woff" ,
                    options: {
                        limit:10000,
                        name: 'fonts/[name].[hash].[ext]'
                    }
                } ]
            }
        ]
    },

    plugins: [
        new UglifyJSPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            chunks: ['app', 'commons', 'ramda']
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
            chunkFilename: "css/[id].[contenthash].css"
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    priority: 10,
                    chunks: 'initial'
                },
                styles: {
                    name: 'styles',
                    test: /\.(css|less)$/,
                    chunks: 'all',
                    minChunks: 2,
                    enforce: true
                }
            }
        }
    }
};