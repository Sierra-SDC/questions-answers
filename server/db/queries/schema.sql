
DROP DATABASE IF EXISTS qa_db;

CREATE DATABASE qa_db;

CREATE TABLE IF NOT EXISTS public.questions
(
    id integer NOT NULL,
    product_id integer,
    body character varying(1000) NOT NULL,
    date_written character varying(100),
    asker_name character varying(50) NOT NULL,
    asker_email character varying(100) NOT NULL,
    reported integer,
    helpful integer,
    answers "char",
    PRIMARY KEY (id)
);

-- /copy questions (id, product_id, body, date_written, asker_name, asker_email, reported, helpful)
-- FROM './csv/questions.csv'
-- DELIMITER ',' CSV HEADER;

CREATE TABLE IF NOT EXISTS public.answers
(
    id integer NOT NULL,
    question_id integer,
    body character varying(1000) NOT NULL,
    date_written character varying(100),
    answerer_name character varying(50) NOT NULL,
    answerer_email character varying(100) NOT NULL,
    reported integer,
    helpful integer,
    PRIMARY KEY (id)
);

-- /copy answers (id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful)
-- FROM './csv/answers.csv'
-- DELIMITER ',' CSV HEADER;

CREATE TABLE IF NOT EXISTS public.photos
(
    id integer NOT NULL,
    answer_id integer,
    url character varying(500) NOT NULL,
    PRIMARY KEY (id)
);

-- /copy photos (id, answer_id, url)
-- FROM './csv/answers_photos.csv'
-- DELIMITER ',' CSV HEADER;

ALTER TABLE public.answers
    ADD FOREIGN KEY (question_id)
    REFERENCES public.questions (id)
    NOT VALID;


ALTER TABLE public.photos
    ADD FOREIGN KEY (answer_id)
    REFERENCES public.answers (id)
    NOT VALID;