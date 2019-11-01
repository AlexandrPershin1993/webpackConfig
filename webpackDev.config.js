const base = require('./webpackBase.config');
const merge = require('webpack-merge');

const dev = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap:true
            }
          }
        ]
      },
      {
        test: /\.(jp?g|gif|png|svg)$/,
        loader: "file-loader",
        options: {
          name: "public/image/[name].[ext]"
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    overlay: true,
    hot: true
  }
};

module.exports = merge(base, dev);