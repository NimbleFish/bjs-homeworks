module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + '/dist',
    filename: "index.js"
  },
  devServer: {
    contentBase: __dirname + '/dist'
    // contentBase: 'dist'
  }
}
