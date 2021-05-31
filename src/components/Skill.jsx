import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import vueLogo from "../img/skill/Vue.svg";
import reactLogo from "../img/skill/React.png";
import javaScriptLogo from "../img/skill/JavaScript.png";
import sassLogo from "../img/skill/Sass.png";
import nodeJSLogo from "../img/skill/NodeJS.png";
import goLogo from "../img/skill/Golang.png";
import jestLogo from "../img/skill/Jest.png";
import cypressLogo from "../img/skill/Cypress.png";
import "./Skill.css";

export default function Skill() {
  return (
    <div className="skill-section">
      <Container>
        <Row>
          <Col xs="12" md="12">
            <h4 className="skill-domain">Frontend Skill</h4>
            <Row className="skill-row">
              <Col className="skill-col">
                <Image src={javaScriptLogo} className="skill-icon" />
              </Col>
              <Col className="skill-col">
                <Image src={vueLogo} className="skill-icon" />
              </Col>
              <Col className="skill-col">
                <Image src={reactLogo} className="skill-icon" />
              </Col>
              <Col className="skill-col">
                <Image src={sassLogo} className="skill-icon" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="12" className="skill-row">
            <h4 className="skill-domain">Backend Skill</h4>
            <Row className="skill-row">
              <Col className="skill-col">
                <Image src={nodeJSLogo} className="skill-icon" />
              </Col>
              <Col className="skill-col">
                <Image src={goLogo} className="skill-icon" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="12" className="skill-row">
            <h4 className="skill-domain">Testing Skill</h4>
            <Row className="skill-row">
              <Col className="skill-col">
                <Image src={jestLogo} className="skill-icon" />
              </Col>
              <Col className="skill-col">
                <Image src={cypressLogo} className="skill-icon" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
