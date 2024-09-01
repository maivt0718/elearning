import React from "react";

const ButtonCustom = ({
  content,
  type = "button",
  bgColor = "bg-blue-500",
  onClick,
  textColor = "text-white",
  classname = ""
}) => {
  return (
    <button type={type} className={`${textColor} ${bgColor} rounded h-full ${classname} text-center`} onClick={onClick}>
      {content}
    </button>
  );
};

export default ButtonCustom;
