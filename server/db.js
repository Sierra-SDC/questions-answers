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
  pool.query(`SELECT * FROM questions WHERE product_id = ${id}`, (err, res) => {
    if (err) {
      console.error(err);
      cb(err);
    } else {
      const result = res.rows;
      cb(null, result);
    }
  });
};

// Retreive all answers from question_id in db
// Query Parameters
// Parameter	Type	Description
// page	integer	Selects the page of results to return. Default 1.
// count	integer	Specifies how many results per page to return. Default 5.
const getAnswers = (id, cb) => {
  pool.query(`SELECT * FROM answers WHERE question_id = ${id}`, (err, res) => {
    if (err) {
      console.error(err);
      cb(err);
    } else {
      const result = res.rows;
      cb(null, result);
    }
  });
};


module.exports = {
  getQuestions: getQuestions,
  getAnswers: getAnswers,
}