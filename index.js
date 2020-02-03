const express = require('express');
app = express();

app.get('', (req, res) => {
  res.send('done');
});

app.get('/greeting', (req, res) => {
  res.send('Hi User');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port 5000`);
});
