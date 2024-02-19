require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/https://www.linkedin.com/in/gulamyazdani4/', (req, res) => {
    res.send('Gulam Yazdani Welcomes You on LinkedIn!');
});

app.get('/https://twitter.com/iamyazdani_', (req, res) => {
    res.send('Gulam Yazdani Welcomes You on X!');
});

app.get('/login', (req, res) => {
    res.send('<h2>Follow me on LinekedIn and X</h2>');
});

app.listen(port, () => {
  console.log(`Demo app listening on port ${port}`);
});