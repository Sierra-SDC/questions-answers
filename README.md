<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="/Screenshots/Web App Reference Architecture Transparant Black.png" alt="Logo">

  <h3 align="center">AWS SDC Microservices Project</h3>

  <p align="center">
    Implementing a back-end infrastructure for client e-commerce react app.
    <br />
    <br />
    <br />
    <a href="https://www.linkedin.com/in/tristanlerisse/">Please reqest to view a demo</a>
    ·
    <a href="https://github.com/Sierra-SDC/questions-answers/issues">Report Bug</a>
    ·
    <a href="https://github.com/Sierra-SDC/questions-answers/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#docker">Docker</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Plan and implement an AWS architecture to serve ~10 Million products to the client React app. Goal was to be able to handle ~10,000 requests per second.

### Built With

* [AWS](https://aws.amazon.com/)
* [Express](https://expressjs.com/)
* [Nginx](https://www.nginx.com/)
* [Redis](https://redis.io/)
* [Postgres](https://www.postgresql.org/)



<!-- GETTING STARTED -->
## Getting Started

Atelier Questions and Answers API
List Questions
GET /qa/questions Retrieves a list of questions for a particular product. This list does not include any reported questions.

Parameters

Parameter	Type	Description
product_id	integer	Specifies the product for which to retrieve questions.
page	integer	Selects the page of results to return. Default 1.
count	integer	Specifies how many results per page to return. Default 5.
Response

Status: 200 OK

{
  "product_id": "5",
  "results": [{
        "question_id": 37,
        "question_body": "Why is this product cheaper here than other sites?",
        "question_date": "2018-10-18T00:00:00.000Z",
        "asker_name": "williamsmith",
        "question_helpfulness": 4,
        "reported": false,
        "answers": {
          68: {
            "id": 68,
            "body": "We are selling it here without any markup from the middleman!",
            "date": "2018-08-18T00:00:00.000Z",
            "answerer_name": "Seller",
            "helpfulness": 4,
            "photos": []
            // ...
          }
        }
      },
      {
        "question_id": 38,
        "question_body": "How long does it last?",
        "question_date": "2019-06-28T00:00:00.000Z",
        "asker_name": "funnygirl",
        "question_helpfulness": 2,
        "reported": false,
        "answers": {
          70: {
            "id": 70,
            "body": "Some of the seams started splitting the first time I wore it!",
            "date": "2019-11-28T00:00:00.000Z",
            "answerer_name": "sillyguy",
            "helpfulness": 6,
            "photos": [],
          },
          78: {
            "id": 78,
            "body": "9 lives",
            "date": "2019-11-12T00:00:00.000Z",
            "answerer_name": "iluvdogz",
            "helpfulness": 31,
            "photos": [],
          }
        }
      },
      // ...
  ]
}
Answers List
Returns answers for a given question. This list does not include any reported answers.

GET /qa/questions/:question_id/answers

Parameters

Parameter	Type	Description
question_id	integer	Required ID of the question for wich answers are needed
Query Parameters

Parameter	Type	Description
page	integer	Selects the page of results to return. Default 1.
count	integer	Specifies how many results per page to return. Default 5.
Response

Status: 200 OK

{
  "question": "1",
  "page": 0,
  "count": 5,
  "results": [
    {
      "answer_id": 8,
      "body": "What a great question!",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 8,
      "photos": [],
    },
    {
      "answer_id": 5,
      "body": "Something pretty durable but I can't be sure",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 5,
      "photos": [{
          "id": 1,
          "url": "urlplaceholder/answer_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/answer_5_photo_number_2.jpg"
        },
        // ...
      ]
    },
    // ...
  ]
}
Add a Question
Adds a question for the given product

POST /qa/questions

Body Parameters

Parameter	Type	Description
body	text	Text of question being asked
name	text	Username for question asker
email	text	Email address for question asker
product_id	integer	Required ID of the Product for which the question is posted
Response

Status: 201 CREATED

Add an Answer
Adds an answer for the given question

POST /qa/questions/:question_id/answers

Parameters

Parameter	Type	Description
question_id	integer	Required ID of the question to post the answer for
Body Parameters

Parameter	Type	Description
body	text	Text of question being asked
name	text	Username for question asker
email	text	Email address for question asker
photos	[text]	An array of urls corresponding to images to display
Response

Status: 201 CREATED

Mark Question as Helpful
Updates a question to show it was found helpful.

PUT /qa/questions/:question_id/helpful

Parameters

Parameter	Type	Description
question_id	integer	Required ID of the question to update
Response

Status: 204 NO CONTENT

Report Question
Updates a question to show it was reported. Note, this action does not delete the question, but the question will not be returned in the above GET request.

PUT /qa/questions/:question_id/report

Parameters

Parameter	Type	Description
question_id	integer	Required ID of the question to update
Response

Status: 204 NO CONTENT

Mark Answer as Helpful
Updates an answer to show it was found helpful.

PUT /qa/answers/:answer_id/helpful

Parameters

Parameter	Type	Description
answer_id	integer	Required ID of the answer to update
Response

Status: 204 NO CONTENT

Report Answer
Updates an answer to show it has been reported. Note, this action does not delete the answer, but the answer will not be returned in the above GET request.

PUT /qa/answers/:answer_id/report

Parameters

Parameter	Type	Description
answer_id	integer	Required ID of the answer to update
Response

Status: 204 NO CONTENT

### Docker

Dockerfile can be found within the repo.
* docker run
  ```sh
  sudo docker run -it -d -p 80:3000 --name api-server docker-api-server:latest
  ```

### Manual Server API Installation (AWS EC2 T2 Micro)

1. Clone the repo
   ```sh
   git clone https://github.com/Sierra-SDC/questions-answers
   ```
2. Install NPM packages
   ```sh
   npm install
   ```



<!-- USAGE EXAMPLES -->
## Usage

Here is a copy of the react front-end proejct.
https://github.com/lerisse/project-catwalk


<!-- Tests -->
## Tests

Initial Postgres query: /qa/questions/:product_id
```sh
Seq Scan on questions  (cost=0.00..8169534.57 rows=9 width=116) (actual time=735.729..3163.416 rows=4 loops=1)
  Filter: ((product_id = 11008) AND (reported = 0))
  Rows Removed by Filter: 3518963
  SubPlan 2
    ->  Aggregate  (cost=894934.45..894934.46 rows=1 width=32) (actual time=686.701..686.701 rows=1 loops=4)
          ->  Seq Scan on answers  (cost=0.00..207166.85 rows=10 width=80) (actual time=166.982..424.105 rows=2 loops=4)
                Filter: (questions.id = question_id)
                Rows Removed by Filter: 6879304
          SubPlan 1
            ->  Aggregate  (cost=68776.75..68776.76 rows=1 width=32) (actual time=131.268..131.268 rows=1 loops=8)
                  ->  Seq Scan on photos  (cost=0.00..68776.74 rows=1 width=132) (actual time=81.244..131.254 rows=0 loops=8)
                        Filter: (answers.id = answer_id)
                        Rows Removed by Filter: 2063759
Planning Time: 0.294 ms
JIT:
  Functions: 18
  Options: Inlining true, Optimization true, Expressions true, Deforming true
  Timing: Generation 1.239 ms, Inlining 48.318 ms, Optimization 71.709 ms, Emission 45.062 ms, Total 166.328 ms
Execution Time: 3199.905 ms
```

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Tristan Lerisse - tristanlerisse@gmail.com

Project Link: [https://github.com/Sierra-SDC/questions-answers](https://github.com/Sierra-SDC/questions-answers)







<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/Sierra-SDC/questions-answers/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/tristanlerisse

