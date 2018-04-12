var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
//
var CleanWebpackPlugin = require("clean-webpack-plugin");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

var appConfig = require("./src/appConfig");
//
// console.log(appConfig.entryPoints);


module.exports = {
    entry: appConfig.entryPoints,

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].build.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            // resolve *.ts files.
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            // less files.
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    // compiles Less to CSS
                    loader: 'less-loader',
                    options: {
                        paths: [
                            path.resolve(__dirname, 'src')
                        ]
                    }

                }]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json', ".ts", ".tsx"]
    },

    //server config.
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        port: 8080
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};

//
var htmlPlugins = [];
//
appConfig.mainPages.forEach((item, index) => {
    //
    let plugin = new HtmlWebpackPlugin({
        //
        template: item.template,
        filename: item.filename,
        title: item.title,
        chunks: item.chunks
    });
    //
    htmlPlugins.push(plugin);
});

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.LoaderOptionsPlugin({
            minimize: false
        }),
        // css

        new ExtractTextPlugin({
            filename: "style.css",
            allChunks: true
        }),

        //生成html，模板.
        // new HtmlWebpackPlugin(),

//         new HtmlWebpackPlugin({
//             //
//             template: "./src/views/index.html",
//             filename: "gisindex.html",
//             title: "tests,hi",
//             chunks: ["typescript/main"]
//         }),
//
//         new HtmlWebpackPlugin({
//             //
//             template: "./src/views/index.html",
//             filename: "qshindex.html",
//             title: "testshuohuohouo.i",
//             chunks: ["typescript/en"]
//         }),
// //
//         // es60
//         new HtmlWebpackPlugin({
//             //
//             template: "./src/views/index.html",
//             filename: "es6index.html",
//             title: "buovuoo.i",
//             chunks: ["es6/main"]
//         }),
        //copy resources.
        // new CopyWebpackPlugin([
        //     {
        //         from: 'src/',
        //         to: '[name].[hash].[ext]',
        //         toType: 'template',
        //         ignore: ["*.js", "*.js.map"]
        //     }
        // ]),
        //clear dirs.
        new CleanWebpackPlugin(["dist"]),
    ]).concat(htmlPlugins);
}
