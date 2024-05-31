import React from 'react'
import bodyImg1 from "../assets/images/image 15.png"
import bodyImg2 from "../assets/images/image 16.png"
import bodyImg3 from "../assets/images/image 17.png"

const BodySection = () => {
  return (
    <>
    <section className='largeContainer'>
     <div className='sectionBody'>

        <div className='imageLayout'>
        <img src={bodyImg1} alt="img-1" className='sectionImages'/>
        </div>

        <div className='sectionText'>
            <h4 className='sectionSmall'>Create an account</h4>
            <h2 className='sectionLarge'>Create/login to an existing account to get started</h2>
            <h4 className='sectionMedium'>An account is created with your email and a desired password</h4>
        </div>
    </div>   
    </section>

    <section className='largeContainer'>
     <div className='sectionBody'>
        <div className='sectionText pl-20'>
            <h4 className='sectionSmall'>Explore varities</h4>
            <h2 className='sectionLarge'>Shop for your favourites meal as e dey hot.</h2>
            <h4 className='sectionMedium'>When you done check out and get it delivered with ease.</h4>
        </div>

        <div className='imageLayout'>
        <img src={bodyImg2} alt="img-1" className="sectionImage"/>
        </div>
    </div>   
    </section>

    <section className='largeContainer'>
     <div className='sectionBody'>
        <div className='imageLayout'>
        <img src={bodyImg3} alt="img-1" className="sectionImage"/>
        </div>

        <div className='sectionText'>
            <h4 className='sectionSmall'>Create an account</h4>
            <h2 className='sectionLarge'>Create/login to an existing account to get started</h2>
            <h4 className='sectionMedium'>An account is created with your email and a desired password</h4>
        </div>
    </div>   
    </section>
    </>
  )
}

export default BodySection
