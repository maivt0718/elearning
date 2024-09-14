import React from "react";

const ButtonCustom = ({
  content,
  type = "button",
  bgColor = "bg-blue-500",
  onclick,
  textColor = "text-white",
  classname = "",
  spanClassname = "",
}) => {
  return (
    <button type={type} className={`${textColor} ${bgColor} rounded ${classname} text-center`} onClick={onclick}>
      {content}
    {spanClassname? <span className= {spanClassname}></span>: null}
    </button>
  );
};

export default ButtonCustom;
