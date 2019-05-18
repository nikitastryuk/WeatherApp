const path = require('path');
const webpackMerge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const commonConfig = require('./webpack.config.js');
const DESTINATION = path.resolve(__dirname, 'public');

module.exports = webpackMerge(commonConfig, {
    mode: 'production',
    output: {
        path: DESTINATION,
        filename: 'js/[name]-bundle-[chunkhash].js'
    },

    plugins: [
        new UglifyJsPlugin()
    ]
});
