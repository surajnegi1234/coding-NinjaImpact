import React from "react";
import "../Styles/PopularCourses.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SidebarMenu from "./SidebarMenu";
import SidebarWeb from "./SidebarWeb";
import { useState } from "react";
import SidebarAnalytics from "./SidebarAnalytics";
import SideCompetitive from "./SideCompetitive";
import SidebarInterview from "./SidebarInterview";
const PopularCourses = () => {
  const [showSidemenu, setshowSidemenu] = useState(false);
  const [showWeb, setShowWeb] = useState(false);
  const [showAnalytics, setshowAnalytics] = useState(false);
  const [showCompetition, setshowCompetitive] = useState(false);
  const [showInterview, setshowInterview] = useState(false);
  const handleClick = () => {
    setshowSidemenu(!showSidemenu);
  };
  const toggleWeb = () => {
    setShowWeb(!showWeb);
  };
  const toogleCompetitive = () => {
    setshowCompetitive(!showCompetition);
  };
  const toggleAnalytics = () => {
    setshowAnalytics(!showAnalytics);
  };
  const toogleInterview = () => {
    setshowInterview(!showInterview);
  };
  const closeSidebarInterview = () => {
    setshowInterview(false); 
  };
  const closeSidebarWeb = () => {
    setShowWeb(false); 
  };
  const closeSidebarAnalytics = () => {
    setshowAnalytics(false); 
  };
  const closeSidebarCompetition = () => {
    setshowCompetitive(false); 
  };
  const closeSidebarData = () => {
    setshowSidemenu(false); 
  };
  return (
    <div>
      <div className=" Popular-Courses">
        <div className="popular-courses1">
          <div className="popular-courses2">
            <div className="popular-courses3">
              <div className="popular-courses4">
                <img
                  src="https://files.codingninjas.in/sparkle-4-30728.svg"
                  alt="sparks"
                />
              </div>
              <div className="Popular">Popular courses</div>
            </div>
            <KeyboardArrowDownIcon
              style={{
                fontWeight: "normal",
                fontSize: "24px",
                lineHeight: "1",
                height: "24px",
                width: "24px",
              }}
            />
          </div>

          <div className="full">
            <div className="full2" onClick={handleClick}>
              <div className="full3">
                <div className="full-part1">
                  <img
                    src="https://files.codingninjas.in/dsa-icon-31375.svg"
                    alt=""
                  />
                </div>
                <span>
                  <p> Data Structure & Algorithms</p>
                </span>
              </div>
              <KeyboardArrowDownIcon
                style={{
                  fontWeight: "normal",
                  fontSize: "24px",
                  lineHeight: "1",
                  height: "24px",
                  width: "24px",
                }}
              />
            </div>
            {showSidemenu && <SidebarMenu onClose={closeSidebarData}/>}
          </div>
          <div className="full2" onClick={toggleWeb}>
            <div className="full3">
              <div className="full-part1">
                <img
                  src="https://files.codingninjas.in/web-developmenticone-31380.svg"
                  alt=""
                />
              </div>
              <span>
                <p> Web Development</p>
              </span>
            </div>
            <KeyboardArrowDownIcon
              style={{
                fontWeight: "normal",
                fontSize: "24px",
                lineHeight: "1",
                height: "24px",
                width: "24px",
              }}
            />
          </div>
          {showWeb && <SidebarWeb  
          onClose={ closeSidebarWeb}
          />}
        </div>
        <div className="full2" onClick={toogleCompetitive}>
          <div className="full3">
            <div className="full-part1">
              <img
                src="https://files.codingninjas.in/competative-programming-2-icon-31379.svg"
                alt=""
              />
            </div>
            <span>
              <p> Competitive Programming</p>
            </span>
          </div>
          <KeyboardArrowDownIcon
            style={{
              fontWeight: "normal",
              fontSize: "24px",
              lineHeight: "1",
              height: "24px",
              width: "24px",
            }}
          />
        </div>
        {showCompetition && <SideCompetitive onClose={closeSidebarCompetition} />}

        <div className="full2"  onClick={toggleAnalytics}>
        <div className="full3">
          <div className="full-part1">
            <img
              src="https://files.codingninjas.in/analytics-and-datascience-icon-31378.svg"
              alt=""
            />
          </div>
          <span>
          <p> Analytics & Data Science</p>
          </span>
        </div>
        <KeyboardArrowDownIcon
          style={{
            fontWeight: "normal",
            fontSize: "24px",
            lineHeight: "1",
            height: "24px",
            width: "24px",
          }}
        />
      </div>
      {showAnalytics && <SidebarAnalytics
      onClose={ closeSidebarAnalytics }
      />}
      </div>
     
     

      <div className="full2" onClick={toogleInterview}>
        <div className="full3">
          <div className="full-part1">
            <img
              src="https://files.codingninjas.com/competitive-programming-11703.svg"
              alt=""
            />
          </div>
          <span>
            <p> Interview Preparation</p>
          </span>
        </div>
        <KeyboardArrowDownIcon
          style={{
            fontWeight: "normal",
            fontSize: "24px",
            lineHeight: "1",
            height: "24px",
            width: "24px",
          }}
        />
      </div>
      {showInterview && <SidebarInterview onClose={closeSidebarInterview} />}
    </div>
  );
};

export default PopularCourses;


//
//
// 