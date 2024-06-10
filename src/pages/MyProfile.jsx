import React from 'react'
import backIcon from "../assets/icons/back-icon.svg"
import UserProfile from '../component/UserProfile'
import ProfileMenu from '../component/ProfileMenu'
import BaseButton from "../component/base/BaseButton"
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const navigate = useNavigate();

  return (
    <div className='mobile-container'>
      <img src={backIcon} alt="back-icon" className='profile__back--icon' onClick={()=>navigate("/dashboard")}/>
      
      <p className='profile header'>My profile</p>

      <div className='profile text-container'>
        <p>Personal details</p>
        <p>change</p>
      </div>

      <UserProfile />

      <div className='profile options--container'>
        <ProfileMenu text={"Orders"} navigateTo={"#"}/>
        <ProfileMenu text={"Pending reviews"} nevigateTo={"#"}/>
        <ProfileMenu text={"Faq"} nevigateTo={"#"}/>
        <ProfileMenu text={"Help"}/>
      </div>

      <BaseButton buttonText={"Update"} variant={"btn-primary-mobile"}/>
    </div>
  )
}

export default MyProfile
