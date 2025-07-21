const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!122jjdhweh32');
});
app.get('/blog', (req, res) => {
  res.send('i am blog');
});app.get('/contact_us', (req, res) => {
  res.send('this is my contact');
});app.get('/about us', (req, res) => {
  res.send('we are it');
});

app.listen(port, () => {
  console.log(`\n✅ Example app listening on: http://localhost:${port}\n`);
});
