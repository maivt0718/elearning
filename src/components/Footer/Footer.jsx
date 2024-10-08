import React from "react";
import LogoIcon from "../LogoIcon/LogoIcon";
import { NavLink } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";
import { deviceWidth } from "../../common/deviceWidth.js";

const Footer = () => {
  const listItems = [
    {
      title: "Categories",
      items: [
        <NavLink to={"#"}>Design</NavLink>,
        <NavLink to={"#"}>Marketing & Business</NavLink>,
        <NavLink to={"#"}>Writing</NavLink>,
        <NavLink to={"#"}>Fashion</NavLink>,
        <NavLink to={"#"}>Crafts</NavLink>,
        <NavLink to={"#"}>Photography & Video</NavLink>,
      ],
    },
    {
      title: "company",
      items: [
        <NavLink to={"#"}>About us</NavLink>,
        <NavLink to={"#"}>Contact</NavLink>,
        <NavLink to={"#"}>Store Location</NavLink>,
        <NavLink to={"#"}>Become a Teacher</NavLink>,
        <NavLink to={"#"}>Term of Service</NavLink>,
        <NavLink to={"#"}>Privacy Policy</NavLink>,
        <NavLink to={"#"}>Accessibillity</NavLink>,
      ],
    },
    {
      title: "list",
      items: [
        <NavLink to={"#"}>New courses</NavLink>,
        <NavLink to={"#"}>Top rated</NavLink>,
        <NavLink to={"#"}>Course bundles</NavLink>,
        <NavLink to={"#"}>Blog</NavLink>,
        <NavLink to={"#"}>Ebook</NavLink>,
        <NavLink to={"#"}>Events</NavLink>,
      ],
    },
    {
      title: "feature",
      items: [
        <NavLink to={"#"}>User Manangement</NavLink>,
        <NavLink to={"#"}>Learn Manangement</NavLink>,
        <NavLink to={"#"}>Reporting</NavLink>,
        <NavLink to={"#"}>Forum</NavLink>,
        <NavLink to={"#"}>Languages</NavLink>,
      ],
    },
  ];
  const isResponsive = useResponsive(deviceWidth);
  return (
    <div className="footer">
      <div className="container">
        <div
          className={`${
            isResponsive.mobile || isResponsive.tablet ? "block" : "flex"
          } footer_content`}
        >
          <div
            className={`footer_left ${
              isResponsive.mobile || isResponsive.tablet ? "w-full" : "w-1/4"
            }`}
          >
            <LogoIcon />
          </div>
          <div className="footer_right w-full">
            <div
              className={`grid ${
                isResponsive.mobile || isResponsive.tablet
                  ? "grid-cols-2"
                  : "grid-cols-4"
              } justify-between gap-10`}
            >
              {listItems.map((element, index) => {
                return (
                  <div key={index} className="footer_list">
                    <h1>{element.title}</h1>

                    <div className="flex flex-col space-y-5 items">
                      {element.items.map((items, index) => {
                        return <div key={index}>{items}</div>;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright ">
        <div className="container">
          <div className={`${
            isResponsive.mobile || isResponsive.tablet ? "block space-y-5 text-center" : "flex justify-between"
          }  gap-10`}>
            <div>
              @2024{" "}
              <a href="/" className="text-blue-700 text-center">
                Udemy
              </a>
              . All rights reserved
            </div>
            <div className="footer_social flex space-x-3 justify-center">
              <p className="">Connect with us</p>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-regular fa-envelope"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
