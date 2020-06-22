const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const SRC = path.resolve(__dirname, './src');
const DEST = path.resolve(__dirname, './dest');

module.exports = {
  context: SRC,
  mode: 'production',
  entry: {
    main: './index.tsx'
  },
  output: {
    path: DEST,
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    modules: [
      SRC,
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff(2)?)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './fonts/'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin((DEST), {
      root: process.cwd()
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: '../public/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash()
  ]
}
