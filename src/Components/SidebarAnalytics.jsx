import React from 'react'
import Subpart from './Subpart'
import CloseIcon from '@mui/icons-material/Close';
const SidebarAnalytics = ({onClose}) => {
  return (
    <div className="sideMenu">
    <div className="menu">
        <div className="menu-part1">
            Analytics & Data Science
           <CloseIcon style={{
            height:"24px",
            color:"#adadae",width:"24px"
           }}
           onClick={onClose}/>
        </div>
        <div className="menu-part2">
            <div className="menu-sub-part">
                <div className="full-stack1">Analytics</div>
               <Subpart src={"https://files.codingninjas.in/group-7241-15644.png"} text={"Data Analytics"}/>
               
               <div className="full-stack1">Data Science & Machine Learning</div>
               <Subpart src={"https://files.codingninjas.com/ml-11707.svg"} text={"Machine Learning"}/>
               <Subpart src={"https://files.codingninjas.com/data-science-11708.svg"} text={"Data Science & Machine Learning"}/>

               
            </div>
        </div>
    </div>
    </div>
  )
}

export default SidebarAnalytics



const dataAnalytics= "https://files.codingninjas.in/bootspring-navigation-29430.svg";
const machineLearning ="https://files.codingninjas.com/react-11709.svg";
const  dataScience ="https://files.codingninjas.com/react-11709.svg"