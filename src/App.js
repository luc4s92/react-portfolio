import React from "react";

//components

import Navbar from "./components/my-navbar/navbar.component";
import HomeCarousel from "./components/carousel/carousel.component";
import TitleComponent from "./components/title-message/title-message.component"


import './App.css';

const App = () => {
  return (
    <div >
        <Navbar/>
        <HomeCarousel/>
        <TitleComponent/>
    </div>
  );
};

export default App;
