import React, { useState } from "react";
import LogoIcon from "../LogoIcon/LogoIcon";
import CoursesList from "../CoursesList/CoursesList";
import InputCustom from "../InputCustom/InputCustom";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import { Avatar, Button, Drawer, Dropdown } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import { useSelector } from "react-redux";
import UserIcon from "../WebIcons/UserIcon";

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigation = useNavigate();

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const logInHandler = () => {
    navigation(`${path.logIn}`);
  };

  const { userInfo } = useSelector((state) => state.authSlice);

  const checkUserInfo = () => {
    const items = [
      {
        label: (
          <NavLink className="flex space-x-2 items-center">
           
            <UserIcon></UserIcon>
            <div>{userInfo ? userInfo.email : null}</div>
          </NavLink>
        ),
        key: "1",
      },
      {
        label: (
          <NavLink className="flex space-x-2 items-center">
            Logout
          </NavLink>
        ),
        key: "2",
      }
    ];
    return userInfo ? (
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
        className={`hover:cursor-pointer`}
      >
        <Avatar
          style={{
            backgroundColor: "#fde3cf",
            color: "#f56a00",
          }}
        >
          {userInfo ? userInfo.email.slice(0,1) : null}
        </Avatar>
      </Dropdown>
    ) : null;
  };
  return (
    <div className="header">
      <div className="container">
        <div className="flex justify-between header_content">
          <div className="flex space-x-3 w-3/4">
            <LogoIcon></LogoIcon>
            <CoursesList
              className="my-0 py-0 min-h-full"
              classNameWrapper="hidden md:flex"
            ></CoursesList>
            <form className="h-full w-10/12">
              <InputCustom
                classWrapper="h-full"
                classNameInput="h-full"
                placeholder={"Search courses"}
              />
            </form>
          </div>

          {userInfo?<div className="avarta flex flex-col justify-center">{checkUserInfo()}</div>:<div className="flex header_button space-x-2">
            <ButtonCustom
              content={"Log in"}
              textColor="text-black"
              bgColor="bg-pink-500"
              classname="w-1/2 py-auto px-2 hidden md:block text-center login_btn"
              onclick={logInHandler}
            />
            <ButtonCustom
              content={"Sign up"}
              textColor="text-black"
              bgColor="bg-green-500"
              classname="w-1/2 py-auto px-auto px-2 hidden md:block"
            />
            <ButtonCustom
              content={""}
              classname="navbar-toggler md:hidden"
              spanClassname="navbar-toggler-icon fa-solid fa-bars btn_dropdown"
              onclick={showDrawer}
            />
          </div>}
        </div>
      </div>
      <Drawer title="" placement="right" onClose={onClose} open={drawerVisible}>
        <div className="flex flex-col space-y-3">
          <CoursesList />
          <ButtonCustom
            content="Log in"
            textColor="text-black"
            bgColor="bg-pink-500"
            onclick={logInHandler}
          />
          <ButtonCustom
            content="Sign up"
            textColor="text-black"
            bgColor="bg-green-500"
          />
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
