const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = require('./server/router.js')

const app = express();
const port = 3000;
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './client')))
app.use('/', router);

app.listen(port, () => {
  console.log('now listening on port: ', port)
});