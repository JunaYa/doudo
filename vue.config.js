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
            @import "~@/assets/scss/reset.scss";
            @import "~@/assets/scss/fonts.scss";
            @import "~@/assets/scss/mixins.scss";
            @import "~@/assets/scss/shadows.scss";
        `
      },
      scss: {
        prependData: `
            @import "~@/assets/scss/colors.scss";
            @import "~@/assets/scss/reset.scss";
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

  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].template = './public/index.html';
      return args;
    });

    // svg
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');

    // eslint;
    config.module.rule('eslint');
    config.module.rule('eslint').use('eslint-loader');

    // ts;
    config.module.rule('ts');
    config.module.rule('ts').use('ts-loader');
    config.module.rule('ts').use('babel-loader');
    config.module.rule('ts').use('cache-loader');
    config.plugin('fork-ts-checker');

    // pwa
    // config.plugin('workbox');
  },

  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'i18n/locales',
      enableInSFC: true
    }
  }

  // pwa: {
  //   name: 'Doudo',
  //   themeColor: '#4DBA87',
  //   msTileColor: '#000000',
  //   appleMobileWebAppCapable: 'yes',
  //   appleMobileWebAppStatusBarStyle: 'black',

  //   // configure the workbox plugin
  //   workboxPluginMode: 'InjectManifest',
  //   workboxOptions: {
  //     // swSrc is required in InjectManifest mode.
  //     swSrc: './src/sw.js'
  //     // ...other Workbox options...
  //   },
  //   iconPaths: {
  //     favicon32: 'img/icons/favicon-32x32.png',
  //     favicon16: 'img/icons/favicon-16x16.png',
  //     appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
  //     maskIcon: 'img/icons/safari-pinned-tab.svg',
  //     msTileImage: 'img/icons/msapplication-icon-144x144.png'
  //   },
  //   manifestOptions: {
  //     name: 'Doudo',
  //     short_name: 'Duodu',
  //     start_url: './index.html',
  //     display: 'standalone',
  //     theme_color: '#4DBA87'
  //   }
  // }
};
