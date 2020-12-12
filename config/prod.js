module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
  },
  terser: {
    enable: true,
    config: {
      compress: {
        arrows: true,
      },
      module: false
    }
  },
  csso: {
    enable: true,
    config: {
      comments: false
    }
  },
  mini: {
    webpackChain(chain) {
      chain.plugin('analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
    }
  },
  h5: {
    styleLoaderOption: {
      esModule: true,
      insert: 'head'
    },
    enableExtract: true,
    miniCssExtractPluginOption: {
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    },
    imageUrlLoaderOption: {
      limit: true,
      encoding: true,
      mimetype: 'image/png',
      esModule: true
    },
    fontUrlLoaderOption: {
      limit: true,
      encoding: true,
      mimetype: true,
      esModule: true
    },
    webpackChain(chain) {
      chain.plugin('analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])

      chain.merge({
        mode: 'production',
        optimization: {
          usedExports: true,
          minimize: true
        }
      })

      chain.resolve.alias
        .set(
          '@tarojs/components$',
          '@tarojs/components/dist-h5/vue3/index.js'
        )
    }
  }
}
