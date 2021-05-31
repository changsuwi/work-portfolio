import { Col, Container, Row } from "react-bootstrap";
import article1ImgUrl from "../img/articles/article-1.jpeg";
import article2ImgUrl from "../img/articles/article-2.jpeg";
import article3ImgUrl from "../img/articles/article-3.jpeg";

import Article from "./Article";

export default function About() {
  const articles = [
    {
      title: "CORS/CSRF/XSS 介紹與防禦方法",
      imgUrl: article1ImgUrl,
      articleUrl:
        "https://medium.com/%E7%A2%BC%E8%BE%B2%E8%83%8C%E5%8C%85%E5%AE%A2/cors-csrf-xss-%E4%BB%8B%E7%B4%B9%E8%88%87%E9%98%B2%E7%A6%A6%E6%96%B9%E6%B3%95-a1f5c55d96a1",
    },
    {
      title: "網頁渲染的流程",
      imgUrl: article2ImgUrl,
      articleUrl:
        "https://medium.com/%E7%A2%BC%E8%BE%B2%E8%83%8C%E5%8C%85%E5%AE%A2/%E7%B6%B2%E9%A0%81%E6%B8%B2%E6%9F%93%E7%9A%84%E6%B5%81%E7%A8%8B-5c0f1430d46e",
    },
    {
      title: "透過Github 觸發 Google cloud build 部屬至 App engine",
      imgUrl: article3ImgUrl,
      articleUrl:
        "https://medium.com/%E7%A2%BC%E8%BE%B2%E8%83%8C%E5%8C%85%E5%AE%A2/%E9%80%8F%E9%81%8Egithub-%E8%A7%B8%E7%99%BC-google-cloud-build-%E9%83%A8%E5%B1%AC%E8%87%B3-app-engine-ce525561d28c",
    },
  ];
  const articlesTemplate = articles.map((article) => (
    <Col xs={12} sm={4} key={article.articleUrl}>
      <Article article={article} />
    </Col>
  ));
  return (
    <div className="about">
      <Container>
        <h2 className="section-title">About Vicharm</h2>
        <p className="section-description">
          A passionate full stack web developer who cares about users&#39;
          needs, clean code and software quality.
        </p>

        <Row>{articlesTemplate}</Row>
      </Container>
    </div>
  );
}
