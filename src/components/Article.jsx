import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import openInNewTab from "../common/common";
import "./Article.css";

export default function Article(props) {
  const { article } = props;
  const { articleUrl, imgUrl, title } = article;
  return (
    <Card
      className="article"
      border="light"
      onClick={() => openInNewTab(articleUrl)}
    >
      <div className="image-container">
        <Card.Img variant="top" src={imgUrl} />
        <div className="overlay">
          <Button variant="success">Visit Medium</Button>
        </div>
      </div>
      <Card.Body>
        <Card.Title className="article-title ellipsis-2">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    articleUrl: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
