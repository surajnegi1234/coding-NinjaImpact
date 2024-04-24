import React from "react";
import "../Styles/dropdown.css";
import "./Jobcard";
import Jobcard from "./Jobcard";
const imgFirst = "https://files.codingninjas.com/fullstack-32956.png";
const imgSecond = "https://files.codingninjas.com/data-analytics-33356.webp";
const DropdownCard = ({ showDropdown }) => {
  return (
    
      <div className="header2">
      <div className="header3" 
      style={{ display: showDropdown ? "block" : "block" }}>
        <div className="header-bootcamp" >
          <div className="bootcamp-detail-card">
            <div className="bootcamp">
              Bootcamp with&nbsp;
              <span className="job-assistance">job assistance</span>
            </div>
            <div className="subtitle">
              Extensive program for working professionals with interview prep.
              placement support and mentorship.
            </div>
          </div>
          <div className="header-part1">
            <div className="live">
              <div className="image1">
                <img src="https://files.codingninjas.in/live-30726.svg" />
              </div>
              <div className="content">
                <div className="content-live">Live +</div>
                <div className="content-live2">
                  100% live classes and dedicated doubt session
                </div>
              </div>
            </div>
            <div className="blended">
              <div className="blended1">
                <img src="https://files.codingninjas.in/blended-1-30830.svg"></img>
              </div>
              <div className="blended2">
                <div className="blended-text">Blended</div>
                <div className="self-paced">
                  Self-paced learning with live weekend and recorded weekday
                  classes
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
        <div className="inner-right">
          <Jobcard img={imgFirst} text={"Full Stack Web Development"} />
          <Jobcard img={imgSecond} text={"Data Analytics"} />
        </div>
        <button>Book a free</button>
      </div>
      </div>
      </div>
  );
};

export default DropdownCard;
