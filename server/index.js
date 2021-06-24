const express = require('express');
const db = require('./db');
const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/qa/questions/:product_id', (req, res) => {
  db.getQuestions(req.params.product_id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});