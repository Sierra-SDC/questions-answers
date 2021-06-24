const express = require('express');
const db = require('./db');
const app = express();

const PORT = 3000;

app.use(express.json());

//Retrive all questions from product_id in db
/* PARAMETERS
product_id	integer	Specifies the product for which to retrieve questions.
page	integer	Selects the page of results to return. Default 1.
count	integer	Specifies how many results per page to return. Default 5.
*/
app.get('/qa/questions/:product_id', (req, res) => {
  db.getQuestions(req.params.product_id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      // Response Status: 200 OK
      res.status(200).send(data);
    }
  });
});

//Retrive all answers from question_id in db
// Parameter	Type	Description
// question_id	integer	Required ID of the question for wich answers are needed
app.get('/qa/questions/:question_id/answers', (req, res) => {
  db.getAnswers(req.params.question_id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      // Response Status: 200 OK
      res.status(200).send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});