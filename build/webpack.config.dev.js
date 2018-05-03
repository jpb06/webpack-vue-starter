'use strict'

const webpack = require('webpack')
const {
  VueLoaderPlugin
} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const utils = require('./utils')

module.exports = {
  mode: 'development',
  devServer: {
    hot: true
  },
  module: {
    rules: [{
      test: /\.(js|vue)$/,
      use: 'eslint-loader',
      enforce: 'pre'
    },
    {
      test: /\.vue$/,
      use: 'vue-loader'
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    { // should come after vue loader
      test: /\.js$/,
      use: 'babel-loader'
    }
    ]
  },
  plugins: [
    new VueLoaderPlugin(), // necessary for vue loader to work
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }), 
    new CopyWebpackPlugin([{ // static content
      from: utils.resolve('static/img'),
      to: utils.resolve('dist/static/img'),
      toType: 'dir'
    }])
  ]
}
