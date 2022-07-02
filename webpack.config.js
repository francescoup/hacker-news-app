const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: { rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.(ico|png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
    ] },
    plugins: [
        new HtmlWebpackPlugin({ 
            title: 'Applicazione webpack',
            favicon: './src/img/favicon.ico',
            template: './src/index.html',
            filename: "index.html",
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        port:5000,
        open: true,
        static: path.resolve(__dirname, 'dist')
    },
    
}