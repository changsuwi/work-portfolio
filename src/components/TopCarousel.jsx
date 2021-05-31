import Carousel from "react-bootstrap/Carousel";
import carousel1ImgUrl from "../img/carousel/Carousel-1.jpeg";
import carousel2ImgUrl from "../img/carousel/Carousel-2.png";
import "./TopCarousel.css";

export default function TopCarousel() {
  return (
    <Carousel fade interval={3500}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel1ImgUrl}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Looking for a web developer ?</h3>
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
          <p>
            Familiar with Vue.js, Node.js and Golang. Have React.js experience
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
