import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Subpart from './Subpart';
const SidebarInterview = ({ onClose }) => {
  return (
    <div className="sideMenu">
    <div className="menu">
        <div className="menu-part1">
          Interview Preparation
           <CloseIcon style={{
            height:"24px",
            color:"#adadae",width:"24px"
           }}
           onClick={onClose} 
           />
        </div>
        <div className="menu-part2">
            <div className="menu-sub-part">
                <div className="full-stack1">Goal Based</div>
               <Subpart src={"https://files.codingninjas.in/service-based-companies-14528.svg"} text={"Product Companies Interview Prep"}/>
               
               <div className="full-stack1">Skill Based</div>
               <Subpart src={"https://files.codingninjas.com/os-dbms-12694.svg"} text={"DBMS Course"}/>
               <Subpart src={"https://files.codingninjas.com/system-design-12695.svg"} text={"System Design"}/>
               <Subpart src={"https://files.codingninjas.com/operating-system-12696.svg"} text={"Operating System"}/>
               <Subpart src={"https://files.codingninjas.com/aptitude-12693.svg"} text={"Aptitude Preparation"}/>

               
            </div>
        </div>
    </div>
    </div>
  )
}

export default SidebarInterview
