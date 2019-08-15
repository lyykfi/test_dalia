const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        modules: ['./src', 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.less$/,
                use: [
                  {
                    loader: 'style-loader', 
                  },
                  {
                    loader: 'css-loader',
                  },
                  {
                    loader: 'less-loader',
                  },
                ],
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: 'style-loader', 
                  },
                  {
                    loader: 'css-loader',
                  },
                ],
            },
        ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    devServer: {
      hot: true,
      host: '0.0.0.0',
      historyApiFallback: true,
    }
};