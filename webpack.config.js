const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const excludeFolders = ['/node_modules/'];

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: excludeFolders,
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: excludeFolders,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: './src/robots.txt', to: 'robots.txt' }],
    }),
    new ESLintPlugin({
      files: '{**/*,*}.{tsx,ts,js}',
    }),
    new StylelintPlugin({
      files: '**/*.css',
    }),
  ],
  devServer: {
    open: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
};
