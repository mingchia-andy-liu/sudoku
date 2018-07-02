const merge = require('webpack-merge')
// const HtmlWebpackPlugin = require('html-webpack-plugin')    // for webpack dev server
const path = require('path')

const webpackDevConfig = {
    devtool: 'cheap-module-eval-source-map',
    // https://webpack.js.org/concepts/mode/
    mode: 'development',
}
const webpackProdConfig = {
    // https://webpack.js.org/concepts/mode/
    mode: 'production',
}

let webpackConfig = {
    entry: [
        path.resolve(__dirname, 'app', 'app.jsx')
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ],
    },
}

if (process.env.NODE_ENV === 'development') {
    webpackConfig = merge(webpackConfig, webpackDevConfig)
} else {
    webpackConfig = merge(webpackConfig, webpackProdConfig)
}

module.exports = webpackConfig
