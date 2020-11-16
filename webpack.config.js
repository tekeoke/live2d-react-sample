var path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "public/index.html"
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
    inline: true,
    hot: true,
    open: true,
    port: 3000,
    compress: true,
    writeToDisk: true
  },
  devtool: 'inline-source-map'
}
