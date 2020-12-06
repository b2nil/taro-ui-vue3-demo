module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
  },
  mini: {
    webpackChain(chain) {
      chain.plugin('analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
    }
  },
  h5: {
    webpackChain(chain) {
      chain.plugin('analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])

      chain.resolve.alias
        .set(
          '@tarojs/components$',
          '@tarojs/components/dist-h5/vue3/index.js'
        )
    }
  }
}
