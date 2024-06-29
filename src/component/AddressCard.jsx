import React from "react";
import Address from "../pages/Address";
import { useNavigate } from "react-router-dom";

const AddressCard = ({ address, city, pincode, id }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="addressCard__main">
        <p
          className="addressCard__btn"
          onClick={() => {
            navigate(`/address-page?id=${id}`);
          }}
        >
          Edit
        </p>
        <p>{address}</p>
        <div className="addressCard__border" />
        <p>{city}</p>
        <div className="addressCard__border" />
        <p>{pincode}</p>
      </div>
    </>
  );
};

export default AddressCard;
