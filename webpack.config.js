const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const excludeFolders = ['/node_modules/']

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: excludeFolders
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: excludeFolders
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/robots.txt', to: 'robots.txt' } 
      ]
    })
  ],
  devServer: {
    open: true
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  }
}