import React from "react";
import "../Styles/dataStructure.css";

import Card from "./Card";
const DataStructure = ({ imgJava, imgC, imgBasics, hover }) => {
  return (
    <>
      <div className="data-structure">
        <div className="data-structure-part">
          <div className="data-structure-part1">
            <div>
              <Card
                text={"Basics of Java with DSA"}
                imgC={imgBasics}
                hover={hover}
                src={"https://www.codingninjas.com/java-data-structures-and-algorithms-course"}
              />
              <Card
                text={"Basics of Python with DSA"}
                imgC={"https://files.codingninjas.com/python-11712.svg"}
                hover={hover}
                src={"https://www.codingninjas.com/python-data-structures-and-algorithms-course"}
              />
              <Card text={"Basics of C++ with DSA"} imgC={imgC} src={"https://www.codingninjas.com/cpp-data-structures-and-algorithms-course"} hover={hover} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataStructure;
