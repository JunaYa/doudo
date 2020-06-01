module.exports = {
  // https://ulanqab.fun/doudo
  publicPath: process.env.NODE_ENV === 'production' ? '/doudo/' : '/',

  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      }
    },
    overlay: {
      warnings: true,
      errors: true
    }
  },

  // 正式环境关闭 lint
  lintOnSave: process.env.NODE_ENV !== 'production',

  // 正式环境关闭 source map
  productionSourceMap: process.env.NODE_ENV !== 'production',

  css: {
    // 开启后影响构建性能
    sourceMap: false,
    // true: *.module.[ext], false: *.(css|scss|sass|less|styl(us)?) 视为 CSS Modules 模块儿
    requireModuleExtension: true,
    // 正式环境 CSS 提取为独立文件
    extract: process.env.NODE_ENV === 'production',
    loaderOptions: {
      css: {
        modules: {
          localIntedName: '[name]-[hash]'
        },
        localsConvention: 'camelCaseOnly'
      },
      // setting global scss
      sass: {
        prependData: `
            @import "~@/assets/scss/colors.scss";
            @import "~@/assets/scss/fonts.scss";
            @import "~@/assets/scss/mixins.scss";
            @import "~@/assets/scss/shadows.scss";
        `
      },
      scss: {
        prependData: `
            @import "~@/assets/scss/colors.scss";
            @import "~@/assets/scss/fonts.scss";
            @import "~@/assets/scss/mixins.scss";
            @import "~@/assets/scss/shadows.scss";
        `
      }
      // postcss: {},
    }
  },

  // 是否为 Babel 或 TypeScript 使用 thread-loader
  parallel: process.env.NODE_ENV === 'production',

  // chainWebpack: config => {
  // eslint
  // config.module.rule('eslint');
  // config.module.rule('eslint').use('eslint-loader');

  // ts
  // config.module.rule('ts');
  // config.module.rule('ts').use('ts-loader');
  // config.module.rule('ts').use('babel-loader');
  // config.module.rule('ts').use('cache-loader');
  // config.plugin('fork-ts-checker');
  // },

  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'i18n/locales',
      enableInSFC: true
    }
  }
};
