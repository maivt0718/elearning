import React from "react";
import LogoIcon from "../LogoIcon/LogoIcon";
import CoursesList from "../CoursesList/CoursesList";
import InputCustom from "../InputCustom/InputCustom";
import ButtonCustom from "../ButtonCustom/ButtonCustom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="flex justify-between header_content">
          <div className="flex space-x-5 w-3/4">
            <LogoIcon></LogoIcon>
            <CoursesList className="my-0 py-0 min-h-full"></CoursesList>
            <form className="h-full w-10/12">
              <InputCustom placeholder={"Search courses"} />
            </form>
          </div>

          <div className="flex header_button space-x-2 ">
            <ButtonCustom
              content={"Log in"}
              textColor="text-black"
              bgColor="bg-pink-500"
              classname="w-1/2 py-auto px-auto"
            />
            <ButtonCustom
              content={"Sign up"}
              textColor="text-black"
              bgColor="bg-green-500"
              classname=" py-auto px-auto px-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
