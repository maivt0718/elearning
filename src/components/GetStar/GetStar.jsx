import { Rate } from "antd";

export const getStar = (star) => {
  const value =
    typeof star == "string" ? parseFloat(star.replace(",", ".")) : star;
  return (
    <Rate
      allowHalf
      disabled
      count={5}
      value={value}
      className="course_star_item"
      style={{
        color: "green",
      }}
    />
  );
};
