const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') 
const webpack = require('webpack')
const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')

const devWebpackConfig = merge(baseConfig, {
  output: {
    publicPath: '/'
  },
  devtool: 'eval-source-map', //指定加source-map方式
  devServer: {
    inline: true,
    hot:true,
    contentBase: path.resolve(__dirname, '..', 'dist'), //静态目录文件
    port: 3824,
    host: 'localhost',
    overlay: true,
    compress: false //服务器返回浏览器的时候是否要gzip压缩
  },
  watchOptions: {
    ignored: /node-modules/, //忽略不用监听变更的目录
    aggregateTimeout: 500, //防止重复保存频繁重新编译,500毫米内重复保存不打包
    poll:1000 //每秒询问的文件变更的次数
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src', 'index.html'),
      filename: 'index.html',
      chunks:['index', 'common'],
      vendor: './vendor.dll.js', //与dll配置文件中的output filename保持一致
      hash: true, //防止缓存
      minify: {
        removeAttributeQuotes: true //压缩，去掉引号
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src', 'page.html'),
      filename: 'page.html',
      chunks: ['page', 'common'],
      vendor: './vendor.dll.js',
      hash: true,
      minify: {
        removeAttributeQuotes: true 
      }
    }),
    new webpack.DllReferencePlugin({// 提高打包速度
      manifest: path.resolve(__dirname, '..', 'dist', 'manifest.json')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
})

module.exports = devWebpackConfig


