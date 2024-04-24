import React from "react";
import "../Styles/about.css";
import VideoSection from "./VideoSection";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Navbar from "./Navbar";
const About = () => {
  return (
    <>
        <div className="inner-section">
          <div className="heading-container">
            <div className="restricted"> Restricted by opportunities?</div>
            <h1 className="inner-heading">
              Get the tech career you deserve. Faster.
            </h1>
            <div className="structred-coding">
              Structured coding courses that get you there faster with
              confidence.
            </div>
          </div>
          <div className="btn-container">
            <button className="mybtn">
              <span>
                Explore Courses
                <div className="image-container">
                 
                  <KeyboardDoubleArrowDownIcon style={{ width: '28px', height: '28px' }} />

                </div>
             </span>
           </button>
         
        {/* <div className="first-video-container">
         <VideoSection/>
        </div> */}
        
      </div>
      
    </div> 
    </>
  );
};

export default About;
