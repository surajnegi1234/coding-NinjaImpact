import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Subpart from './Subpart';
const SidebarWeb = ({onClose}) => {
  return (
   
    <div className="sideMenu">
    <div className="menu">
        <div className="menu-part1">
            Web Development
           <CloseIcon style={{
            height:"24px",
            color:"#adadae",width:"24px"
           }}
           onClick={onClose}
           />
        </div>
        <div className="menu-part2">
            <div className="menu-sub-part">
                <div className="full-stack1">Full Stack</div>
               <Subpart src={"https://files.codingninjas.in/bootspring-navigation-29430.svg"} text={"Java Web Development with Spring boot"}/>
               <Subpart src={"https://files.codingninjas.com/mern-32957.png"} text={"Mern Stack"}/>
               <div className="full-stack1">Front-End</div>
               <Subpart src={"https://files.codingninjas.com/react-11709.svg"} text={"Frontend Web Dev - React"}/>

               
            </div>
        </div>
    </div>
    </div>
  )
}

export default SidebarWeb
