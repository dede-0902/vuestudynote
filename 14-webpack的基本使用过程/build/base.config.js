const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry:'./src/js/main.js',
  output:{
    path:path.resolve(__dirname,'../dist'),
    filename:'bundle.js',
  },
  module: {
    rules:[
      {
        test: /.vue$/,
        loader: 'vue-loader'
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[hash8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  resolve: {
    extensions:['.js','.vue','.css'],
    // alias:别名
    alias: {
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归dede所有'),
    new HtmlWebpackPlugin({
      template:'index.html'
    }),
  ]
}