const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  console.log(`Name: ${name}, Email: ${email}`);
  res.render('success', { name, email });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
