const { Pool } = require('pg');

const pool = new Pool({
  user: 'posgres',
  host: 'localhost',
  database: 'qa_db',
  password: 'postgres',
  port: 5432,
});

console.log('Successful connection to the database');