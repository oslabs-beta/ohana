const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  // resolve: { extensions: ["*", ".js", ".jsx"] },
  devServer: {
    publicPath: '/build/',
    port: 8080,
    proxy: {
      // '/api/leaders': 'http://localhost:3000',
  }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};