const path = require("path");
const webpack = require("webpack");
const I18nPlugin = require("i18n-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var languages = [];


module.exports = {
    context: __dirname,
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    entry: "./app/index.js",
    resolve: {
        extensions: [" ", ".js", ".jsx"],
        alias: {
            "config": path.resolve(__dirname, "config"),
            "app": path.resolve(__dirname, "app")
        }
    },
    plugins: [
        new CleanWebpackPlugin("build"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
        new ExtractTextPlugin({
            filename: "assets/css/[name].css",
            allChunks: true
        }),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
        new I18nPlugin(languages),
        // new CompressionPlugin(),
    ],
    externals: {
        "api": JSON.stringify(development ? require("./config/development/api.json") : require("./config/production/api.json"))
    }
};
