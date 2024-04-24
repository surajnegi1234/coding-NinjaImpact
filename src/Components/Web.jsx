import React from 'react'
import Card from './Card'
const Web = () => {
  return (
    <>
    
    <div className="data-structure">
        <div className="data-structure-part">
          <div className="data-structure-part1">
            <div >
            <p className="para"> Full Stack</p> 
              <Card src={"https://www.codingninjas.com/java-spring-boot-course"} text={"Java Web Development with Spring Boot"} hover={"#f8f8f8"}  imgC={"https://files.codingninjas.in/bootspring-navigation-29430.svg"} />
              <Card src={"https://www.codingninjas.com/mern-full-stack-development-course"} text={"MERN Stack"} hover={"#f8f8f8"}  imgC={"https://files.codingninjas.com/mern-32957.png"} />
              <p className="para"> Front-End</p>
           <Card  src={"https://www.codingninjas.com/react-js-course"}text={"Frontend Web Dev -React"} hover={"#f8f8f8"}  imgC={"https://files.codingninjas.com/react-11709.svg"} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Web
