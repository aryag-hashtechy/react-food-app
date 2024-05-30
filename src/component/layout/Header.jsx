import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg"
const Header = () => {
  return (
    <>
      <header className='header-main'>
        <img src={Logo} alt="logo" className='header-logo'/>
        <ul className='header-items'>
            <li className='header-links'><Link to="#">Home</Link></li>
            <li className='header-links'><Link to="#">Product</Link></li>
            <li className='header-links'><Link to="#">Faq</Link></li>
            <li className='header-links'><Link to="#">Contact</Link></li>
        </ul>
      </header>
    </>
  )
}

export default Header
