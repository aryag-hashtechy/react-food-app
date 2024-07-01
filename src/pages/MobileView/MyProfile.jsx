import React, { useState } from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import UserProfile from "../../component/UserProfile";
import ProfileMenu from "../../component/ProfileMenu";
import BaseButton from "../../component/base/BaseButton";
import { parseCookies } from "nookies";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiPath from "../../apiPath";

const MyProfile = () => {
  const navigate = useNavigate();
  const cookies = parseCookies();
  const [userData, setUserData] = useState({});

  const handleFetch = async () => {
    try {
      const response = await axios.get(apiPath.getUser, {
        headers: {
          Authorization: cookies.accessToken
            ? `Bearer ${cookies.accessToken}`
            : "",
        },
      });
      if (response && response?.status === 200) {
        setUserData(response?.data?.data);
      } else {
        console.log(response?.data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

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

        <UserProfile
          userProfile={userData?.userProfile}
          fullName = { userData?.fullName}
          email = {userData?.email}
          mobileNumber = { userData?.mobileNumber }
          address = {userData?.Addresses}
        />

        <div className="profile__menu__container">
          <ProfileMenu text={"Orders"} navigateTo={"#"} />
          <ProfileMenu text={"Address"} navigateTo={"/address"} />
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
