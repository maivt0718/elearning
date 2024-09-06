import { http } from "./config";

export const courses = {
  listItems: () => {
    return http.get("QuanLyKhoaHoc/LayDanhMucKhoaHoc");
  },
  getListCourses: () =>{
    return http.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
  }
};
