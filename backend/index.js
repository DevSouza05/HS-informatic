"use strict"

const express = require('express');
const app = express();

app.use(express.json());


const port = process.env.port || 5000;

app.get('/Home', (req,res)=>{
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })