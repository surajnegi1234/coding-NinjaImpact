import React, { useState } from "react";
import Upskilling from "./Upskilling";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../Styles/navbar.css";
import DropdownCard from "./DropdownCard";
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const[showSidebar,setshowSidebar] = useState(false);
  const [showUpskilling, setShowUpskilling] = useState(false);

  const handleMouseEnterDropdown = () => {
    setShowDropdown(true);
  };

  const handleMouseLeaveDropdown = () => {
    setShowDropdown(false);
  };

  const handleMouseEnterUpskilling = () => {
    console.log("Mouse entered Upskilling container");
    setShowUpskilling(true);
  };

  const handleMouseLeaveUpskilling = () => {
    console.log("Mouse left Upskilling container");
    setShowUpskilling(false);
  };

  return (
    <div id="nav-container">
      <div className="nav-bar">
        <div id="left">
          <div className="img-container">
            <a href="https://www.codingninjas.com/">
              <img src="https://asset.brandfetch.io/idQVGbrvGL/idFrWdCkB5.png" />
            </a>
          </div>
          <div id="left-right-container">
           <div className="left-inner">
           <div
              className="job-container"
              onMouseEnter={handleMouseEnterDropdown}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              Job Bootcamp
               {
              <div className="header1">
               { showDropdown && <DropdownCard/>}
             
               
              </div>

               }
            </div>

            <div
              className="Upskilling-container"
              onMouseEnter={handleMouseEnterUpskilling}
              onMouseLeave={handleMouseLeaveUpskilling}
            >
              <a>
                <span>Upskilling Courses</span>
                <div>Upto 100% scholarship</div>
              </a>

              {
                <div className="upskill-co">

                {showUpskilling &&
                 <Upskilling/>
}
                </div>
              }
            </div>
           </div>
          </div>
        </div>
        <div id="right">
          <button id="courses-btn" onClick={()=>{setshowSidebar(!showSidebar)}}>
            <span>Courses</span>
          </button>
    {showSidebar && <Sidebar showSidebar={showSidebar}/>}
          <Link to={"/signin"}>
            <button id="signin-btn">
              <span>Sigin</span>
            </button>
          </Link>
          <Link to={"/login"}>
            <button id="login-btn">
              <span>Login</span>
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
