import React, { useEffect, useState } from "react";

const useResponsive = (breakpoint) => {
  const [isResponsive, setIsResponsive] = useState({});
  useEffect(() => {
    const handleResize = () => {
      const newIsResponsive = {};
      for (const key in breakpoint) {
        if (Object.hasOwnProperty.call(breakpoint, key)) {
          newIsResponsive[key] = window.innerWidth <= breakpoint[key];
        }
        
      }
      setIsResponsive(newIsResponsive);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isResponsive;
};

export default useResponsive;
