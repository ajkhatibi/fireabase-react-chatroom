const express = require('express');
const app = express();

if(!process.env.PRODUCTION){
  const webpack = require('webpack');
  const webpackDevServer = require('webpack-dev-server');
  const config = require('./webpack.config.js');

  new webpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: false,
    historyApiFallback: true
  }).listen(8080, 'localhost', (error, result) => {
      if(error){
        console.log('An error has occured: '+error);
      } else {
        console.log('This server is working properly.');
      }
  });
}
