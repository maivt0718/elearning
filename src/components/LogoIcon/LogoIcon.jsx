import React from "react";
import { NavLink } from "react-router-dom";

const LogoIcon = () => {
  return (
    <NavLink to={"/"}>
      <img
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
        alt="Udemy"
        width={"100px"}
        height={"100%"}
        loading="lazy"
        className=""
      />
    </NavLink>
  );
};

export default LogoIcon;
