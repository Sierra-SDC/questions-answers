SELECT 
questions.id AS question_id,
questions.body AS question_body, 
questions.date_written AS question_date, 
questions.asker_name, 
questions.helpful AS question_helpfulness,
questions.reported,

answers.body, 
answers.date_written AS date, 
answerer_name, 
answers.helpful AS helpfulness,

photos.id AS id,
photos.url AS url

FROM questions 
LEFT JOIN answers ON (questions.id = answers.question_id) 
LEFT JOIN photos ON (answers.id = photos.answer_id) 

WHERE questions.product_id = 11001

	
