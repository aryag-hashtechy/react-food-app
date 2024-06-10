import React from 'react'
import profileIcon from "../assets/icons/profileIcon.svg"

const UserProfile = () => {
  return (
    <div className='profile__layout'>
      <img src={profileIcon} alt="profile-pic" className='profile__img img--circular'/>
      
      <div className='profile__content'>
        <p>Marvis Ighedosa</p>
        <p>Dosamarvis@gmail.com</p>
        <p>+234 9011039271</p>
        <p>No 15 uti street off ovie palace road effurun delta state</p>
      </div>
    </div>
  )
}

export default UserProfile;