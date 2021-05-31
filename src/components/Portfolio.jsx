import PropTypes from "prop-types";

import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
import openInNewTab from "../common/common";
import "./Portfolio.css";

export default function Portfolio(props) {
  const { portfolio } = props;
  const portfolioContent = portfolio.map((work) => {
    const skillList = work.skills.map((skill) => (
      <Badge variant="info" key={skill}>
        {skill}
      </Badge>
    ));
    return (
      <Container key={work.title}>
        <Row className="work">
          <Col xs="12" md="6" className="work-img-container">
            <Image className="work-img" src={work.imgUrl} fluid />
            <div className="overlay">
              <Button
                variant="success"
                onClick={() => openInNewTab(work.websiteUrl)}
              >
                Visit Website
              </Button>
            </div>
          </Col>
          <Col xs="12" md="6" className="work-content">
            <h4 className="work-title">{work.title}</h4>
            <p className="work-description">{work.description}</p>
            {skillList}
          </Col>
        </Row>
      </Container>
    );
  });
  return (
    <div className="portfolio">
      <h2 className="section-title">Portfolio/Participated Projects</h2>
      <p className="section-description">
        The public projects are listed below
      </p>
      {portfolioContent}
    </div>
  );
}

Portfolio.propTypes = {
  portfolio: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      websiteUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};
