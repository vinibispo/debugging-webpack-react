module.exports = {
  mode: 'development',
  devServer: {
    static: './dist/js',
    historyApiFallback: true,
    host: '0.0.0.0',
  },
};
