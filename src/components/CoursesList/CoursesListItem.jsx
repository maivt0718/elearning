import { CalendarOutlined, EyeOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import React from "react";
import { string } from "yup";
import ButtonCustom from "../ButtonCustom/ButtonCustom";

const CoursesListItem = ({
  image,
  name,
  desciption,
  numberOfSeen,
  numberOfStar = "0.5",
  creation_date,
}) => {
  const getStar = (star = numberOfStar) => {
    const value =
      typeof star == "string" ? parseFloat(star.replace(",", ".")) : star;
    return (
      <Rate
        allowHalf
        disabled
        count={5}
        value={value}
        className="course_star_item"
      />
    );
  };

  return (
    <div className="course_item">
      <div className="container space-y-5">
        <div className="course_img">
          <img
            className={"object-cover object-center w-full"}
            src={`${image}`}
          />
        </div>
        <h1 className="course_name font-bold text-center">{name}</h1>
        <p className="course_description">{desciption}</p>
        <div className="course_creation_date flex space-x-3">
          <CalendarOutlined />
          <p>{creation_date}</p>
        </div>
        <div className="course_star_list">{getStar()}</div>
        <EyeOutlined />
        <span className="course_seen ms-2">{numberOfSeen}</span>
        <ButtonCustom content={"Details"} classname={"float-end p-2"} textColor={"text-black"}/>
      </div>
    </div>
  );
};

export default CoursesListItem;
