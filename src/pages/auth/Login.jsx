import React, { useState } from "react";
import image from "../../assets/images/Group 3.png";
import BaseInput from "../../component/base/BaseInput";
import BaseButton from "../../component/base/BaseButton";
import BaseFloatingInput from "../../component/base/BaseFloatingInput";

const Login = () => {
  const [login, setLogin] = useState(true);
  const handleLoginClick = () => {
    setLogin(true);
  };
  const handleSignUpClick = () => {
    setLogin(false);
  };

  return (
    <>
      {login ? (
        <section className="login-main">
          <div className="login-image">
            <img src={image} className="image" />

            <div className="login-page ">
              <p className="login-text" onClick={handleLoginClick}>
                Login
              </p>
              <p className="signup-text" onClick={handleSignUpClick}>
                Sign-up
              </p>
            </div>
          </div>
          <div className="mt-8">
            <BaseFloatingInput
              name="email"
              id="email"
              inputType="email"
              labelText="Email Address "
            />
            <BaseFloatingInput
              name="password"
              id="password"
              inputType="password"
              labelText="Password"
            />
          </div>
          <div>
            <p className="forgot-password">Forgot Password?</p>
          </div>
          <div className="btn-main">
            <BaseButton buttonText="Login" variant="btn-primary-mobile" />
          </div>
        </section>
      ) : (
        <section className="signup-main">
          <div className="signup-card">
            <img src={image} className="signup-card-logo" />
            <div className="signup-card-content ">
              <p className="signup-login-text" onClick={handleLoginClick}>
                Login
              </p>
              <p className="signup-signup-text" onClick={handleSignUpClick}>
                Sign-up
              </p>
            </div>
            <div>
              <BaseInput
                labelText="Profile pic"
                labelVariant="label-primary mt-8 pl-8"
                inputType="file"
                inputVariant="w-[80%] ml-8 mt-6 mb-4"
              />
              <BaseFloatingInput
                name="email"
                id="email"
                inputType="text"
                labelText="Email Address"
              />
              <BaseFloatingInput
                name="full name"
                id="full name"
                inputType="text"
                labelText="Full Name"
              />
              <BaseFloatingInput
                name="password"
                id="password"
                inputType="password"
                labelText=" Password"
              />
              <BaseFloatingInput
                name="re-password"
                id="re-password"
                inputType="password"
                labelText="Re-enter Password"
              />
            </div>
            <div>
              <p className="forgot-password">Forgot Password?</p>
            </div>
            <div className="btn-main">
              <BaseButton buttonText="Signup" variant="btn-primary-mobile" />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
