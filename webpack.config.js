module.exports = {
  entry: ["./src/js/app.js"],
  module: {
      loaders: [
          {
              test: /\.less$/,
              loaders: ['style', 'css', 'less']
          }
      ]
  },
  output: {
    filename: "bundle.js"
  },
  watch: true
}
