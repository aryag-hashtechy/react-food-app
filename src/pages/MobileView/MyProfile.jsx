import React, { useState } from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import UserProfile from "../../component/UserProfile";
import ProfileMenu from "../../component/ProfileMenu";
import BaseButton from "../../component/base/BaseButton";
import { useEffect } from "react";
import { clearCart } from "../../feature/cart/cartSlice";
import { clearWishlist } from "../../feature/wishlist/wishlistSlice";
import { useNavigate } from "react-router-dom";
import endPoints from "../../common/endPoints";
import axiosProvider from "../../common/axiosProvider";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import nookies, { parseCookies } from "nookies";

const MyProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const cookies = parseCookies();

  const handleFetch = async () => {
    try {
      const response = await axiosProvider({
        method: "GET",
        apiURL: endPoints.getUser,
        navigate,
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

  const handleSubmit = async (name, value) => {
    try {
      let path = endPoints.updateUser;

      const response = await axiosProvider({
        method: "PATCH",
        apiURL: path,
        bodyData: { [name]: value },
        navigate,
      });

      if (response?.status === 200) {
        console.log(response?.data?.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    nookies.destroy({}, "accessToken");
    dispatch(clearCart());
    dispatch(clearWishlist());
    navigate("/auth/login");
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
          <p onClick={() => inputRef.current.focus()}>change</p>
        </div>

        <UserProfile
          userProfile={userData?.userProfile}
          fullName={userData?.fullName}
          email={userData?.email}
          address={userData?.Addresses}
          handleSubmit={handleSubmit}
          inputRef={inputRef}
        />

        <div className="profile__menu__container">
          <ProfileMenu text={"Orders"} />
          <ProfileMenu text={"Address"} navigateTo={"/address"} />
          {cookies?.accessToken && (
            <ProfileMenu text={"Log Out"} handleLogout={handleLogout} />
          )}
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
