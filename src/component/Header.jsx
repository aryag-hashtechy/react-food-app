import React from 'react'
import Logo from '../assets/images/logo.svg'

const Header = () => {
  return (
    <header className='head-main'>
        <img className='head-img' src={Logo} alt="Logo" />
        <ul className='head-items'>
            <li className='active'>Home</li>
            <li>Product</li>
            <li>Faq</li>
            <li>Contact</li>
        </ul>
    </header>
  )
}

export default Header