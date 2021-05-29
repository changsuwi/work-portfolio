import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import article1ImgUrl from './img/articles/article-1.jpeg'
import article2ImgUrl from './img/articles/article-2.jpeg'
import article3ImgUrl from './img/articles/article-3.jpeg'
import carousel1ImgUrl from './img/carousel/Carousel-1.jpeg'
import carousel2ImgUrl from './img/carousel/Carousel-2.png'
import linetvlImgUrl from './img/line-travel.png'
import vueLogo from './img/skill/Vue.svg'
import reactLogo from './img/skill/React.png'
import javaScriptLogo from './img/skill/JavaScript.png'
import sassLogo from './img/skill/Sass.png'
import nodeJSLogo from './img/skill/NodeJS.png'
import goLogo from './img/skill/Golang.png'
import jestLogo from './img/skill/Jest.png'
import cypressLogo from './img/skill/Cypress.png'
import protostarImgUrl from './img/protostar.png'
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function TopCarousel(props) {
  return (
    <Carousel fade interval="2000">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel1ImgUrl}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Looking for web developer ?</h3>
          <p>Check out my profile!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel2ImgUrl}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Have Full Stack Development Experience</h3>
          <p>Familiar in Vue.js, Node.js and Golang. Have React.js experience</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}
function openInNewTab(url) {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

function Article(props) {
  return (
    <Card className="article" border="light" onClick={() => openInNewTab(props.article.articleUrl)}>
      <div className="image-container">
        <Card.Img variant="top" src={props.article.imgUrl} />
        <div className="overlay">
          <Button variant="success">Visit Medium</Button>
        </div>
      </div>
      <Card.Body>
        <Card.Title className="article-title ellipsis-2">{props.article.title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

function About(props) {
  const articles = [{
    title: 'CORS/CSRF/XSS 介紹與防禦方法',
    imgUrl: article1ImgUrl,
    articleUrl: 'https://medium.com/%E7%A2%BC%E8%BE%B2%E8%83%8C%E5%8C%85%E5%AE%A2/cors-csrf-xss-%E4%BB%8B%E7%B4%B9%E8%88%87%E9%98%B2%E7%A6%A6%E6%96%B9%E6%B3%95-a1f5c55d96a1'
  },{
    title: '網頁渲染的流程',
    imgUrl: article2ImgUrl,
    articleUrl: 'https://medium.com/%E7%A2%BC%E8%BE%B2%E8%83%8C%E5%8C%85%E5%AE%A2/%E7%B6%B2%E9%A0%81%E6%B8%B2%E6%9F%93%E7%9A%84%E6%B5%81%E7%A8%8B-5c0f1430d46e'
  },{
    title: '透過Github 觸發 Google cloud build 部屬至 App engine',
    imgUrl: article3ImgUrl,
    articleUrl: 'https://medium.com/%E7%A2%BC%E8%BE%B2%E8%83%8C%E5%8C%85%E5%AE%A2/%E9%80%8F%E9%81%8Egithub-%E8%A7%B8%E7%99%BC-google-cloud-build-%E9%83%A8%E5%B1%AC%E8%87%B3-app-engine-ce525561d28c'
  }]
  const articlesTemplate = articles.map(article => (
    <Col xs={12} sm={4}>
      <Article article={article}/>
    </Col>
  ))
  return (
    <div className="about"> 
      <Container>
        <h2 className="section-title">About Vicharm</h2>
        <p className="about-description"> A passionate full stack web developer who cares about users' needs, clean code and software quality.</p>
  
        <Row>{articlesTemplate}</Row>
      </Container>
    </div>
  )
}

function Skill(props) {
  return (
    <div className="skill-section">
      <Container>
        <Row>
          <Col xs="12" md="12">
            <h4 className="skill-domain">Frontend Skill</h4>
            <Row className="skill-row">
              <Col className="skill-col">
                <Image src={javaScriptLogo} className="skill-icon"/>
              </Col>
              <Col className="skill-col">
                <Image src={vueLogo} className="skill-icon"/>
              </Col>
              <Col className="skill-col">
                <Image src={reactLogo} className="skill-icon"/>
              </Col>
              <Col className="skill-col">
                <Image src={sassLogo} className="skill-icon"/>
              </Col>
            </Row>
          </Col>  
        </Row>
        <Row>
          <Col xs="12" md="12" className="skill-row">
            <h4 className="skill-domain">Backend Skill</h4>
            <Row className="skill-row">
              <Col className="skill-col">
                <Image src={nodeJSLogo} className="skill-icon"/>
              </Col>
              <Col className="skill-col">
                <Image src={goLogo} className="skill-icon"/>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="12" className="skill-row">
            <h4 className="skill-domain">Testing Skill</h4>
            <Row className="skill-row">
              <Col className="skill-col">
                <Image src={jestLogo} className="skill-icon"/>
              </Col>
              <Col className="skill-col">
                <Image src={cypressLogo} className="skill-icon"/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
  
}

function Portfolio(props) {
  const portfolio = props.portfolio.map(work => {
    const skillList = work.skills.map(skill => (
      <Badge variant="info">{skill}</Badge>
    ))
    return (
      <Container>
        <Row className="work" onClick={() => openInNewTab(work.websiteUrl)}>
          <Col xs="12" md="6" className="work-img-container">
            <Image className="work-img" src={work.imgUrl} fluid/>
            <div className="overlay">
              <Button variant="success" onClick={() => openInNewTab(work.websiteUrl)}>Visit Website</Button>
            </div>
          </Col>
          <Col xs="12" md="6" className="work-content">
            <h4 className="work-title">{work.title}</h4>
            <p className="work-description">{work.description}</p>
            {skillList}
          </Col>
        </Row>
      </Container>
    )
  })
  return (
    <div className="portfolio"> 
      <h2 className="section-title">Portfolio/Participated Projects</h2>
      {portfolio}
    </div>
  )
}

function App() {
  const portfolio = [{
    title: 'LINE Travel home page',
    description: 'Building LINE Travel webpage using Vue.js. My responsibility is building search result page of articles.',
    imgUrl: linetvlImgUrl,
    skills: ['Vue.js', 'Sass/Scss', 'Scrum'],
    websiteUrl: 'https://travel.line.me/'
  },
  {
    title: 'LINE Protostar webpage and CMS',
    description: 'Building LINE Protostar webpage using prerender technology. My responsibility is building web page, CMS and server.',
    imgUrl: protostarImgUrl,
    skills: ['Nuxt.js', 'Golang', 'Drone CI', 'Argo CD'],
    websiteUrl: 'https://protostar.line.me/'
  }]
  return (
    <div className="App">
      <TopCarousel/>
      <About />
      <Skill />
      <Portfolio portfolio={portfolio}/>
    </div>
  );
}

export default App;
