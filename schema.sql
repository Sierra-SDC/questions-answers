
DROP DATABASE IF EXISTS qa_db;

CREATE DATABASE qa_db;

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  product_id INT,
  body VARCHAR(1000) NOT NULL,
  date_written VARCHAR(100),
  asker_name VARCHAR(50) NOT NULL,
  asker_email VARCHAR(100) NOT NULL,
  reported INT DEFAULT 0,
  helpful INT DEFAULT 0
);

-- /copy questions (id, product_id, body, date_written, asker_name, asker_email, reported, helpful)
-- FROM './csv/questions.csv'
-- DELIMITER ',' CSV HEADER;

CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  question_id INT,
  body VARCHAR(1000) NOT NULL,
  date_written VARCHAR(100),
  answerer_name VARCHAR(50) NOT NULL,
  answerer_email VARCHAR(100) NOT NULL,
  reported INT DEFAULT 0,
  helpful INT DEFAULT 0,
);

-- /copy answers (id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful)
-- FROM './csv/answers.csv'
-- DELIMITER ',' CSV HEADER;

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  answer_id INT,
  url VARCHAR(500) NOT NULL,
);

-- /copy photos (id, answer_id, url)
-- FROM './csv/answers_photos.csv'
-- DELIMITER ',' CSV HEADER;

