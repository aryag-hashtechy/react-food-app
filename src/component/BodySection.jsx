import React from "react";
import bodyImg1 from "../assets/images/image 15.png";
import bodyImg2 from "../assets/images/image 16.png";
import bodyImg3 from "../assets/images/image 17.png";

const BodySection = () => {
  return (
    <section className="section__main main__container">
      <h3 className="section__heading">How the app works</h3>

      <div className="section__border" />

      <div className="section__body">
        <div className="image__layout">
          <img src={bodyImg1} alt="img-1" className="section__img" />
        </div>

        <div className="section__text">
          <h4 className="section__small">Create an account</h4>

          <h2 className="section__large">
            Create/login to an existing account to get started
          </h2>

          <h4 className="section__medium">
            An account is created with your email and a desired password
          </h4>
        </div>
      </div>

      <div className="section__body">
        <div className="section__text--mid">
          <h4 className="section__small">Explore varities</h4>

          <h2 className="section__large">
            Shop for your favourites meal as e dey hot.
          </h2>

          <h4 className="section__medium">
            When you done check out and get it delivered with ease.
          </h4>
        </div>

        <div className="image__layout">
          <img src={bodyImg2} alt="img-2" className="section__img" />
        </div>
      </div>

      <div className="section__body">
        <div className="image__layout">
          <img src={bodyImg3} alt="img-3" className="section__img" />
        </div>

        <div className="section__text">
          <h4 className="section__small">Create an account</h4>

          <h2 className="section__large">
            Create/login to an existing account to get started
          </h2>

          <h4 className="section__medium">
            An account is created with your email and a desired password
          </h4>
        </div>
      </div>
    </section>
  );
};

export default BodySection;
