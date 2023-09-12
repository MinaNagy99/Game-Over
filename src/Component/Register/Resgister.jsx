import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { baseUrl } from "../../Utilits/BaseUrl.js";
import { useNavigate } from "react-router-dom";
export default function Resgister() {
  let navigate = useNavigate();
  const [errorFromDataBase, seterrorFromDataBase] = useState("");
  const [isLoading, setisLoading] = useState(false);
  let validationSchema = yup.object({
    name: yup.string().min(3).required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .matches(
        /^.{6,}$/,
        "at least 6 charchter"
      )
      .required(),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password")], "not match the password")
      .required()
  });
  const RegisterFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: ""
    },
    validationSchema,
    onSubmit: async (values) => {
      setisLoading(true);
      await axios
        .post(`${baseUrl}/auth/signup`, values)
        .then((data) => {
          setisLoading(false);
          navigate("/login");
        })
        .catch((err) => {
          seterrorFromDataBase(err.response.data.message);
          setisLoading(false);
        });
    }
  });
  console.log(RegisterFormik.errors);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 imgGaming   "></div>
          <div className="col-md-6 registrationForm bg-dark rounded-2 p-2">
            <p className="fs-2 fw-bold text-center">create Account</p>
            {errorFromDataBase && (
              <div className="alert alert-danger p-2 text-center">
                {" "}
                {errorFromDataBase}
              </div>
            )}
            <form onSubmit={RegisterFormik.handleSubmit}>
              <input
                onBlur={RegisterFormik.handleBlur}
                value={RegisterFormik.values.name}
                onChange={RegisterFormik.handleChange}
                name="name"
                type="text"
                placeholder="name"
                className="form-control fs-5   btn btn-secondary mt-1 bg-dark  "
              />
              {RegisterFormik.errors.name && RegisterFormik.touched.name && 
                <p className="text-danger ms-4 p-0">
                  {RegisterFormik.errors.name}
                </p>
              }
              <input
                onBlur={RegisterFormik.handleBlur}
                value={RegisterFormik.values.email}
                onChange={RegisterFormik.handleChange}
                name="email"
                type="email"
                placeholder="email"
                className="form-control fs-5 btn btn-secondary mt-4 bg-dark "
              />
              {RegisterFormik.errors.email && RegisterFormik.touched.email && 
                <div className="text-danger ms-4 p-0">
                  {RegisterFormik.errors.email}
                </div>
              }
              <input
                onBlur={RegisterFormik.handleBlur}
                value={RegisterFormik.values.password}
                onChange={RegisterFormik.handleChange}
                placeholder="password"
                name="password"
                type="password"
                className="form-control fs-5 mt-4  btn btn-secondary bg-dark w-100 me-3"
              />
              {RegisterFormik.errors.password && RegisterFormik.touched.password && (
                <div className="text-danger ms-4 p-0">
                  {RegisterFormik.errors.password}
                </div>
              )}
              <input
                onBlur={RegisterFormik.handleBlur}
                value={RegisterFormik.values.rePassword}
                onChange={RegisterFormik.handleChange}
                name="rePassword"
                type="password"
                placeholder="rePassword"
                className="form-control fs-5 mt-4  btn btn-secondary bg-dark w-100 me-3"
              />
              {RegisterFormik.errors.rePassword && RegisterFormik.touched.rePassword && (
                <div className="text-danger ms-4 p-0">
                  {RegisterFormik.errors.rePassword}
                </div>
              )}{" "}
              {isLoading && (
                <button className="btn border  border-secondary btn-secondary w-100 text-dark fw-bolder mt-4 mb-3 fs-3 bg-info ">
                  Loading ...{" "}
                </button>
              )}
              {!isLoading && (
                <button
                  disabled={!(RegisterFormik.isValid && RegisterFormik.dirty)}
                  className="btn border  border-secondary btn-secondary w-100 text-dark fw-bolder mt-4 mb-3 fs-3 bg-info "
                >
                  {" "}
                  sign up{" "}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
