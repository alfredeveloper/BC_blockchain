const express = require('express');
const app = express();

app.get('/blockchain', (req, res)=>{
  res.send('Hello world')
})

app.post('/transaction', (req, res)=>{

})

app.get('/mine', (req, res)=>{

})

app.listen(3000, ()=>{
  console.log('corriendo un servidor en puerto 3000')
})
