module.exports = {
  outputDir: 'dist/echarts',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('postcss-px2rem')({
          remUnit: 80
        })]
      }
    }
  }
}
