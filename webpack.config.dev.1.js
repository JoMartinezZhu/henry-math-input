const webpack = require('webpack');

const config = require('./webpack.config');

config.plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'deps',
    }),
];

config.devtool = '#eval-source-map';

module.exports = config;
