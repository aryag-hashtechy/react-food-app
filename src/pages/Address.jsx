import React, { useState } from "react";
import AddressCard from "../component/AddressCard";
import backIcon from '../assets/icons/back-icon.svg';
import axios from "axios";
import { useEffect } from "react";
import { parseCookies } from "nookies";
import { useNavigate } from "react-router-dom";
import BaseButton from "../component/base/BaseButton";
import Toast from "../component/MobileView/Toast";
import axiosProvider from "../common/axiosProvider";
import apiPath from "../apiPath";

const Address = () => {
  const [addressData, setAddressData] = useState();
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const cookies = parseCookies();

  const fetchAddressData = async () => {
    try {
      // const response = await axios.get(
      //   "http://localhost:5000/api/address/getall-address",
      //   {
      //     headers: {
      //       Authorization: cookies.accessToken
      //         ? `Bearer ${cookies.accessToken}`
      //         : "",
      //     },
      //   }
      // );

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
    <section className="addressList__main">
      <div className="mobile__container">
        <div className="addressList__header">
          <img src={backIcon} alt="back-icon" className="addressList__img" onClick={()=>navigate("/my-profile")}/>

          <p className="addressList__text">Address</p>
        </div>

        <div className="addressList_btn">
        <BaseButton onClick={()=> navigate("/address-page")} variant={"btn btn--primary-small"} buttonText={"Add Address"}/>
        </div>

        {addressData &&
          addressData?.map((data) => (
            <AddressCard
              id={data?.id}
              address={data?.addressLine1}
              city={data?.city}
              pincode={data?.pincode}
            />
          ))}
      </div>
    </section>
  );
};

export default Address;
