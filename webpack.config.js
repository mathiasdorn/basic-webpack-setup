var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    css: "./styles/app.scss",
    js:  "./js/app.js"                  
  },
  output: {
    path: __dirname,
    filename: "[name].min.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: "style!css!sass!"
      }
    ]
  }
}

//plugins: debug ? [] : [
//  new webpack.optimize.DedupePlugin(),
//  new webpack.optimize.OccurenceOrderPlugin(),
//  new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
//]