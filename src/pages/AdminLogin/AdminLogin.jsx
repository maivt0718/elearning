import React, { useContext } from "react";
import InputCustom from "../../components/InputCustom/InputCustom";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import { useFormik } from "formik";
import { auth } from "../../services/config";
import { users } from "../../services/auth.service";
import { NotificationContext } from "../../App";
import { getLS, setLS } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setInfo } from "../../redux/authSlice";

const AdminLogin = () => {
  const { showNotification } = useContext(NotificationContext);
  const navigation = useNavigate()
  const dispatch = useDispatch()
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      users
        .checkUser(values)
        .then((res) => {
          if (res.data.content.user.role == "USER") {
            showNotification(`No permission to access`, `error`);
            let violateCount = getLS("violateCount");
            if (!violateCount) {
              setLS("violateCount", 1);
            } else {
              violateCount++;
              violateCount == 3 ? navigation("/"):setLS("violateCount", violateCount)
            }
          }
          else{
            setLS("user", res.data.content)
            dispatch(setInfo(res.data.content))
            navigation(`/admin`)
          }
        })
        .catch((err) => {
          showNotification("Some issues happen, please contact administrator", `error`)
        });
    },
  });
  return (
    <div>
      <div className="admin_login flex justify-center m-10 h-screen">
        <div className="admin_login_image w-1/2"></div>
        <div className="admin_login_form w-1/2">
          <h1 className="text-3xl text-black font-bold">Login for admin</h1>
          <form onSubmit={handleSubmit}>
            <InputCustom
              onChange={handleChange}
              label="Account/Email"
              classWrapper={`py-3`}
              classNameLabel="text-pink-500"
              name={`email`}
              value={values.email}
              type="email"
            />
            <InputCustom
              onChange={handleChange}
              label="Password"
              type="password"
              classNameLabel="text-pink-500"
              name={`password`}
              value={values.password}
            />
            <div className="admin_login_btn">
              <ButtonCustom
                content={`Log in`}
                bgColor="bg-pink-500"
                type={"submit"}
                classname={`my-3 p-2 w-full`}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
