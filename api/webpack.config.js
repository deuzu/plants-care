const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  target: 'node',
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
    plugins: [
      new TsconfigPathsPlugin(),
    ],
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader', exclude: '/node_modules/' },
    ],
  },
  plugins: [
    new NodemonPlugin(),
  ],
}
