const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.static(path.join(__dirname, './client')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'))
})
app.post('/upload_json', (req, res) => {
  console.log(req.body);
  res.end();
})

app.listen(port, () => { 
  console.log(`Now connected to port ${port} you lucky duck`)
})