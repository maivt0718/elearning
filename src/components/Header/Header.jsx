import React, { useState } from "react";
import LogoIcon from "../LogoIcon/LogoIcon";
import CoursesList from "../CoursesList/CoursesList";
import InputCustom from "../InputCustom/InputCustom";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import { Drawer } from "antd";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false)

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };
  return (
    <div className="header">
      <div className="container">
        <div className="flex justify-between header_content">
          <div className="flex space-x-5 w-3/4">
            <LogoIcon></LogoIcon>
            <CoursesList className="my-0 py-0 min-h-full" classNameWrapper="hidden md:flex"></CoursesList>
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
            <ButtonCustom content={""} classname="navbar-toggler md:hidden" spanClassname="navbar-toggler-icon fa-solid fa-bars btn_dropdown" onClick={showDrawer}/>
          </div>
        </div>
      </div>
      <Drawer
        title=""
        placement="right"
        onClose={onClose}
        open={drawerVisible}
      >
        <div className="flex flex-col space-y-3">
          <CoursesList/>
          <ButtonCustom content="Log in" textColor="text-black" bgColor="bg-pink-500" />
          <ButtonCustom content="Sign up" textColor="text-black" bgColor="bg-green-500" />
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
