import express from 'express';
let app = express();

import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev.js'

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/*',(req,res)=>{
  res.sendFile(path.join(__dirname,'./index.html'))
})

app.listen(3000 , ()=>console.log('running on localhost:3000'))