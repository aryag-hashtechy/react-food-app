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
        <section className="login__main">
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
              />

              <BaseFloatingInput
                name="password"
                id="password"
                inputType="password"
                labelText="Password"
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
            <div>
              <BaseInput
                labelText="Profile pic"
                labelVariant="label--primary"
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
      )}
    </>
  );
};

export default Login;
