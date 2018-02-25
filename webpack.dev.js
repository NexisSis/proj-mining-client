const path = require("path");
const merge = require("merge");
const webpack = require("webpack");
const I18nPlugin = require("i18n-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');



module.exports = {
    devServer: {
        contentBase: "./",
        historyApiFallback: true,
        port: 8080
    },
    externals: {
        "api": JSON.stringify(development ? require("./config/development/api.json") : require("./config/production/api.json"))
    }
};
