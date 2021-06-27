const express = require('express');
const db = require('./db/db.js');
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
    if (err) {
    console.error(err);
    res.status(500).send(err);
  } else {
    res.status(200).send({
      "product_id": req.params.product_id,
      "results": data,
    });
  }
  });
});

//Retrive all answers from question_id in db
// Parameter	Type	Description
// question_id	integer	Required ID of the question for wich answers are needed
app.get('/qa/questions/:question_id/answers', (req, res) => {
  req.params.page = req.params.page|| 0;
  req.params.count = req.params.count|| 5;
  db.getAnswers({id: req.params.question_id, page: req.params.page, count: req.params.count}, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      // Response Status: 200 OK
      res.status(200).send({
        "product_id": req.params.question_id,
        "page": req.params.page,
        "count": req.params.count,
        "results": data,
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


/*Post Answer
Adds an answer for the given question

POST /qa/questions/:question_id/answers

Parameters
Parameter	Type	Description
question_id	integer	Required ID of the question to post the answer for

Response
Status: 201 CREATED
*/

app.post(`/qa/questions/:question_id/answers`, (req, res) => {
  db.postAnswer(req, (err, data) => {
    if (err) {
      console.error(err);
      res.status(501).send(err);
    } else {
      // Response Status: 200 OK
      res.status(201).send("CREATED");
    }
  });
});

////////////////////////

/*Mark Question as Helpful
Updates a question to show it was found helpful.

PUT /qa/questions/:question_id/helpful

Parameters

Parameter	Type	Description
question_id	integer	Required ID of the question to update
Response

Status: 204 NO CONTENT
*/

app.put(`/qa/questions/:question_id/helpful`, (req, res) => {
  db.putQuestionHelpful(req.body, (err, data) => {
    if (err) {
      console.error(err);
      res.status(501).send(err);
    } else {
      // Response Status: 200 OK
      res.status(204).send("NO CONTENT");
    }
  });
});

/*Report Question
Updates a question to show it was reported. Note, this action does not delete the question, but the question will not be returned in the above GET request.

PUT /qa/questions/:question_id/report

Parameters

Parameter	Type	Description
question_id	integer	Required ID of the question to update
Response

Status: 204 NO CONTENT
*/

app.put(`/qa/questions/:question_id/report`, (req, res) => {
  db.putQuestionReport(req.body, (err, data) => {
    if (err) {
      console.error(err);
      res.status(501).send(err);
    } else {
      // Response Status: 200 OK
      res.status(204).send("NO CONTENT");
    }
  });
});

/*Mark Answer as Helpful
Updates an answer to show it was found helpful.

PUT /qa/answers/:answer_id/helpful

Parameters

Parameter	Type	Description
answer_id	integer	Required ID of the answer to update
Response

Status: 204 NO CONTENT
*/
app.put(`/qa/answers/:answer_id/helpful`, (req, res) => {
  db.putAnswerhelpful(req.body, (err, data) => {
    if (err) {
      console.error(err);
      res.status(501).send(err);
    } else {
      // Response Status: 200 OK
      res.status(204).send("NO CONTENT");
    }
  });
});

/*Report Answer
Updates an answer to show it has been reported. Note, this action does not delete the answer, but the answer will not be returned in the above GET request.

PUT /qa/answers/:answer_id/report

Parameters

Parameter	Type	Description
answer_id	integer	Required ID of the answer to update
Response

Status: 204 NO CONTENT
*/

app.put(`/qa/answers/:answer_id/report`, (req, res) => {
  db.putAnswerReport(req.body, (err, data) => {
    if (err) {
      console.error(err);
      res.status(501).send(err);
    } else {
      // Response Status: 200 OK
      res.status(204).send("NO CONTENT");
    }
  });
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});