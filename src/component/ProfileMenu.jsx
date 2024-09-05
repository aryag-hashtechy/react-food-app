import React from "react";
import { useNavigate } from "react-router-dom";
import frontIcon from "../assets/icons/front-icon.svg";

const ProfileMenu = ({ text, navigateTo, handleLogout }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (handleLogout) {
      handleLogout();
    } else if (navigateTo) {
      return navigate(navigateTo);
    }
  };

  return (
    <div
      className="profile__option"
      onClick={() => handleClick()}
    >
      <p>{text ? text : "text"}</p>
      <img
        src={frontIcon}
        alt="front-icon"
        className="profile__option--image"
      />
    </div>
  );
};

export default ProfileMenu;
