const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'data'), to: path.resolve(__dirname, 'docs', 'data') },
        { from: path.resolve(__dirname, 'images'), to: path.resolve(__dirname, 'docs', 'images') }
      ]
    })
  ],
  devServer: {
    hot: true
  }
}
