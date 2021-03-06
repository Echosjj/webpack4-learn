const path = require('path')
const webpack = require('webpack')
const pkg = require('../package.json')

function filterTypes() {
  var tpsReg = /^@types/i
  return Object.keys(pkg.dependencies).filter((item) => {
      return !tpsReg.test(item)
  })
}

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    vendor: filterTypes()
  },
  output: {
    path: resolve('dist'),
    filename: '[name].dll.js',
    library: '_dll_[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '_dll_[name]',
      path: resolve('dist/manifest.json'),
      context: path.resolve(__dirname, '../')
    })
  ]
}