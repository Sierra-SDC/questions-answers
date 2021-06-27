require('dotenv').config()

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: 'qa_db',
  password: process.env.DB_PASS,
  port: 5433,
});

//Retrive all questions from product_id in db
const getQuestions = (id, cb) => {
let questionsQuery = `SELECT
questions.id AS "question_id",
questions.body AS "question_body",
questions.date_written AS "question_date",
questions.asker_name,
questions.helpful AS "question_helpfulness",
questions.reported,
(
  SELECT jsonb_agg(jsonb_build_object(
    'id', answers.id,
    'body', answers.body,
    'date', answers.date_written,
    'answerer_name', answerer_name,
    'helpfulness', answers.helpful,
    'photos', (
      SELECT jsonb_agg(jsonb_build_object(
        'id', photos.id,
        'url', photos.url
        ))
      FROM photos
      WHERE answers.id = photos.answer_id
    )
  ))
  FROM answers
  WHERE questions.id = answers.question_id
) AS "answers"


FROM questions
WHERE questions.product_id = $1 AND questions.reported = 0;`

    pool.query(questionsQuery, [id] ,(err, res) => {
    if (err) {
      console.error(err);
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};


const getAnswers = ({id, page, count}, cb) => {
  let answersQuery = `
      SELECT
        answers.id AS "answer_id",
        answers.body AS "body",
        answers.date_written AS "date",
        answerer_name AS "asnwerer_name",
        answers.helpful AS "helpfulness",
        (
            SELECT jsonb_agg(jsonb_build_object(
            'id', photos.id,
            'url', photos.url
            )) AS "photos"
        FROM photos
        WHERE answers.id = photos.answer_id
      )

    FROM answers
    WHERE $1 = answers.question_id
    LIMIT $2
    ;`
  pool.query(answersQuery, [id, count], (err, res) => {
    if (err) {
      console.error(err);
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

// Retreive all answers from question_id in db
// Query Parameters
// Parameter	Type	Description
// page	integer	Selects the page of results to return. Default 1.
// count	integer	Specifies how many results per page to return. Default 5.
const postQuestion = (body, cb) => {
  let postQuestionQuery = `INSERT INTO questions (product_id,body, asker_name, asker_email) VALUES ($1, $2, $3, $4)`
  pool.query(postQuestionQuery, [body.product_id, body.body, body.name, body.email], (err, res) => {
    if (err) {
      console.error(err);
      cb(err);
    } else {
      cb(null);
    }
  });
};

/* Post Answer Query */
const postAnswer = (body, cb) => {
  console.log(body);
  let postAnswerQuery = ``
  pool.query(postAnswerQuery, [], (err, res) => {
    if (err) {
      console.error(err);
      cb(err);
    } else {
      cb(null);
    }
  });
};

/* Mark Question as Helpful */
const putQuestionHelpful = (body, cb) => {
  console.log(body);
  let putQuestionHelpfulQuery = ``
  pool.query(putQuestionHelpfulQuery, [], (err, res) => {
    if (err) {
      console.error(err);
      cb(err);
    } else {
      cb(null);
    }
  });
};

/*Report Question */
const putQuestionReport = (body, cb) => {
  console.log(body);
  let putQuestionReportQuery = ``
  pool.query(postQuestionQuery, [], (err, res) => {
    if (err) {
      console.error(err);
      cb(err);
    } else {
      cb(null);
    }
  });
};

/*Helpful Answer */
const putAnswerhelpful = (body, cb) => {
  console.log(body);
  let putAnswerhelpfulQuery = ``
  pool.query(putAnswerhelpfulQuery, [], (err, res) => {
    if (err) {
      console.error(err);
      cb(err);
    } else {
      cb(null);
    }
  });
};

/*Report Answer */
const putAnswerReport = (body, cb) => {
  console.log(body);
  let putAnswerReportQuery = ``
  pool.query(putAnswerReportQuery, [], (err, res) => {
    if (err) {
      console.error(err);
      cb(err);
    } else {
      cb(null);
    }
  });
};





module.exports = {
  getQuestions: getQuestions,
  getAnswers: getAnswers,
  postQuestion: postQuestion,
  postAnswer: postAnswer,
  putQuestionHelpful: putQuestionHelpful,
  putQuestionReport: putQuestionReport,
  putAnswerhelpful: putAnswerhelpful,
  putAnswerReport: putAnswerReport
}