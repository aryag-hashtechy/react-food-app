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
        
        <p className="addressCard__text">{name || address}</p>
        <div className="addressCard__border" />
        <p className="addressCard__text">{city || address}</p>
        <div className="addressCard__border" />
        <p className="addressCard__text">{pincode || number}</p>
      </div>
    </>
  );
};

export default AddressCard;
