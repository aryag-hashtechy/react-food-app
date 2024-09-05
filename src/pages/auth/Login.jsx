import React, { useState } from "react";
import image from "../../assets/images/Group 3.png";
import BaseInput from "../../component/base/BaseInput";
import BaseButton from "../../component/base/BaseButton";
import BaseFloatingInput from "../../component/base/BaseFloatingInput";
import endPoints from "../../common/endPoints";
import { setCookie } from "nookies";
import { createWishlist } from "../../feature/wishlist/wishlistSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleToast } from "../../lib/GlobalMethods";
import Toast from "../../component/MobileView/Toast";
import * as Yup from "yup";
import axiosProvider from "../../common/axiosProvider";
import { createCart } from "../../feature/cart/cartSlice";

// GlobalValidation object
const GlobalValidation = {
  email: Yup.string()
    .email()
    .required("Email is Required!"),
  password: Yup.string()
    .required("Password is Required!")
    .min(8, "Password should be 8 chars minimum.")
    .max(16, "Password should be 16 chars maximum.")
    .matches(/[a-zA-Z]/, "Password should contain at least one character")
    .matches(/[0-9]/, "Password should contain Numbers")
    .matches(/[^\w]/, "Password requires a special character"),
};

const signupSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is require")
    .matches(
      /^(?=.{1,25}$)[a-zA-Z]+(?: [a-zA-Z]+)?$/,
      "Please Enter valid Full Name"
    ),
  email: GlobalValidation.email,
  password: GlobalValidation.password,
  confirmPassword: Yup.string()
    .required("Confirm Password is Required!")
    .oneOf([Yup.ref("password"), null], "Passwords Must Match"),
  mobileNumber: Yup.string()
    .required("Mobile Number is required")
    .matches(/^[6-9]\d{0,9}$|^$/, "Please Enter Valid Number"),
});

const signinSchema = Yup.object().shape({
  email: GlobalValidation.email,
  password: GlobalValidation.password,
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, setLogin] = useState(true);
  const [initialValue, setInitialValue] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);
  const [toast, setToast] = useState({
    message: null,
    type: null,
    isVisible: false,
  });

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setInitialValue((draft) => ({
      ...draft,
      [name]: value,
    }));

    if (e?.target?.files) {
      const image = e?.target?.files[0];
      setInitialValue((draft) => ({
        ...draft,
        [name]: image,
      }));
    }
  };

  const validate = async (e) => {
    try {
      e.preventDefault();
      const validateSchema = login ? signinSchema : signupSchema;
      await validateSchema.validate(initialValue, { abortEarly: false });
      setErrorMessage(false);
      handleSubmit(e);
    } catch (err) {
      let obj = {};
      err.inner.forEach((fieldError) => {
        obj[fieldError.path] = fieldError.message;
        setErrorMessage(obj);
      });
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const data = new FormData();
      for (const key in initialValue) {
        data.append(key, initialValue[key]);
      }

      const path = login ? endPoints.signIn : endPoints.signup;
      const userData = login ? initialValue : data;
      const response = await axiosProvider({
        method: "POST",
        apiURL: path,
        bodyData: userData,
        navigate,
      });

      if (response && response?.status === 200) {
        if(login){
          setCookie(null, "accessToken", response?.data?.data?.accessToken, {
            maxAge: 24 * 60 * 60,
            path: "/",
          });

          dispatch(createWishlist(response.data.wishlist));
  
          dispatch(createCart(response.data.cart))
  
          handleToast( setToast, response, "/dashboard", navigate);
        }else{
          handleToast(setToast, response)
          setTimeout(() => {
            setLogin(true)
            setInitialValue({})
          },2300)
        }
      }
    } catch (err) {
      if (err?.response) {
        handleToast(setToast, err.response);
      } else {
        console.error(err);
      }
    }
  };

  const handleLoginClick = () => {
    setLogin(true);
    setErrorMessage(false);
    setInitialValue({});
  };

  const handleSignUpClick = () => {
    setLogin(false);
    setErrorMessage(false);
    setInitialValue({});
  };

  return (
    <>
      {toast?.isVisible && <Toast type={toast.type} message={toast.message} />}
      {login ? (
        <form onSubmit={validate}>
          <section className="login__main">
            <div className="login__image">
              <img src={image} alt="logo" className="image" />

              <div className="login__page ">
                <p className="login__text" onClick={handleLoginClick}>
                  Login
                </p>

                <p className="signup-text" onClick={handleSignUpClick}>
                  Sign-up
                </p>
              </div>
            </div>

            <div className="mobile__container">
              <div>
                <BaseFloatingInput
                  name="email"
                  id="email"
                  inputType="email"
                  labelText="Email Address"
                  handleChange={handleChange}
                  errorMessage={errorMessage}
                  value={initialValue}
                />

                <BaseFloatingInput
                  name="password"
                  id="password"
                  inputType="password"
                  labelText="Password"
                  handleChange={handleChange}
                  errorMessage={errorMessage}
                  value={initialValue}
                />
              </div>
              <div>
                <p className="login__forgot__password">Forgot Password?</p>
              </div>

              <div className="login__btn__main">
                <BaseButton
                  buttonText="Login"
                  variant="btn btn--primary--mobile"
                />
              </div>
            </div>
          </section>
        </form>
      ) : (
        <form onSubmit={validate} encType="multipart/form-data">
          <section className="signup__main">
            <div className="signup__card">
              <img src={image} alt="logo" className="signup__card__logo" />

              <div className="signup__card__content ">
                <p className="signup__login__text" onClick={handleLoginClick}>
                  Login
                </p>

                <p className="signup__text" onClick={handleSignUpClick}>
                  Sign-up
                </p>
              </div>
            </div>
            <div className="mobile__container">
              <div>
                <BaseInput
                  labelText="Profile pic"
                  labelVariant="label--primary"
                  inputType="file"
                  name={"userProfile"}
                  handleChange={handleChange}
                  inputVariant="w-[80%] ml-8 mt-6 mb-4"
                />

                <BaseFloatingInput
                  name="email"
                  id="email"
                  inputType="email"
                  labelText="Email Address"
                  handleChange={handleChange}
                  errorMessage={errorMessage}
                  value={initialValue}
                />

                <BaseFloatingInput
                  name="fullName"
                  id="fullName"
                  inputType="text"
                  labelText="Full Name"
                  handleChange={handleChange}
                  errorMessage={errorMessage}
                  value={initialValue}
                />

                <BaseFloatingInput
                  name={"mobileNumber"}
                  id={"mobileNumber"}
                  inputType={"text"}
                  labelText={"Mobile Number"}
                  handleChange={handleChange}
                  errorMessage={errorMessage}
                  value={initialValue}
                />

                <BaseFloatingInput
                  name="password"
                  id="password"
                  inputType="password"
                  labelText="Password"
                  handleChange={handleChange}
                  errorMessage={errorMessage}
                  value={initialValue}
                />

                <BaseFloatingInput
                  name="confirmPassword"
                  id="confirmPassword"
                  inputType="password"
                  labelText="Re-enter Password"
                  handleChange={handleChange}
                  errorMessage={errorMessage}
                  value={initialValue}
                />
              </div>

              <div>
                <p className="login__forgot__password">Forgot Password?</p>
              </div>

              <div className="login__btn__main">
                <BaseButton
                  buttonText="Signup"
                  variant="btn btn--primary--mobile"
                />
              </div>
            </div>
          </section>
        </form>
      )}
    </>
  );
};

export default Login;
