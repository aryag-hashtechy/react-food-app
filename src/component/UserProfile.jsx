import React from "react";
import profileIcon from "../assets/icons/profileIcon.svg";

const UserProfile = ({
  userProfile,
  fullName,
  email,
  inputRef,
  handleSubmit,
}) => {
  const handleKeyPress = (e) => {
    const { ariaLabel, innerText } = e?.target;

    if (e?.key === "Enter") {
      e.preventDefault();
      handleSubmit(ariaLabel, innerText);
    }
  };

  return (
    <div className="profile__layout">
      <img
        src={userProfile ? `http://localhost:5000${userProfile}` : profileIcon}
        alt="profile-pic"
        className="profile__image"
      />

      <div className="profile__content">
        <p
          contentEditable
          aria-label="fullName"
          onBlur={(e) => handleSubmit(e.target.ariaLabel, e.target.innerText)}
          onKeyDown={(e) => handleKeyPress(e)}          
          ref={inputRef}
          suppressContentEditableWarning
        >
          {fullName ? fullName : "Marvis Ighedosa"}
        </p>

        <p>
          {email ? email : "Dosamarvis@gmail.com"}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
