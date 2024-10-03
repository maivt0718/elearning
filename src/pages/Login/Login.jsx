import { useLottie } from "lottie-react";
import React, { useContext, useState } from "react";
import login from "../../../src/assets/Login/login.json";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { setLS } from "../../utils/utils";
import { NotificationContext } from "../../App";
import { useDispatch } from "react-redux";
import { setInfo } from "../../redux/authSlice";
import InputCustom from "../../components/InputCustom/InputCustom";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import { users } from "../../services/auth.service";

const Login = () => {
  const {showNotification} = useContext(NotificationContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const options = {
    animationData: login,
    loop: true,
    style: {
      with: "400px",
      height: "300px",
    },
  };
  const {
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    values,
    setValues,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      users.checkUser(values).then((res) => {
        setLS("user", res.data.content.user)
        showNotification("Login Succeed !!!", "success", 2000)
        setTimeout(() => {
          navigate("/")
        }, 3000);
        
        dispatch(setInfo(res.data.content.user))
      }).then((err) => {
        console.log(err)
      })
      resetForm();
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please input your email").email("Please input your email with the correct format"),
      password: Yup.string().required("Please input your email")
    })
  });
  const { View } = useLottie(options);
  return (
    <div className="login_page h-screen">
      <div className="container h-full">
        <div className="login_content flex justify-center gap-2 ">
          <div className={`login_logo w-1/2`}>{View}</div>
          <form className="login_info w-1/2 space-y-8" onSubmit={handleSubmit}>
            <InputCustom
              classWrapper={`flex gap-2`}
              classNameInput={`h-full`}
              classNameLabel={`my-2 w-2/12`}
              label="Email"
              id={"email"}
              name={"email"}
              placeholder={"Please input your email"}
              type="email"
              value={values.email}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
              onChange={handleChange}
            />
            <InputCustom
              classWrapper={`flex gap-2 `}
              classNameInput={`h-full`}
              classNameLabel={`my-2 w-2/12`}
              label="Password"
              id={"password"}
              name={"password"}
              placeholder={"Please input your password"}
              type="password"
              value={values.password}
              onBlur={handleBlur}
              error={errors.password}
              touched={touched.password}
              onChange={handleChange}
            />
            <div className="flex gap-3">
              <ButtonCustom
                content={"Log in"}
                classname="w-1/4"
                bgColor="bg-pink-500"
                type={"submit"}
              />
              <NavLink to="/" className={`text-blue-600`}>
                Not having the account, click here
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
