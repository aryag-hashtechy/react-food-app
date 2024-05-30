import React from 'react'
import backgroundImage from "../assets/images/Hero.svg"
import BaseButton from './base/BaseButton'

const Hero = () => {
  return (
    <section className='hero-main'>
      <img src={backgroundImage} alt='hero bg-img' className='hero-img'/>
      <div className='hero-text'>
          <h2 className='h2'>Food app</h2>
          <h1 className='h1 font-poppins'>Why stay hungry when you can order from Bella Onojie</h1>
          <h3 className='h3'>Download the bella onoje's food app now on</h3>
          <div className='btn-layout'>
          <BaseButton type={"button"}/>
          <BaseButton variant={'btn-secondary'} buttonText={"App Store"}/>
          </div>
      </div>
    </section>
  )
}

export default Hero
