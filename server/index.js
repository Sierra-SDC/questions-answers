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
app.get('/qa/questions/:product_id', async (req, res) => {
  db.getQuestions(req.params.product_id, (err, data) => {
      if (err){
        send(err)
      } else {
        res.send(data)
      }
      // db.getQuestionsAnswers(question.id, (err, answers) => {
      //   if (err) {
      //     console.error(err);
      //       res.status(500).send(err);
      //     } else {
      //       res.status(200).send({q:questions, a:answers});
      //     }
      // });
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
      res.status(200).send({
        question: req.params.question_id,
        // page: req.pararms.page,
        // count: req.params.count,
        results: data
      });
    }
  });
});

//Post question to database
// Body Parameters
// body	text	Text of question being asked
// name	text	Username for question asker
// email	text	Email address for question asker
// product_id	integer	Required ID of the Product for which the question is posted
app.post('/qa/questions', (req, res) => {
  console.log(req);
  db.postQuestion(req.body, (err, data) => {
    if (err) {
      console.error(err);
      res.status(501).send(err);
    } else {
      // Response Status: 200 OK
      res.status(201).send("CREATED");
    }
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});