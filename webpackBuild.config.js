const base = require('./webpackBase.config');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');

const build = {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          name: 'react',
          test: /react|react-dom|redux|react-redux/,
          enforce: true,
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jp?g|gif|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "public/image/[name].[ext]"
            }
          },
          {
            loader: 'img-loader',
            options: {
              plugins: [
                require('imagemin-mozjpeg')({
                  progressive: true,
                  quality:65
                }),
                require('imagemin-optipng')()
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CleanWebpackPlugin()
  ]
};

module.exports = merge(base, build);