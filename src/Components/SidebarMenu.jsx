import React from 'react'
import "../Styles/sidemenu.css"

import CloseIcon from '@mui/icons-material/Close';
import Subpart from './Subpart';
const SidebarMenu = ({onClose,text}) => {
    let imgJava = "https://files.codingninjas.in/bootspring-navigation-29430.svg";
const imgBasics = "https://files.codingninjas.com/java-11713.svg";
const imgC = "https://files.codingninjas.com/c-11714.svg";
  return (
   
   <div className="side">
     <div className="sideMenu">
    <div className="menu">
        <div className="menu-part1">
            Data Structures & Algorithms
           <CloseIcon style={{
            height:"24px",
            color:"#adadae",width:"24px"
           }}
           onClick ={onClose}/>
        </div>
        <div className="menu-part2">
            <div className="menu-sub-part">
               <Subpart src={"https://files.codingninjas.com/java-11713.svg"} text={"Basics of Java with DSA"}/>
               <Subpart src={"https://files.codingninjas.com/python-11712.svg"} text={"Basics of Python with DSA"}/>
               <Subpart src={imgC} text={"Basics of C++ with DSA"}/>
            </div>
        </div>
    </div>
    </div>
   </div>
  )
}

export default SidebarMenu
