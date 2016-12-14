module.exports = {
  entry: './src/gorilla.js',
  target: 'node',
  output: {
    path: './dist',
    filename: 'gorilla.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  }
}
