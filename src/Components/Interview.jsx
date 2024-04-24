import React from 'react'
import "../Styles/interview.css"
import Card from './Card'
const Interview = () => {
  return (
   <>
       <div className="data-structure">
        <div className="data-structure-part">
          <div className="data-structure-part1">
            <div >
            <p className="para"> Goal Based</p> 
              <Card  src={"https://www.codingninjas.com/complete-interview-preparation-course"}text={"Product Companies Interview Prep"} hover={"#f8f8f8"}  imgC={"https://files.codingninjas.in/service-based-companies-14528.svg"} />
              <p className="para"> Skill Based</p>
              <Card text={"DBMS Course"} hover={"#f8f8f8"} src={"https://www.codingninjas.com/dbms-course"} imgC={"https://files.codingninjas.com/os-dbms-12694.svg"} />
              
           <Card text={"System Design"} hover={"#f8f8f8"} src={"system-design-course"} imgC={"https://files.codingninjas.com/system-design-12695.svg"} />
           <Card  text={"Operating System"} hover={"#f8f8f8"} src={"operating-systems-course"} imgC={"https://files.codingninjas.com/operating-system-12696.svg"} />
           <Card  text={"Aptitude Preparation"} hover={"#f8f8f8"} src={"aptitude-preparation-course"} imgC={"https://files.codingninjas.com/aptitude-12693.svg"} />
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Interview
