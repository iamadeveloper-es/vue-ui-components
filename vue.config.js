module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/static/scss/main.scss";
          `,
      },
    },
  }
}
