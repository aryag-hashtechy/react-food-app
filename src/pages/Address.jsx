import { parseCookies } from "nookies";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import endPoints from "../common/endPoints";
import backIcon from "../assets/icons/back-icon.svg";
import axiosProvider from "../common/axiosProvider";
import AddressCard from "../component/AddressCard";
import BaseButton from "../component/base/BaseButton";
import { handleToast } from "../lib/GlobalMethods";
import Toast from "../component/MobileView/Toast";

const Address = () => {
  const [addressData, setAddressData] = useState();
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const cookies = parseCookies();
  const [toast, setToast] = useState({
    message: null,
    type: null,
    isVisible: false,
  });

  const handleDelete = async (id) => {
    try {
      let headers = {
        Authorization: `Bearer ${cookies.accessToken}`,
      };

      const response = await axiosProvider({
        method: "DELETE",
        apiURL: endPoints.deleteAddress + id,
        headers,
      });

      if (response?.status === 200) {
        handleToast(setToast, response)
        fetchAddressData();
      }
    } catch (error) {
      return error;
    }
  };

  const fetchAddressData = async () => {
    try {
      const response = await axiosProvider({
        method: "GET",
        apiURL: `${endPoints.getAllAddress}`,
        navigate,
      });

      if (response?.status === 200) {
        setAddressData(response?.data?.data);
        setCount(response?.data?.dataCount);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAddressData();
  }, []);

  return (
    <>
      {toast?.isVisible && <Toast type={toast.type} message={toast.message} />}
      <section className="addressList__main">
        <div className="mobile__container">
          <div className="addressList__header">
            <img
              src={backIcon}
              alt="back-icon"
              className="addressList__img"
              onClick={() => navigate(-1)}
            />

            <p className="addressList__text">Address</p>
          </div>

          <div className="addressList_btn">
            <BaseButton
              onClick={() => {
                count < 5 ? navigate("/address-page") : <></>;
              }}
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
