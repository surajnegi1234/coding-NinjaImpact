import React from 'react'
import "../Styles/dataStructure.css";
import { useState } from "react";
const Card = ({imgC,text ,src,hover,backgroundColor}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <>
         <a href ={src}className="data-structure-part2"
         style={{
            backgroundColor: isHovered ? hover : (backgroundColor = "white"),
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
         >
               <div className="data-structure-part3">
               <img src={imgC}alt="" />
               </div>
               <span>{text}</span>
               
              </a>
    </>
  )
}

export default Card
