import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import aws from "../assets/img/aws.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Work = () => {

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Work Experience</h2>
                <p></p>
                <div style={{display: 'flex'}}>
                <div style={{flex: 0.5}}></div>
                  <div style={{flex: 1, margin: '10px'}}>
                    <img src={aws}/>
                  </div>
                  <div style={{flex: 0.5}}></div>
                  <div style={{flex: 2, margin: '10px'}}>
                    <h3>Amazon Web Services</h3>
                    <i>SDE Intern, RDS Aurora, 2023/05 - 2023/08</i>
                    <ul>
                      <li>Played a key role in major and minor database upgrades, collaborating with cross-functional teams to ensure smooth transitions and improved performance, avoiding nearly 50% downtime of database operations.</li>
                      <li>Successfully mitigated vulnerability risks by implementing robust security measures for OS images of Aurora MySQL and Aurora Postgres provisioned databases.</li>
                      <li>Developed Ruby scripts to automate the process of creating and patching minor OS upgrades by interacting with multiple AWS services such as S3 and EC2, which impacts more than 1 million customers, reducing manual effort and increasing efficiency. Compressed 91.67% of the time.</li>
                    </ul>
                  </div>
                  <div style={{flex: 0.5}}></div>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
