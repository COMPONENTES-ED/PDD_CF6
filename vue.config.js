const titulo =
  'Sistematización y documentación de datos masivos mediante métodos de analítica'

module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/css/_variables.sass"`,
      },
    },
  },
  chainWebpack: config => {
    // Mantener la configuración existente del título
    config.plugin('html').tap(args => {
      args[0].title = titulo
      return args
    })
  },
}
