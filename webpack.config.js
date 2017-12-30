const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:{
    base:'./src/index.js'
  },
  output:{
    path:path.resolve(__dirname,'./dist'),
    filename:'[name][hash:5].js'
  },
  module:{
    rules:[
      // 解析react
      {
        test:/\.js$/,
        exclude: /(node_modules|bower_components)/,
        use:{
          loader:'babel-loader',
        }
      }
    ]
  },
  devServer:{
    host:'127.0.0.1',
    port:3003
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html',
      hash:true
    })
  ]
};
