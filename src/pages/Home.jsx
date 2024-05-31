import React from 'react'
import Hero from '../component/Hero'
import BodySection from '../component/BodySection'

const Home = () => {
  return (
    <div>
      <Hero />
      <h3 className='bodyHeading'>How the app works</h3>
      <BodySection />
    </div>
  )
}

export default Home
