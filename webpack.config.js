const path = require("path");
const webpack = require("webpack");
const I18nPlugin = require("i18n-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

var development = process.env.NODE_ENV !== "production";
var languages = [];

process.traceDeprecation = true;

module.exports = {
    context: __dirname,
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    devtool: development ? "inline-source-map" : false,
    entry: "./app/index.js",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["babel-preset-react"], // ['presetName',{optionName:value}]
                            ["babel-preset-env"],
                            ["stage-0"]
                        ],
                        plugins: [
                            "react-html-attrs",
                            "transform-decorators-legacy",
                            "transform-class-properties",
                            "transform-react-jsx",
                            "transform-react-constant-elements"
                        ]
                    }
                }

            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]"
                    }

                }]
            },
            {
                test: /\.json$/,
                use: "json-loader"
            }
        ]
    },
    resolve: {
        extensions: [" ",".js",".jsx"],
        alias: {
            "assets": path.resolve(__dirname,"assets"),
            "config": path.resolve(__dirname,"config"),
            "app": path.resolve(__dirname,"app")
        }
    },
    devServer: {
        contentBase: "./",
        historyApiFallback: true,
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
        }),
        // new webpack.optimize.DedupePlugin(), WARNING in DedupePlugin: This plugin was removed from webpack. Remove it from your configuration.
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
        new I18nPlugin(languages),
        new CompressionPlugin(),
        new CleanWebpackPlugin(["build"])
    ],
    externals: {
        "api": JSON.stringify(development ? require("./config/development/api.json") : require("./config/production/api.json"))
    }
};
