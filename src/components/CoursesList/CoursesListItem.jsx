import { CalendarOutlined, EyeOutlined, UserOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import React from "react";
import { getStar } from "../GetStar/GetStar.jsx";
import { Link } from "react-router-dom";

const CoursesListItem = ({
  image,
  name,
  numberOfStudent,
  numberOfSeen,
  numberOfStar = "0.5",
  creation_date,
  id
}) => {
  return (
    <div className="course_item">
      <div className="container space-y-4">
        <div className="course_img">
          <img
            className={"object-cover object-center w-full"}
            src={`${image}`}
          />
        </div>
        <h1 className="course_name font-bold text-center">{name}</h1>
        <div className="flex space-x-2 course_student">
        <UserOutlined />
          <p className="course_student_content">{numberOfStudent}</p>
        </div>

        <div className="course_creation_date flex space-x-3">
          <CalendarOutlined />
          <p>{creation_date}</p>
        </div>
        <div className="course_star_list">{getStar(numberOfStar)}</div>
        <EyeOutlined />
        <span className="course_seen ms-2">{numberOfSeen}</span>
        <Link to={`/course_detail/${id}`} className="float-end bg-pink-500 text-black rounded p-2">Register</Link>
      </div>
    </div>
  );
};

export default CoursesListItem;
