import React from "react";
import Fade from "react-reveal/Fade";
import { Parallax } from 'react-parallax';
import Container from "react-bootstrap/Container";
//components

import Navbar from "./components/my-navbar/navbar.component";
import HomeCarousel from "./components/carousel/carousel.component";
import TitleComponent from "./components/title-message/title-message.component"

//pages
import Skills from './pages/skills/skills.component'
import About from './pages/about/about.component'


import './App.css';

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
        <Navbar/>
        <HomeCarousel/>
        <TitleComponent/>
        <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
          
        </div>
        <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Skills/>
          </Fade>
        </Container>
        </div>
        
    </div>
  );
};

export default App;
