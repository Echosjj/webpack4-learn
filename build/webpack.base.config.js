const path = require('path')
const chalk = require('chalk') //颜色插件

const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const happyPack = require('happyPack') //利用多内核cpu使webpack进行子进程任务
const os = require('os') 
const happyThreadPool = happyPack.ThreadPool({size: os.cpus().length})

const MiniCssExtractplugin = require('mini-css-extract-plugin') //提取打包css到单独的文件

function resolve(dir){
  return path.join(__dirname, '..', dir)
}

function assetsPath(_path_){
  var  assetsSubDirectory;
  if(process.env.NODE_ENV === 'production'){
    assetsSubDirectory = 'static'
  }else{
    assetsSubDirectory = 'static'
  }
  return path.posix.join(assetsSubDirectory, _path_)
}

module.exports = {
  context: path.resolve(__dirname, '../'), //上下文
  entry: {                                 //入口文件
    index: './src/index/index.js',
    page: './src/page/page.js'
  },
  output: {                                //输出文件
    path: resolve('dist'),
    filename: '[name]/[name].[hash].js'
  },
  resolve: {                               //别名
    extensions: ['.js', '.css', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    } //配置别名加快webpack查找模块速度
  },
  module: {                                //模块- loader
    rules: [
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: 'html-loader', //为了加载html中的script标签， 但是与html-webapck-plugin冲突，改用<%= require()%>引入图片
      //       options: {
      //         attrs: ['img:src', 'img:data-src', 'audio:src'], 
      //         minimize: true 
      //       }
      //     }
      //   ]
      // },
        // 从右往左开始转义
      {
        test: /\.css$/,
        use: ['css-hot-loader',MiniCssExtractplugin.loader, 'css-laoder', 'postcss-loader'],
        include: [resolve('src')],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: ['css-hot-loader',MiniCssExtractplugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
        include: [resolve('src')],
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        use: ['css-hot-loader',MiniCssExtractplugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
        include: [resolve('src')],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'happypack/loader?id=happy-babel-js',
        include: [resolve('src')],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: [resolve('src')],
        exclude: /node-modules/
      },
      {//url-laoder是增强版的file-loader，不相互依赖
        test: /\.(jpeg|jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: assetsPath('image/[name].[hash:7].[ext]'),
              limit: 10000,
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  optimization: { //全新的通用分块策略common chunks strategy拆分    （内置优化）
    splitChunks: {
      cacheGroups: { //缓存组
        commons: { // 创建一个所有入口文件都有引用的代码 common 块
          chunks: 'initial',
          name: 'common',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        }
      }
    }
  },
  plugins: [                                       //插件
    new happyPack({ //采用多进程提高编译速度
      id: 'happy-babel-js',
      loaders: ['babel-loader?cacheDirectory=true'],
      threadPool:happyThreadPool 
    }),
    new MiniCssExtractplugin({  //压缩css文件
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new ProgressBarPlugin({     //编译过程显示进度
      format: 'build[:bar]' + chalk.green.bold(':percent') + '(:elapsed seconds)'
    }),
  ]
   

}
