import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg"

const Header = () => {
  return (
    <>
      <header className='headerMain'>
        <img src={Logo} alt="logo" className='headerLogo'/>

        <ul className='headerItems'>
            <li className='headerLinks'><Link to="#">Home</Link></li>
            <li className='headerLinks'><Link to="#">Product</Link></li>
            <li className='headerLinks'><Link to="#">Faq</Link></li>
            <li className='headerLinks'><Link to="#">Contact</Link></li>
        </ul>
      </header>
    </>
  )
}

export default Header
