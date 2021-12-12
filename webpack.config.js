const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'source-map',
    // mode: process.env.NODE_ENV === 'dev' ? 'development' : 'production',
    mode: 'development',
    devServer: {
        static: './dist',
    },
    plugins: [new HtmlWebpackPlugin({
        filename: './index.html',
        template: './index.html'
    })],
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                // use: 'babel-loader',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }


            }
        ]
    }
};