module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/scss/core/variables";`
      }
    }
  }
};
