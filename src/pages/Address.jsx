import React, { useState } from "react";
import AddressCard from "../component/AddressCard";
import backIcon from "../assets/icons/back-icon.svg";
import axios from "axios";
import { useEffect } from "react";
import { parseCookies } from "nookies";
import { useNavigate } from "react-router-dom";
import BaseButton from "../component/base/BaseButton";
import apiPath from "../apiPath";
import Toast from "../component/MobileView/Toast";
import axiosProvider from "../common/axiosProvider";

const Address = () => {
  const [addressData, setAddressData] = useState();
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const cookies = parseCookies();

  const [toast, setToast] = useState({
    visible: true,
    message: "",
    type: "failure",
  });

  const handleDelete = async (id, e) => {
    try {
      let headers = {
        Authorization: `Bearer ${cookies.accessToken}`,
      };

      const response = await axiosProvider({
        method: "DELETE",
        apiURL: apiPath.deleteAddress + id,
        headers,
      });

      if (response && response?.status === 200) {
        fetchAddressData();
      }
    } catch (error) {
      return error;
    }
  };

  const fetchAddressData = async () => {
    try {
      const response = await axiosProvider({ method: "GET", apiURL: `${apiPath.getAllAddress}` , navigate})
      if( response && response?.status === 200){
        setAddressData(response?.data?.data);
        setCount(response?.data?.dataCount)
      }
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchAddressData();
  }, []);

  return (
    <>
      <section className="addressList__main">
        <div className="mobile__container">
          <div className="addressList__header">
            <img
              src={backIcon}
              alt="back-icon"
              className="addressList__img"
              onClick={() => navigate("/my-profile")}
            />

            <p className="addressList__text">Address</p>
          </div>

          <div className="addressList_btn">
            <BaseButton
              onClick={() => { count < 5 ? navigate("/address-page") : <></>}}
              variant={"btn btn--primary-small"}
              buttonText={"Add Address"}
            />
          </div>

          {addressData &&
            addressData?.map((data) => (
              <AddressCard
                id={data?.id}
                address={data?.addressLine1}
                city={data?.city}
                pincode={data?.pincode}
                handleDelete={handleDelete}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default Address;
