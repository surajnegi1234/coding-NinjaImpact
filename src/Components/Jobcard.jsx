import React from "react";
import "../Styles/jobcard.css";
const Jobcard = ({img , text}) => {
  return (
    <div className="job-card" style={{
        boxSizing:"border-box",
        margin:"1.3rem 19px",
        padding:0,
        borderRadius:"12px"
    }}>
      <a href="https://www.codingninjas.com/careercamp/professionals/?utm_campaign=navbar_new"className="bootcamp-course-card">
        <div className="card">
          <div className="image-containers">
            <img
              src={img}
              alt=""
            />
          </div>
          <div className="full-stack">{text}</div>
        </div>
      </a>
    </div>
  );
};

export default Jobcard;
