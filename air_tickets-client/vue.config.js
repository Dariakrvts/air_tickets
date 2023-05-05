const path = require('@vue/cli-service');

module.exports = {
  outputDir: path.resolve(__dirname, 'dist'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";` // замените путь на свой
      }
    }
  }
};
