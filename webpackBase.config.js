const path = require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');
const copyWebpackPlugin=require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules'
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html"
    }),
    new copyWebpackPlugin([
      {
        from:'src/public',
        to: 'public'
      }
    ])
  ]
};