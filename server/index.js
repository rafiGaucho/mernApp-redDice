import express from 'express';
let app = express();

import path from 'path';

app.get('/*',(req,res)=>{
  res.sendFile(path.join(__dirname,'./index.html'))
})

app.listen(3000 , ()=>console.log('running on localhost:3000'))
