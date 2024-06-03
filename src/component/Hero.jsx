import React from "react";
import image from "../assets/images/Rectangle 48.png";
import BaseButton from "./base/BaseButton";
import Header from "./Header";
import HeroImg from "../assets/images/Hero.png";
import Phone from "../assets/images/phones.png";

const Hero = () => {
  return (
    <>
      {/* <Header /> */}

      <div className="heroMain">
        <img src={HeroImg} alt="Hero Section Image" />

        <div className="heroText">
          <h2 className="h2">Food App</h2>

          <h1 className="h1 font-poppins">
            Why stay hungry when you can order from Bella Onojie
          </h1>

          <h3 className="h3">Download the bella onoje's food app now on</h3>

          <div className="btnCenter">
            <BaseButton />
            <BaseButton buttonText={"App Store"} variant={"btnSecondary"} />
          </div>
        </div>
      </div>

      <div>
        <div className="heroBody">
          <img src={Phone} alt="Phone Images" className="heroImage" />
        </div>

        <div className="heroBorder" />
      </div>
    </>
  );
};

export default Hero;

// baackup
// import React from 'react'
// import backgroundImage from "../assets/images/Hero.png"
// import BaseButton from './base/BaseButton'

// const Hero = () => {
//   return (
//     <section className='heroMain'>
//       <img src={backgroundImage} alt='hero bg-img' className='heroImg'/>
//       <div className='heroText'>
//           <h2 className='h2'>Food app</h2>
//           <h1 className='h1 font-poppins'>Why stay hungry when you can order from Bella Onojie</h1>
//           <h3 className='h3'>Download the bella onoje's food app now on</h3>
//           <div className='btnLayout'>
//           <BaseButton type={"button"}/>
//           <BaseButton variant={'btnSecondary'} buttonText={"App Store"}/>
//           </div>
//       </div>
//     </section>
//   )
// }

// export default Hero