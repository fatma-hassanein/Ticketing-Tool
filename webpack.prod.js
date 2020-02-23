const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    main: './src/client/index.js',
    form: './src/client/js/form.js',
    datatables: './src/client/js/datatables.js'
  },
  mode: 'development',
  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  module: {
    rules: [
      {
        test: '/.js$/',
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html',
      inject: false
    }),
    new HtmlWebPackPlugin({
      template: './src/client/views/dataTable.html',
      filename: './dataTable.html',
      inject: false
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new WorkboxPlugin.GenerateSW()
  ]
};
