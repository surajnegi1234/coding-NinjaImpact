import React from 'react'
import Subpart from './Subpart'
import CloseIcon from '@mui/icons-material/Close';
const SideCompetitive = ({onClose}) => {
  return (
    <div className="side">
    <div className="sideMenu">
   <div className="menu">
       <div className="menu-part1">
          Competitive Programming
          <CloseIcon style={{
           height:"24px",
           color:"#adadae",width:"24px"
          }}
          onClick={onClose}
          />
       </div>
       <div className="menu-part2">
           <div className="menu-sub-part">
              <Subpart src={"https://files.codingninjas.com/competitive-programming-11703.svg"} text={"Competitive Programming"}/>
              
           </div>
       </div>
   </div>
   </div>
  </div>
//    <Subpart src ={""}text={"Competitive Programming"}/>
  )
}

export default SideCompetitive
