import React from "react";
import { useState } from "react";
import "../Styles/upskilling.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Upskillingcontent = ({
  img,
  text,
  src,
  hover,
  backgroundColor,
  arrow,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <a className={`src`} id="hover-content" href={src}>
        <div
          className="live"
          style={{
            backgroundColor: isHovered ? hover : (""),
            background:backgroundColor
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="image1"
            // style={{ backgroundColor: backgroundColor ,
             
            // }}
            id="color-white"
          >
            <img 
            style={{
              // background:"#ffffff"
            }}
            src={img} />
          </div>
          <div className="content">
            <div className="content-live2">{text}</div>
          </div>
          {arrow && (
            <div
              className="img-containerpart2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <KeyboardArrowRightIcon
                style={{
                  fontSize: "24px",
                  position: "relative",
                  right: "20px",
                }}
              />
            </div>
          )}
        </div>
      </a>
    </>
  );
};

export default Upskillingcontent;
