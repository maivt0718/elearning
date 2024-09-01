import React, { useEffect, useState } from "react";
import { UnorderedListOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { courses } from "../../services/courses.service";
import { NavLink } from "react-router-dom";
const items = [
  {
    label: "Submit and continue",
    key: "1",
  },
];

const CoursesList = () => {
  const [courseList, setCourseList] = useState([]);

  courses
    .listItems()
    .then((res) => {
      console.log(res)
      {
        res.data.forEach((item, index) => {
          console.log()
          // setCourseList([
          //   ...courseList,
          //   { label: <NavLink>{item.tenDanhMuc}</NavLink>, key: index },
          // ]);
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
    console.log(courseList)
  return (
    <Dropdown.Button
      icon={<UnorderedListOutlined />}
      menu={{
        courseList,
      }}
    >
      Courses
    </Dropdown.Button>
  );
};

export default CoursesList;
