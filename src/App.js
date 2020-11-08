import React from "react";
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';
import { Parallax } from 'react-parallax';
import Container from "react-bootstrap/Container";
//components

import Navbar from "./components/my-navbar/navbar.component";
import HomeCarousel from "./components/carousel/carousel.component";
import TitleComponent from "./components/title-message/title-message.component"

//pages
import Skills from './pages/skills/skills.component'
import About from './pages/about/about.component'
import Experience from './pages/experience/experience.component'

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
          bgImage={require("./assets/img/parallex/fondo.jpg")}
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
        {/* Skills */}
        <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Skills/>
          </Fade>
        </Container>
        </div>
        
        {/* Experience */}

        <div>
        
          <div>
            <Container className="container-box rounded">
              <Slide bottom duration={500}>
                <Experience />
              </Slide>
            </Container>
          </div>
        
          
        </div>

    </div>
  );
};

export default App;
