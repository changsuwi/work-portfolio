import linetvlImgUrl from "./img/line-travel.png";
import protostarImgUrl from "./img/protostar.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopCarousel from "./components/TopCarousel";
import About from "./components/About";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";

function App() {
  const portfolio = [
    {
      title: "LINE Travel Home Page",
      description:
        "Building LINE Travel webpage using Vue.js. My responsibility is building search result page for articles.",
      imgUrl: linetvlImgUrl,
      skills: ["Vue.js", "Sass/Scss", "Scrum development"],
      websiteUrl: "https://travel.line.me/",
    },
    {
      title: "LINE Protostar Webpage and CMS",
      description:
        "Building LINE Protostar webpage using prerender technology. My responsibility is building website, CMS, and backend services.",
      imgUrl: protostarImgUrl,
      skills: ["Nuxt.js", "Pre-render", "Vue.js", "Golang"],
      websiteUrl: "https://protostar.line.me/",
    },
  ];
  return (
    <div className="App">
      <TopCarousel />
      <About />
      <Skill />
      <Portfolio portfolio={portfolio} />
    </div>
  );
}

export default App;
