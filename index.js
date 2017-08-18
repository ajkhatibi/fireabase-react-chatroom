const express = require('express');
const app = express();

if(!process.env.PRODUCTION){
  const webpack = require('webpack');
  const webpackDevServer = require('webpack-dev-server');
  const config = require('./webpack.config.js');

  new webpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: true,
    historyApiFallback: true
  }).listen(8080, (error, result) => {
    if(error){
      console.log('This was an error' + error)
    } else {
      console.log('This server is working properly.');
    }
  });
}
