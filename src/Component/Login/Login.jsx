import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { baseUrl } from "../../Utilits/BaseUrl.js";
import { useNavigate } from "react-router-dom";
export default function Login() {
  let navigate = useNavigate();
  const [errorFromDataBase, seterrorFromDataBase] = useState("");
  const [isLoading, setisLoading] = useState(false);
  let validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .matches(
        /^.{6,}$/,
        "at least 6 charchter"
      )
      .required()
  });
  const LoginFormik = useFormik({
    initialValues: {
    
      email: "",
      password: "",
    
    },
    validationSchema,
    onSubmit: async (values) => {
      setisLoading(true);
      await axios
        .post(`${baseUrl}/auth/signin`, values)
        .then((data) => {
          setisLoading(false);
          localStorage.setItem('userToken',data.data.token)

          navigate("/ ");
        })
        .catch((err) => {
          seterrorFromDataBase(err.response.data.message);
          setisLoading(false);
        });
    }
  });
  console.log(LoginFormik.errors);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 imgGaming   "></div>
          <div className="col-md-6 registrationForm bg-dark rounded-2 p-2">
            <p className="fs-2 fw-bold mb-5 text-center">Sign IN</p>
            {errorFromDataBase && (
              <div className="alert alert-danger p-2 text-center">
                {" "}
                {errorFromDataBase}
              </div>
            )}
            <form onSubmit={LoginFormik.handleSubmit}>
          
              <input
                onBlur={LoginFormik.handleBlur}
                value={LoginFormik.values.email}
                onChange={LoginFormik.handleChange}
                name="email"
                type="email"
                placeholder="email"
                className="form-control fs-5 btn btn-secondary mt-5 bg-dark "
              />
              {LoginFormik.errors.email && LoginFormik.touched.email && 
                <div className="text-danger ms-4 p-0">
                  {LoginFormik.errors.email}
                </div>
              }
              <input
                onBlur={LoginFormik.handleBlur}
                value={LoginFormik.values.password}
                onChange={LoginFormik.handleChange}
                placeholder="password"
                name="password"
                type="password"
                className="form-control fs-5 mt-4  btn btn-secondary bg-dark w-100 me-3"
              />
              {LoginFormik.errors.password && LoginFormik.touched.password && (
                <div className="text-danger ms-4 p-0">
                  {LoginFormik.errors.password}
                </div>
              )}
         
              {isLoading && (
                <button className="btn border  border-secondary btn-secondary w-100 text-dark fw-bolder mt-4 mb-3 fs-3 bg-info ">
                  Loading ...{" "}
                </button>
              )}
              {!isLoading && (
                <button
                  disabled={!(LoginFormik.isValid && LoginFormik.dirty)}
                  className="btn border  border-secondary btn-secondary w-100 text-dark fw-bolder mt-4 mb-3 fs-3 bg-info "
                >
                  {" "}
                  sign in{" "}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
