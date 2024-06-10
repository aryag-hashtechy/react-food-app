import React from 'react'
import { useNavigate } from "react-router-dom";
import frontIcon from "../assets/icons/front-icon.svg"

const ProfileMenu = ({ text , navigateTo}) => {
 const navigate = useNavigate();

  return (
    <div className='profile__option'>
      <p>{ text ? text : "text" }</p>
      <img src={frontIcon} alt="front-icon" className='profile__option--img' onClick={()=>navigate(navigateTo)}/>
    </div>
  )
}

export default ProfileMenu;
