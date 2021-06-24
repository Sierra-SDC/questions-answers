const { Pool } = require('pg');

const pool = new Pool({
  user: 'tristan',
  host: 'localhost',
  database: 'qa_db',
  password: 'password',
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