module.exports = {
  mode: 'development',
  entry: {
    carousel: './src/Carousel.js',
    example: './example/index.js',
  },
  module: {
    rules: [
      {
        test: /|.js$/,
        loader: require.resolve('babel-loader'),
      },
    ],
  },
}
