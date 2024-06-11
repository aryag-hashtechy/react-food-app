import React from "react";
import backIcon from "../assets/icons/back-icon.svg";
import UserProfile from "../component/UserProfile";
import ProfileMenu from "../component/ProfileMenu";
import BaseButton from "../component/base/BaseButton";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const navigate = useNavigate();
  return (
    <section className="profile__main">
      <div className="mobile__container">
        <img
          src={backIcon}
          alt="back-icon"
          className="profile__back--icon"
          onClick={() => navigate("/dashboard")}
        />

        <p className="profile__header">My profile</p>

        <div className="profile__text__container">
          <p>Personal details</p>
          <p>change</p>
        </div>

        <UserProfile />

        <div className="profile__menu__container">
          <ProfileMenu text={"Orders"} navigateTo={"#"} />
          <ProfileMenu text={"Pending reviews"} navigateTo={"#"} />
          <ProfileMenu text={"Faq"} navigateTo={"#"} />
          <ProfileMenu text={"Help"} navigateTo={"#"} />
        </div>

        <BaseButton
          buttonText={"Update"}
          variant={"btn btn--primary--mobile"}
        />
      </div>
    </section>
  );
};

export default MyProfile;
