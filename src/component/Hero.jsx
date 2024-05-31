import React from 'react'
import backgroundImage from "../assets/images/Hero.png"
import BaseButton from './base/BaseButton'

const Hero = () => {
  return (
    <section className='heroMain'>
      <img src={backgroundImage} alt='hero bg-img' className='heroImg'/>
      <div className='heroText'>
          <h2 className='h2'>Food app</h2>
          <h1 className='h1 font-poppins'>Why stay hungry when you can order from Bella Onojie</h1>
          <h3 className='h3'>Download the bella onoje's food app now on</h3>
          <div className='btnLayout'>
          <BaseButton type={"button"}/>
          <BaseButton variant={'btnSecondaryOrange'} buttonText={"App Store"}/>
          </div>
      </div>
    </section>
  )
}

export default Hero
