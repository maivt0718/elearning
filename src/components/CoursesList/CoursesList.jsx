import React, { useEffect, useState } from "react";
import { UnorderedListOutlined } from "@ant-design/icons";
import { Dropdown, Button, Space } from "antd";
import { courses } from "../../services/courses.service";
import { NavLink, useNavigate } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";
import { deviceWidth } from "../../common/deviceWidth";
import ButtonCustom from "../ButtonCustom/ButtonCustom";

const CoursesList = ({classNameWrapper = ""}) => {
  const [courseList, setCourseList] = useState([{}]);
  const isResponsive = useResponsive(deviceWidth);
  const navigator = useNavigate()

  useEffect(() => {
    courses
      .listItems()
      .then((res) => {
        const newCourseList = res.data.map((item, index) => ({
          label: (
            <NavLink className="course_item_nav">{item.tenDanhMuc}</NavLink>
          ),
          key: `${index}`,
        })
        );
        if (isResponsive.mobile) {
          newCourseList.push({
            label: (
              <NavLink className="course_item_nav bg-pink-500 text-black" to={"/logIn"}>LogIn</NavLink>
            ),
            key: "btn_login"
          })
        }
        console.log(newCourseList)
        setCourseList(newCourseList);
      })
      .catch((err) => {console.log(err)});
  }, []);
  return (
    <div className="h-full">
      <Dropdown
        menu={{ items: courseList }}
        className={`my-0 py-0 text-black course_list ${classNameWrapper}`}
      >
        <Button className="flex justify-between">
          <Space>Courses</Space>
          <UnorderedListOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default CoursesList;
