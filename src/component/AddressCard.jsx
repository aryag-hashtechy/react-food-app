import React from "react";
import Address from "../pages/Address";
import { useNavigate } from "react-router-dom";

const AddressCard = ({ name, address, number, id }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="addressCard__main">
        <p
          className="addressCard__btn"
          onClick={() => {
            navigate(`/address-page/${id}`);
          }}
        >
          Edit
        </p>
        <p>{name}</p>
        <div className="addressCard__border" />
        <p>{address}</p>
        <div className="addressCard__border" />
        <p>{number}</p>
      </div>
    </>
  );
};

export default AddressCard;
