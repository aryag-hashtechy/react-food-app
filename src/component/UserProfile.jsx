import React from "react";
import profileIcon from "../assets/icons/profileIcon.svg";

const UserProfile = ( {userProfile, fullName, email, mobileNumber, address} ) => {

  return (
    <div className="profile__layout">
      <img src={ userProfile ? `http://localhost:5000${userProfile}` : profileIcon} alt="profile-pic" className="profile__image" />

      <div className="profile__content">
        <p>{fullName ? fullName : "Marvis Ighedosa"}</p>
        <p>{email ? email : "Dosamarvis@gmail.com" }</p>
        <p>{mobileNumber ?  +mobileNumber :  "9011039271" }</p>
        { address ? <p>{address[0].addressLine1}</p> : <p>No 15 uti street off ovie palace road effurun delta state</p> }
      </div>
    </div>
  );
};

export default UserProfile;
