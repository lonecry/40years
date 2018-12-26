const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports = {
    mode      : 'production',
    entry     : [
        "./src/js/js.js",
    ],
    output    : {
        path     : path.resolve(__dirname,'dist'),
        filename : "./js/bundle[name].js",
    },
    module    : {
        rules : [
            {
                test : /\.css$/,
                use  : ExtractTextPlugin.extract({
                    fallback   : 'style-loader',
                    use        : [
                        {
                            loader : 'css-loader'
                        },
                        {
                            loader : 'postcss-loader'
                        }
                    ],
                    publicPath : "../"
                })
            },
            {
                test : /\.(jpg|png|gif|jpeg)$/,
                use  : "file-loader?limit=6069&name=./images/[name].[ext]"
                // use  : "file-loader?limit=6069&name=./images/[name][hash].[ext]"
            },
            {
                test : /\.html$/,
                use  : "html-loader"
            },
            {
                test : /\.(ttf|woff|woff2|eot|svg)$/,
                use  : "file-loader?name=./fonts/[name].[ext]"
                // use  : "file-loader?name=./fonts/[name][hash].[ext]"
            },
        ]
    },
    devServer : {
        contentBase : "./index.html",
        port        : 8888,
        inline      : true,
        progress    : false,
    },
    plugins   : [
        new ExtractTextPlugin('./css/[name].css'),
        new HtmlWebpackPlugin({
            template : './index.html',
            title    : 'This is a title',
            minify   : {
                removeAttributeQutes  : true,
                removeComments        : true,
                removeTagWhitespace   : true,
                removeEmptyAttributes : true,//去除空属性
                collapseWhitespace    : true//去除空格
            }
        }),
    ]
}