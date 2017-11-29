const path = require('path');
const SRC_PATH = path.resolve(__dirname, 'src');
const DIST_PATH = path.resolve(__dirname, 'dist');

const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(SRC_PATH, 'image-slider.js'),
    output: {
        filename: 'image-slider.min.js',
        path: path.resolve(DIST_PATH)
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.s?css/,
                loader: 'css-raw-loader!sass-loader?outputStyle=expanded'
            },
            {
                test: /\.html/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new HTMLPlugin({
            template: './index.html'
        })
    ]
};
