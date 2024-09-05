import React, { useEffect, useState } from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import { useNavigate } from "react-router-dom";
import CheckBoxCard from "../../component/MobileView/CheckBoxCard";
import AddressCard from "../../component/AddressCard";
import axiosProvider from "../../common/axiosProvider";
import endPoints from "../../common/endPoints";
import BaseButton from "../../component/base/BaseButton";
import Toast from "../../component/MobileView/Toast";
import { clearCart } from "../../feature/cart/cartSlice";
import { useDispatch } from "react-redux";

const OrderPage = () => {
  const navigate = useNavigate();
  const [addressData, setAddressData] = useState();
  const dispatch = useDispatch()
  const [toast, setToast] = useState({
    message: null,
    type: null,
    isVisible: false,
  });

  const handleFetch = async () => {
    try {
      const response = await axiosProvider({
        method: "GET",
        apiURL: endPoints.getUser,
        navigate,
      });
      if (response && response.status === 200) {
        setAddressData(response?.data?.data);
      }
    } catch (err) {
      console.log(err?.response);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axiosProvider({
        method: "POST",
        apiURL: endPoints.createOrder,
        navigate,
      });
      if (response && response.status === 200) {
        dispatch(clearCart())
        handleToast(response?.data?.message, "success", "/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleToast = (response, type, redirectTo) => {
    setToast((items) => ({
      ...items,
      type,
      message: response,
      isVisible: true,
    }));

    setTimeout(() => {
      setToast((items) => ({
        ...items,
        isVisible: false,
      }));
      redirectTo ? navigate(redirectTo) : <></>;
    }, 3000);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      {toast?.isVisible && <Toast type={toast.type} message={toast.message} />}
      <div className="order__main">
        <div className="mobile__container">
          <div className="order__header">
            <img
              src={backIcon}
              alt="back-icon"
              className="order__back-icon"
              onClick={() => navigate(-1)}
            />

            <p className="order__header-title">Checkout</p>
          </div>

          <div className="order__title">Delivery</div>

          <div className="order__address-container">
            <div className="order__address-header">
              <p className="order__address-label">Address Detail</p>

              <p
                className="order__address-change"
                onClick={() => navigate("/address")}
              >
                change
              </p>
            </div>

            {addressData?.Addresses &&
              addressData?.Addresses?.map((data) => (
                <AddressCard
                  name={data?.receiverName || addressData?.fullName}
                  address={data?.addressLine1 + data?.addressLine2}
                  isHidden={true}
                  number={data?.receiverNumber || addressData?.mobileNumber}
                />
              ))}
          </div>

          <div className="order__payment-container">
            <div className="order__payment-header">
              <p>Payment Method</p>
            </div>

            <CheckBoxCard
              name={"patment_method"}
              id1={"cash"}
              id2={"card"}
              label1={"Cash"}
              label2={"Card"}
            />
          </div>

          <div className="order__deliverly-container">
            <div className="order__deliverly-header">
              <p>Delivery Method</p>
            </div>

            <CheckBoxCard
              name={"delivery_method"}
              id1={"door_deliverly"}
              id2={"pick_up"}
              label1={"Door Deliverly"}
              label2={"Pick up"}
            />
          </div>

          <BaseButton
            buttonText={"Complete Order"}
            variant={"btn btn--primary-large"}
            onClick={() => handleSubmit()}
          />
        </div>
      </div>
    </>
  );
};

export default OrderPage;
