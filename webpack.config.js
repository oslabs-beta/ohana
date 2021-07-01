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
        test: /.(js|jsx)$/,
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
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // resolve: { extensions: ["*", ".js", ".jsx"] },
  devServer: {
    host: '0.0.0.0',
    publicPath: '/build/',
    port: 3535,
    proxy: {
      '/user': 'http://localhost:3000',
      '/admin': 'http://localhost:3000',
      '/clusters': 'http://localhost:3000',
      '/spaces': 'http://localhost:3000',
      '/vcluster': 'http://localhost:3000',
      '/cookies': 'http://localhost:3000',
      '/teams': 'http://localhost:3000',
      '/home': 'http://localhost:3000',
      '/team': 'http://localhost:3000',
      '/users': 'http://localhost:3000',
      '/deploy': 'http://localhost:3000',
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

// /\.(js|jsx)$/