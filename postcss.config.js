module.exports = {
  // plugins: [
    // require('autoprefixer')({
    //   "browsers": [
    //     "ie >= 9",
    //     "ff >= 30",
    //     "chrome >= 34",
    //     "safari >= 7",
    //     "opera >= 23"
    // ]
    // })
  // ]
  'plugins': {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': {
      utf8: false
    },
    'postcss-cssnext': {},
    'postcss-px-to-viewport': {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      viewportUnit: "vw",   //指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines'],// 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1,     // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false
    },
    "postcss-viewport-units": {},
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }


  }
}