const path = require('path')

const customRoutes = {
  '/pages/index/index': '/index',
  '/pages/panel/index': '/panel',
  // basic
  '/pages/basic/icon/index': '/basic/icon',
  '/pages/basic/button/index': '/basic/button',
  '/pages/basic/color/index': '/basic/color',
  '/pages/basic/typo/index': '/basic/typo',
  // view
  '/pages/view/noticebar/index': '/view/noticebar',
  '/pages/view/badge/index': '/view/badge',
  '/pages/view/tag/index': '/view/tag',
  '/pages/view/avatar/index': '/view/avatar',
  '/pages/view/article/index': '/view/article',
  '/pages/view/timeline/index': '/view/timeline',
  '/pages/view/swiper/index': '/view/swiper',
  '/pages/view/load-more/index': '/view/load-more',
  '/pages/view/divider/index': '/view/divider',
  '/pages/view/countdown/index': '/view/countdown',
  '/pages/view/steps/index': '/view/steps',
  '/pages/view/curtain/index': '/view/curtain',
  '/pages/action/toast/index': '/view/toast',
  '/pages/action/modal/index': '/view/modal',
  '/pages/action/progress/index': '/view/progress',
  '/pages/action/action-sheet/index': '/view/action-sheet',
  '/pages/action/swipe-action/index': '/view/swipe-action',
  '/pages/action/activity-indicator/index': '/view/activity-indicator',
  '/pages/action/message/index': '/view/message',
  // navigation
  '/pages/navigation/drawer/index': '/navigation/drawer',
  '/pages/navigation/pagination/index': '/navigation/pagination',
  '/pages/navigation/tabs/index': '/navigation/tabs',
  '/pages/navigation/tabbar/index': '/navigation/tabbar',
  '/pages/navigation/segmented-control/index': '/navigation/segmented-control',
  '/pages/navigation/navbar/index': '/navigation/navbar',
  '/pages/navigation/indexes/index': '/navigation/indexes',
  // layout
  '/pages/layout/flex/index': '/layout/flex',
  '/pages/layout/grid/index': '/layout/grid',
  '/pages/layout/float-layout/index': '/layout/float-layout',
  '/pages/layout/card/index': '/layout/card',
  '/pages/layout/list/index': '/layout/list',
  '/pages/layout/accordion/index': '/layout/accordion',
  // form
  '/pages/form/form/index': '/form/form',
  '/pages/form/checkbox/index': '/form/checkbox',
  '/pages/form/input/index': '/form/input',
  '/pages/form/input-number/index': '/form/input-number',
  '/pages/form/radio/index': '/form/radio',
  '/pages/form/textarea/index': '/form/textarea',
  '/pages/form/switch/index': '/form/switch',
  '/pages/form/rate/index': '/form/rate',
  '/pages/form/picker/index': '/form/picker',
  '/pages/form/picker-view/index': '/form/picker-view',
  '/pages/form/slider/index': '/form/slider',
  '/pages/form/search-bar/index': '/form/search-bar',
  '/pages/form/image-picker/index': '/form/image-picker',
  '/pages/form/range/index': '/form/range',
  // advanced
  '/pages/advanced/calendar/index': '/advanced/calendar',
}

const config = {
  projectName: 'taro-ui-vue3',
  date: '2020-10-17',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [],
  defineConstants: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: true
  },
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/style': path.resolve(__dirname, '..', 'src/style'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'vue3',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain(chain) {
      chain.module
        .rule('typescript')
        .test(/.\ts$/)
        .use('ts-loader')
        .loader('ts-loader')
        .tap(options => ({
          ...options,
          appendTsSuffixTo: [/\.vue$/]
        }))
        .end()
    }
  },
  h5: {
    publicPath: process.env.NODE_ENV === 'development' ? '/' : '/taro-ui-vue3-demo/',
    staticDirectory: 'static',
    esnextModules: ['taro-ui-vue3'],
    output: {
      filename: 'js/[name].[hash:8].js',
      chunkFilename: 'js/[name].[chunkhash:8].js'
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    router: {
      mode: 'browser',
      basename: process.env.NODE_ENV === 'development' ? '/' : '/taro-ui-vue3-demo/',
      customRoutes
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain(chain) {
      chain.resolve.alias
        .set(
          '@tarojs/components$',
          '@tarojs/components/dist-h5/vue3/index.js'
        )
        .set(
          'taro-ui-vue3$',
          'taro-ui-vue3/dist/index.esm.js'
        )
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
