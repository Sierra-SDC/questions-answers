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

Initial Postgres query

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

