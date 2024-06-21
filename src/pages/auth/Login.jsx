import React, { useState } from "react";
import image from "../../assets/images/Group 3.png";
import BaseInput from "../../component/base/BaseInput";
import BaseButton from "../../component/base/BaseButton";
import BaseFloatingInput from "../../component/base/BaseFloatingInput";
import axios from "axios";
import { parseCookies, setCookie, destroyCookie } from "nookies";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [initialValues, setInitialValues] = useState({});

  const handleLoginClick = () => {
    setLogin(true);
  };

  const handleSignUpClick = () => {
    setLogin(false);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `http://localhost:5000/api/users/${login ? `signin` : `signup`}`,
        initialValues
      );
      console.log(response);

      // Set
      setCookie(null, "accessToken", response?.data?.data?.accessToken, {
        maxAge: 24 * 60 * 60,
        path: "/",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setInitialValues((draft) => ({
      ...draft,
      [name]: value,
    }));
  };

  console.log(initialValues);

  return (
    <>
      {login ? (
        <section className="login__main">
          <form onSubmit={handleSubmit}>
            <div className="login__image">
              <img src={image} className="image" />

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
                  labelText="Email Address "
                  handleChange={handleChange}
                />

                <BaseFloatingInput
                  name="password"
                  id="password"
                  inputType="password"
                  labelText="Password"
                  handleChange={handleChange}
                />
              </div>

              <div>
                <p className="login__forgot__password">Forgot Password?</p>
              </div>

              <div className="login__btn__main">
                <BaseButton
                  buttonText="Login"
                  variant="btn btn--primary--mobile"
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </form>
        </section>
      ) : (
        <section className="signup__main">
          <div className="signup__card">
            <img src={image} className="signup__card__logo" />

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
            <form onSubmit={handleSubmit}>
              <div>
                <BaseInput
                  labelText="Profile pic"
                  labelVariant="label--primary"
                  inputType="file"
                  inputVariant="w-[80%] ml-8 mt-6 mb-4"
                  handleChange={handleChange}
                />

                <BaseFloatingInput
                  name="email"
                  id="email"
                  inputType="text"
                  labelText="Email Address"
                  handleChange={handleChange}
                />

                <BaseFloatingInput
                  name="fullName"
                  id="fullName"
                  inputType="text"
                  labelText="Full Name"
                  handleChange={handleChange}
                />

                <BaseFloatingInput
                  name="password"
                  id="password"
                  inputType="password"
                  labelText=" Password"
                  handleChange={handleChange}
                />

                <BaseFloatingInput
                  name="re-password"
                  id="re-password"
                  inputType="password"
                  labelText="Re-enter Password"
                  handleChange={handleChange}
                />
              </div>

              <div>
                <p className="login__forgot__password">Forgot Password?</p>
              </div>

              <div className="login__btn__main">
                <BaseButton
                  buttonText="Signup"
                  variant="btn btn--primary--mobile"
                  onClick={handleSubmit}
                />
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
