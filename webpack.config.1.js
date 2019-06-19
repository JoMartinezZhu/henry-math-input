const path = require('path');
const webpack = require('webpack');

module.exports = {
    // mode:"production",
    entry: {
        app: './src/app',
        deps: [
            'react',
            'react-dom',
            'react-redux',
            'redux',
            'aphrodite',
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'deps',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        }),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            mathquill: path.join(__dirname, "mathquill/mathquill.js"),
        },
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            exclude: /(node_modules|mathquill)/,
        }, {
            test: /[\/]mathquill\.js$/,
            loader: "exports?window.MathQuill",
        }],
    },
};
