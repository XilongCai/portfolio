import java from "../assets/img/icons8-java-logo-240.png";
import js from "../assets/img/icons8-javascript-240.png";
import ts from "../assets/img/icons8-typescript-240.png";
import python from "../assets/img/Python-logo-notext.png";
import cpp from "../assets/img/icons8-c++-240.png";
import ruby from "../assets/img/icons8-ruby-programming-language-240.png";
import vue from "../assets/img/icons8-vue-js-240.png";
import react from "../assets/img/icons8-react-200.png";
import springboot from "../assets/img/icons8-spring-boot-240.png";
import django from "../assets/img/icons8-django-256.png";
import flask from "../assets/img/icons8-flask-256.png";
import git from "../assets/img/icons8-git-logo-240.png";
import nodejs from "../assets/img/icons8-nodejs-240.png";
import linux from "../assets/img/icons8-linux-96.png";
import docker from "../assets/img/icons8-docker-logo-240.png";
import k8s from "../assets/img/icons8-kubernetes-240.png";
import aws from "../assets/img/icons8-aws-logo-240.png";
import mysql from  "../assets/img/icons8-mysql-logo-240.png";
import mongodb from "../assets/img/icons8-mongo-db-96.png";
import redis from "../assets/img/icons8-redis-logo-240.png";
import postgres from "../assets/img/icons8-postgresql-240.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={java} alt="Java" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={springboot} alt="Spring Boot" />
                                <h5>Spring Boot</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Python" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={django} alt="Django" />
                                <h5>Django</h5>
                            </div>
                            <div className="item">
                                <img src={flask} alt="Flask" />
                                <h5>Flask</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Javascript" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="Nodejs" />
                                <h5>Nodejs</h5>
                            </div>
                            <div className="item">
                                <img src={vue} alt="Vue Js" />
                                <h5>Vue Js</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="React" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={ts} alt="Typescript" />
                                <h5>Typescript</h5>
                            </div>
                            <div className="item">
                                <img src={cpp} alt="C++" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={ruby} alt="Ruby" />
                                <h5>Ruby</h5>
                            </div>
                            
                            
                            <div className="item">
                                <img src={git} alt="Git" />
                                <h5>Git</h5>
                            </div>
                            
                            <div className="item">
                                <img src={linux} alt="Linux" />
                                <h5>Linux</h5>
                            </div>
                            <div className="item">
                                <img src={docker} alt="Docker" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={k8s} alt="Kubernetes" />
                                <h5>Kubernetes</h5>
                            </div>
                            <div className="item">
                                <img src={aws} alt="AWS" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="MySQL" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="MongoDB" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={redis} alt="Redis" />
                                <h5>Redis</h5>
                            </div>
                            <div className="item">
                                <img src={postgres} alt="Postgres" />
                                <h5>Postgres</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
