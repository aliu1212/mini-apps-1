const express = require('express');
const parser = require('body-parser');
const app = express();
const path = require('path');

const port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './client')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'))
})
app.post('/upload_json', (req, res) => {
  console.log('BODY', req.body);
  res.end();
})

app.listen(port, () => { 
  console.log(`Now connected to port ${port} you lucky duck`)
})