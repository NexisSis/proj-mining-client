const path = require("path");
const webpack = require("webpack");
const I18nPlugin = require("i18n-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');



module.exports = {
    context: __dirname,
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    devtool: "inline-source-map",
    entry: "./app/index.js",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
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
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: true,
                            localIdentName: development ? "[name]__[local]" : "[name]__[local]___[hash:base64:5]"
                        }
                    }
                })
            },
            {
                test: /\.(png|gif|jpg|jpeg|webp)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: development ? "assets/images/[name].[ext]" : "assets/images/[name].[ext]?[hash]",
                            publicPath: "/build/"
                        }
                    }

                ]
            },
            {
                test: /\.(eot|woff(2)?|ttf|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: development ? "assets/fonts/[name].[ext]" : "assets/fonts/[name].[ext]?[hash]",
                            publicPath: "/build/"
                        }
                    }
                ]
            },
            {
                test: /\.json$/,
                use: "json-loader"
            }
        ]
    },
    resolve: {
        extensions: [" ", ".js", ".jsx"],
        alias: {
            "assets": path.resolve(__dirname, "assets"),
            "config": path.resolve(__dirname, "config"),
            "app": path.resolve(__dirname, "app")
        }
    },
    devServer: {
        port: 8080
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
        new I18nPlugin(languages),
        new CompressionPlugin(),
    ],
    externals: {
        "api": JSON.stringify(development ? require("./config/development/api.json") : require("./config/production/api.json"))
    }
};
