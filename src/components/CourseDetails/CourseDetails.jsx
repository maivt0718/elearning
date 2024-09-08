import React from "react";
import { getStar } from "../GetStar/GetStar";

const CourseDetails = ({name="ABC", star, description, image="https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-game-di-dong3_gp01.png"}) => {
  return (
    <div className="courseDetails ">
      <div className="container">
        <div className="courseDetails_intro">
          <div className="container">
            <div className="intro flex gap-5">
                <div className="intro_text text-white w-1/2">
                    <h1 className="title">{name}</h1>
                    <p>Current Rating: {star? getStar(star): 0}</p>
                </div>
                <div className="intro_image w-1/2">
                  <img src={image}/>
                </div>
            </div>
          </div>
        </div>
        <div className="courseDetails_content">
          <div className="container"></div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
