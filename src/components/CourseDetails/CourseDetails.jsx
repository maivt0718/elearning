import React, { useEffect, useState } from "react";
import { getStar } from "../GetStar/GetStar";
import { useParams } from "react-router-dom";
import { courses } from "../../services/courses.service";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import useResponsive from "../../hooks/useResponsive";
import { deviceWidth } from "../../common/deviceWidth";

const CourseDetails = () => {
  const param = useParams();
  const [course, setCourse] = useState({});
  const isResponsive = useResponsive(deviceWidth)
  useEffect(() => {
    courses
      .getCourseItem(param.slug)
      .then((res) => {
        setCourse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="courseDetails">
      <div className="container">
        <div className="courseDetails_intro">
          <div className="container">
            <div className={`intro ${isResponsive.mobile?"block":"flex"}`}>
              <div className={`intro_text text-white w-1/2 flex flex-col justify-center space-y-3`}>
                <h1 className="title">
                  {course.tenKhoaHoc ? course.tenKhoaHoc : "undefined"}
                </h1>
                <p>
                  Number of students:{" "}
                  {course.soLuongHocVien ? course.soLuongHocVien : "0"}
                </p>
                <p>{course.moTa ? course.moTa : "undefined"}</p>
                {isResponsive.mobile?null:<div className="flex justify-center">
                  <ButtonCustom
                    content={"Register"}
                    classname={`w-1/4 p-1 ${isResponsive.mobile?"w-full":""} text-center`}
                  />
                </div>}
              </div>
              <div className="intro_image w-1/2 flex justify-center">
                <img className={`intro ${isResponsive.mobile?"my-2":""}`} src={course.hinhAnh ? course.hinhAnh : "#"} />
              </div>
              {isResponsive.mobile?
                  <ButtonCustom
                    content={"Register"}
                    classname={`p-1 my-2 w-full text-center`}
                  />
                :null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
