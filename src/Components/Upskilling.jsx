import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Upskillingcontent from "./Upskillingcontent";
import DataStructure from "./DataStructure";
import Web from "./Web";
import Interview from "./Interview";
import Analytics from "./Analytics";
import "../Styles/upskilling.css";
import Card from "./Card";
let imgJava = "https://files.codingninjas.in/bootspring-navigation-29430.svg";
const imgBasics = "https://files.codingninjas.com/java-11713.svg";
const imgC = "https://files.codingninjas.com/c-11714.svg";
const Upskilling = ({ showUpskilling }) => {
  const [upSkill, setupSkill] = useState(true);
  const [showWeb, setshowWeb] = useState(false);
  const [showAnalytic, setshowAnalytic] = useState(false);
  const [showInteview, setshoeInterview] = useState(false);
  const [showCompetitive, setshowCompetitive] = useState(false);

  //first
  const toogleFirstSkill = () => {
    setupSkill(true);
    setshowAnalytic(false);
    setshoeInterview(false);
    setshowCompetitive(false);
    setshowWeb(false);
  };
  const hideFirstSkill = () => {
    setupSkill(true);
    setshowAnalytic(false);
    setshoeInterview(false);
    setshowCompetitive(false);
    setshowWeb(false);
  };
  //second
  const toogleSecondSkill = () => {
    setupSkill(false);
    setshowAnalytic(false);
    setshoeInterview(false);
    setshowCompetitive(false);
    setshowWeb(true);
  };
  const hideSecondSkill = () => {
    setupSkill(false);
    setshowAnalytic(false);
    setshoeInterview(false);
    setshowCompetitive(false);
    setshowWeb(true);
  };
  //Third
  const toogleThirdSkill = () => {
    setupSkill(false);
    setshowAnalytic(false);
    setshoeInterview(false);
    setshowCompetitive(true);
    setshowWeb(false);
  };
  const hideThirdSkill = () => {
    setupSkill(false);
    setshowAnalytic(false);
    setshoeInterview(false);
    setshowCompetitive(true);
    setshowWeb(false);
  };
  //Fourth
  const toogleFourthSkill = () => {
    setupSkill(false);
    setshowAnalytic(true);
    setshoeInterview(false);
    setshowCompetitive(false);
    setshowWeb(false);
  };
  const hideFourthSkill = () => {
    setupSkill(false);
    setshowAnalytic(true);
    setshoeInterview(false);
    setshowCompetitive(false);
    setshowWeb(false);
  };
  //fifth
  const toogleFifthSkill = () => {
    setupSkill(false);
    setshowAnalytic(false);
    setshoeInterview(true);
    setshowCompetitive(false);
    setshowWeb(false);
  };
  const hideFifthSkill = () => {
    setupSkill(false);
    setshowAnalytic(false);
    setshoeInterview(true);
    setshowCompetitive(false);
    setshowWeb(false);
  };
  return (
    
    <div className="up-co" >
      <div
      className="upskilling"
      style={{ display: showUpskilling ? "block" : "none" }}
    >
      <div className="upskilling-part">
        <div className="header">Popular courses</div>
        <div className="header2">The most in-demand courses for upskilling</div>
        <div className="skill-container">
          <Upskillingcontent
            backgroundColor={"#fff6f3"}
            img={imgJava}
            text={"Java Web Development with Spring Boot"}
            src={"cpp-data-structures-and-algorithms-course"}
            hover={"white"}
          />
          <Upskillingcontent
            backgroundColor={"white"}
            img={imgBasics}
            text={"Basics of java with Data Structures & Algorithms"}
            src={"https://www.codingninjas.com/java-data-structures-and-algorithms-course"}
          />
          <Upskillingcontent
            backgroundColor={"white"}
            img={imgC}
            text={"Basics of C++ with Data Structures & Algorithms"}
            src={"https://www.codingninjas.com/cpp-data-structures-and-algorithms-course"}
          />
        </div>
        <div className="scholarship" id="scholar">
          <div className="image-scholar">
            <img
              src="https://files.codingninjas.com/fluent_hat-graduation-28-filled-30546.svg"
              alt=""
            />
          </div>
          <div className="header-container">
            <div className="get-upto">
              Get upto <span>100% scholarship </span>
              on our Upskilling Courses
            </div>
            <button className="know">
              <span>
                Know more
                <ArrowForwardIcon
                  className="arrow"
                  style={{ fontSize: "16px" }}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="upskilling-part2">
        {/* header */}
        <div className="upskill-header">
          <div className="upskill-header1">Course Categories</div>
          <div className="upskill-header2">
            Expertly structured courses for focused and outcome-oriented
            learning
          </div>
        </div>
        {/* section */}
        <div className="upskill-section">

          <div className="upskill-section1">
            <div className="upskill-sec" onMouseEnter={toogleFirstSkill} onMouseLeave={hideFirstSkill}>
            <Upskillingcontent
                arrow={true}
                hover={"#f8f8f8"}
                backgroundColor={"#f8f8f8"}
                img={"https://files.codingninjas.in/dsa-icon-31375.svg"}
                text={"Data Structures & Algorithms"}
              />
            </div>
            <div
              onMouseEnter={toogleSecondSkill}
              onMouseLeave={hideSecondSkill}
            >
              <Upskillingcontent
                hover={"#f8f8f8"}
                backgroundColor={"#f8f8f8"}
                img={
                  "https://files.codingninjas.in/web-developmenticone-31380.svg"
                }
                text={"Web Development"}
                arrow={true}
              />
            </div>
            <div onMouseEnter={toogleThirdSkill} onMouseLeave={hideThirdSkill}>
              {" "}
              <Upskillingcontent
                arrow={true}
                hover={"#f8f8f8"}
                backgroundColor={"#f8f8f8"}
                img={
                  "https://files.codingninjas.in/competative-programming-2-icon-31379.svg"
                }
                text={"Competitive Programming"}
              />
            </div>
            <div
              onMouseEnter={toogleFourthSkill}
              onMouseLeave={hideFourthSkill}
            >
              {" "}
              <Upskillingcontent
                arrow={true}
                hover={"#f8f8f8"}
                backgroundColor={"#f8f8f8"}
                img={
                  "https://files.codingninjas.in/analytics-and-datascience-icon-31378.svg"
                }
                text={"Analytics & Data Science"}
              />
            </div>
            <div onMouseEnter={toogleFifthSkill} onMouseLeave={hideFifthSkill}>
              {" "}
              <Upskillingcontent
                arrow={true}
                hover={"#f8f8f8"}
                backgroundColor={"#f8f8f8"}
                img={
                  "https://files.codingninjas.in/analytics-and-datascience-icon-31378.svg"
                }
                text={"Interview Preparation"}
              />
            </div>
          </div>
          <div className="upskill-section2">
            {upSkill && (
              <DataStructure
                hover={"#f8f8f8"}
                imgJava={imgJava}
                imgBasics={imgBasics}
                imgC={imgC}
              />
            )}

            {showWeb && <Web />}
            {showCompetitive && (
              <div className="data-structure">
              <div className="data-structure-part">
                <div className="data-structure-part1">
                  <div>
                   
                    <Card
                      text={"Competitive Programming"}
                      src={"https://www.codingninjas.com/competitive-programming-course"}
                      imgC={
                        "https://files.codingninjas.com/competitive-programming-11703.svg"
                     }
                     hover={"#f8f8f8"}
                    />
                    
                  </div>
                </div>
              </div>
            </div>
            )}
            {showInteview && <Interview />}
            {showAnalytic && <Analytics />}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Upskilling;



 