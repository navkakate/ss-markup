module.exports = {
  entry: ["./src/js/app.js"],
  module: {
      loaders: [
          {
              test: /\.scss$/,
              loaders: ['style', 'css', 'sass']
          }
      ]
  },
  output: {
    filename: "bundle.js"
  },
  watch: true
}
