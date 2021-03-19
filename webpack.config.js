const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve('./src/app.js'),
  plugins: [
      new HtmlWebpackPlugin({  // Also generate a test.html
          filename: './index.html',
          template: './src/index.html'
        }) 
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}