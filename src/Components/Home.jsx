import React from "react";

import Navbar from "./Navbar";
import About from "./About.jsx";
import VideoSection from "./VideoSection.jsx";
import "../Styles/home.css";
const Home = () => {
  return (
    <>
   
      <div className="landing-container">
        <div className="landing-content">
          <div className="container">
            <div className="container-inside">
              <div className="home">
                <div id="home2">
                  <div id="before-container">
                    <Navbar/>
                    <About />
                   <VideoSection/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
