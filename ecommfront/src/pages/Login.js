import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../componenets/BreadCrumb";
import Meta from "../componenets/Meta";
import Container from "../componenets/Container";
import { useDispatch, useSelector } from "react-redux";

import CustomInput from "../componenets/CustomInput";
import * as yup from "yup"
import { useFormik } from 'formik'
import { loginUser } from "../features/user/userSlice";

const loginSchema = yup.object({

  email:yup.string().email("email should be valid").required("Email Adress is required"),
  password:yup.string().required("Paasword is required")
});


const Login = () => {
  const dispatch=useDispatch();
  const formik = useFormik({
    initialValues:{

      email:"",
      password:"",

    },
    validationSchema:loginSchema,
    onSubmit:(values)=>{
        dispatch(loginUser(values)); 
    }
  })
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <Container className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" 
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
                value={formik.values.email}/>
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  value={formik.values.password}
                />

                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>

                <div>
                  <Link to="/forgot-password" className="button2">Forgot Password?</Link>

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/signup" className="button signup">
                      SignUp
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;