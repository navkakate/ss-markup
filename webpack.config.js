var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["./src/app.js"],
    module: {
        loaders: [{
            test: /\.less$/,
            loaders: ['style', 'css', 'less']
        }, {
            test: /\.html$/,
            loader: "raw-loader"
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    output: {
        filename: "bundle.js"
    },
    watch: true
}
