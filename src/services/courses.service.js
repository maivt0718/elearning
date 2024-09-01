import { http } from "./config";

export const courses = {
  listItems: () => {
    return http.get("QuanLyKhoaHoc/LayDanhMucKhoaHoc");
  },
};
