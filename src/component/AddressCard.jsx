import React from "react";
import { useNavigate } from "react-router-dom";

const AddressCard = ({ address, city, pincode, id, handleDelete, name, number, isHidden = false }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="addressCard__main">
      <div className={`addressCard__btn-${isHidden ? "hidden" : "visible"}`}>
          <p
            className="addressCard__btn"
            onClick={() => {
              navigate(`/address-page?id=${id}`);
            }}
          >
            Edit
          </p>
          <p className="addressCard__btn" onClick={() => handleDelete(id)}>
            Delete
          </p>
        </div>
        
        <p>{name || address}</p>
        <div className="addressCard__border" />
        <p>{city || address}</p>
        <div className="addressCard__border" />
        <p>{pincode || number}</p>
      </div>
    </>
  );
};

export default AddressCard;
