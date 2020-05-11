module.exports = {
    css: {
      loaderOptions: {
        //   setting global scss
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