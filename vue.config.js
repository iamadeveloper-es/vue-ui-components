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
  },
  chainWebpack: config => {
    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.output = {
        ...args[0].terserOptions.output,
        comments: false  // exclude all comments from output
      }
      return args
    })
  }
}
