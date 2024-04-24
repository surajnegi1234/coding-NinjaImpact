import React from 'react'
 import Card from './Card'

const Analytics = ({src,img}) => {
 
  return (
    <>
     
   <div className="data-structure">
        <div className="data-structure-part">
          <div className="data-structure-part1">
            <div >
            <p className="para"> Analytics</p> 
              <Card src={"https://www.codingninjas.com/data-analytics-course"}text={"Data Analytics"} hover={"#f8f8f8"}  imgC={"https://files.codingninjas.in/group-7241-15644.png"} />
              <p className="para">Data Science & Machine Learning</p>
              <Card src={"https://www.codingninjas.com/machine-learning-course"}text={"MERN Stack"} hover={"#f8f8f8"}  imgC={"https://files.codingninjas.com/ml-11707.svg"} />
             
           <Card src={"https://www.codingninjas.com/data-science-course"} text={"Frontend Web Dev -React"} hover={"#f8f8f8"}  imgC={"https://files.codingninjas.com/data-science-11708.svg"} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Analytics
