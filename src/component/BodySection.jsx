import React from "react";
import bodyImg1 from "../assets/images/image 15.png";
import bodyImg2 from "../assets/images/image 16.png";
import bodyImg3 from "../assets/images/image 17.png";

const BodySection = () => {
  return (
    <section className="main-section">
      <h3 className="body-heading">How the app works</h3>

      <div className="section-body small-container md:large-container">
        <div className="image-layout">
          <img src={bodyImg1} alt="img-1" className="section-img" />
        </div>

        <div className="section-text">
          <h4 className="section-small">Create an account</h4>
          <h2 className="section-large">
            Create/login to an existing account to get started
          </h2>
          <h4 className="section-medium">
            An account is created with your email and a desired password
          </h4>
        </div>
      </div>

      <div className="section-body small-container md:large-container">
        <div className="section-text lg:ml-32">
          <h4 className="section-small">Explore varities</h4>
          <h2 className="section-large">
            Shop for your favourites meal as e dey hot.
          </h2>
          <h4 className="section-medium">
            When you done check out and get it delivered with ease.
          </h4>
        </div>

        <div className="image-layout">
          <img src={bodyImg2} alt="img-2" className="section-img" />
        </div>
      </div>

      <div className="section-body small-container lg:large-container">
        <div className="image-layout">
          <img src={bodyImg3} alt="img-3" className="section-img" />
        </div>

        <div className="section-text">
          <h4 className="section-small">Create an account</h4>
          <h2 className="section-large">
            Create/login to an existing account to get started
          </h2>
          <h4 className="section-medium">
            An account is created with your email and a desired password
          </h4>
        </div>
      </div>
    </section>
  );
};

export default BodySection;
