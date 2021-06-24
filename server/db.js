require('dotenv').config()

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: 'qa_db',
  password: process.env.DB_PASS,
  port: 5433,
});

const getQuestions = (id, cb) => {
  pool.query('SELECT * FROM questions WHERE product_id = $1;', [id], (err, res) => {
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
}