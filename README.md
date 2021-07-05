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
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Tests</a></li>
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



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Tristan Lerisse - tristanlerisse@gmail.com

Project Link: [https://github.com/Sierra-SDC/questions-answers](https://github.com/Sierra-SDC/questions-answers)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com)





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

