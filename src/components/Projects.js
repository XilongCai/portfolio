import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import hospital from "../assets/img/image.jpg"
import estate from "../assets/img/20150622231001-for-sale-real-estate-home-house.jpeg"
import colorSharp2 from "../assets/img/color-sharp2.png";
import ellipsis from "../assets/img/burnout-work-from-home.jpg"
import cbt from "../assets/img/11-CBT-TECHNIQUES-FOR-EMPLOYEES--AT-WORK-L.png"
import beautygan from "../assets/img/WechatIMG95.jpg"
import rag from "../assets/img/WechatIMG98.jpg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const webProjects = [
    {
      title: "Hospital Registration System",
      description: `A full stack web application which allows different hospitals upload the informations and patients to retrieve information about each hospital like services, specialties, and ratings. Tech Stack: Spring Cloud, Mybatis, MongoDB, MySQL`,
      imgUrl: hospital,
    },
    {
      title: "Location-Based Real Estate Website",
      description: "A location-based real estate website, demonstrating proficiency in full-stack development, including property listing, management, agency profile creation and updates, as well as user registration and login/logout functionality. Tech Stack: Django, React, PostgresSQL, AWS",
      imgUrl: estate,
    },
    {
      title: "To be developed",
      description: "",
      imgUrl: ellipsis,
    }
  ];

  const mobileProjects = [
    {
      title: "CBT Buddy",
      description: "A full-stack Mobile App designed to improve mental health management through Cognitive Behavioral Therapy (CBT). The app includes key features such as mood tracking, journaling, relaxation and thought-challenging exercises. Tech Stack: React Native, Google Map API, Firebase",
      imgUrl: cbt,
    },
    {
      title: "To be developed",
      description: "",
      imgUrl: ellipsis,
    },
    {
      title: "To be developed",
      description: "",
      imgUrl: ellipsis,
    },
  ];

  const llmProjects = [
    {
      title: "Makeup transferring App based on BeautyGAN",
      description: "A Computer Vision project for facial makeup transfer using BeautyGAN model. The App allows users to upload a non-makeup image and a reference makeup image to generate a transformed image with the reference makeup applied.",
      imgUrl: beautygan,
    },
    {
      title: "Knowledge Graph RAG Adaptation in Large Language Models",
      description: "Created and integrated a comprehensive Knowledge Graph that captures knowledge and semantic relationships within specific domains into a Retrieval-Augmented Generation framework, enhancing LLM’s ability to generate contextually accurate and relevant responses.",
      imgUrl: rag,
    },
    {
      title: "To be developed",
      description: "",
      imgUrl: ellipsis,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web App</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mobile App</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">AI Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="align-items-end">
                        {
                          webProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          mobileProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          llmProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
