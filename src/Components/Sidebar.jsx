import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


import "../Styles/sidebar.css";
import PopularCourses from "./PopularCourses";
import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowsidebar] = useState(false);
  return (
    <div className="sidebar-container" style={{
      display: showSidebar ? "none" : "block",
    }}>
      <div id="headers-container">
        <ArrowBackIcon
          style={{
            display: "inline-block",
            fill: "currentColor",
            height: "24px",
            width: "24px",
            overflow: "visible",
            fontFamily: "Material Icons",
            fontWeight: "normal",
            fontSize: "24px",
            lineHeight: "1",
            letterSpacing: "normal",
            textTransform: "none",
            
          }}
          onClick={() => setShowsidebar(!showSidebar)}
        />{" "}
        Courses
      </div>

      {/* next-section */}
      <div className="bootcamp-course-container">
        {/* bootcamp-first-container */}

        <div className="bootcamp-first-container">
          <div className="bootcamp-header">
            <span className="bootcamp-header1">
              Job Bootcamp course
              <div>(For Professional)</div>
            </span>
            <span className="Book">Book a free webinar</span>
          </div>
          <a className="full-stack-web" href="">
            <img
              src="https://files.codingninjas.com/fullstack-32956.png"
              alt=""
            />
            Full Stack Web Development
          </a>
          <a className="full-stack-web" href="">
            <img
              src="https://files.codingninjas.com/data-analytics-33356.webp"
              alt=""
            />
            Data Analytics
          </a>
        </div>
        {/* upskillin courses */}
        <div className="bootcamp-second-container">
          <div className="upskiling-border">Upskilling Courses</div>
          <div className="scholarship-card">
            <div className="body-content">
              Get upto
              <span className="gradient"> 100% scholarship </span>
              on our Upskilling courses
            </div>
            <div className="know-more">Know more</div>
          </div>
          <div className="populars-courses">
            <PopularCourses />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
