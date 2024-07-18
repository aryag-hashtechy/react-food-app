import React from "react";

const BaseButton = ({ onClick, buttonText, variant }) => {
  
  const getVariantValue = (variant) => {
    return variant ? variant : "btn btn--primary";
  };

  return (
      <button onClick={onClick} className={getVariantValue(variant)}>
        {buttonText ? buttonText : "Playstore"}
      </button>
  );
};

export default BaseButton;
