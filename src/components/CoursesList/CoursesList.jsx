import React, { useEffect, useState } from "react";
import { UnorderedListOutlined } from "@ant-design/icons";
import { Dropdown, Button, Space } from "antd";
import { courses } from "../../services/courses.service";
import { NavLink } from "react-router-dom";

const CoursesList = ({classNameWrapper = ""}) => {
  const [courseList, setCourseList] = useState([{}]);

  useEffect(() => {
    courses
      .listItems()
      .then((res) => {
        const newCourseList = res.data.map((item, index) => ({
          label: <NavLink className="course_item_nav">{item.tenDanhMuc}</NavLink>,
          key: `${index}`,
        }));
        setCourseList(newCourseList);
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
      <Dropdown
        menu={{ items: courseList }}
        className={`h-full my-0 py-0 text-black course_list ${classNameWrapper}`}
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
