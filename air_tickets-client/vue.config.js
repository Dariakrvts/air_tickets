/* eslint-env node */
const path = require('path');

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
        additionalData: `@import "@/styles/main.scss";`
      }
    }
  }
};

