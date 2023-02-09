const http = require('http');
const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');


const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static(process.cwd()+"/../che-beviamo/"));

app.get('/', (req,res) => {
  console.log('GET /');
  res.sendFile(path.resolve(__dirname+'/../che-beviamo/src/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});