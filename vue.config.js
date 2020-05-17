module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:8080',
          ws: true,
          changeOrigin: true
        },
      }
    },
    css: {
      loaderOptions: {
        // setting global scss
        sass: {
            prependData: `
                @import "~@/assets/scss/colors.scss";
                @import "~@/assets/scss/fonts.scss";
                @import "~@/assets/scss/mixins.scss";
            `
        },
      }
    }
  };