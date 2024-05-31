import React from "react";

const BaseButton = ({ onClick, buttonText, variant }) => {
  const getVariantValue = (variant) => {
    switch (variant) {
      case "btn-primary":
        return "btn-primary";
      case "btn-secondary":
        return "btn-secondary";
      case "btn-secondaryOrange":
        return "btn-secondary border-primary text-primary";
      default:
        return "btn-primary";
    }
  };

  return (
    <>
      <button onClick={onClick} className={getVariantValue(variant)}>
        {buttonText ? buttonText : "Playstore"}
      </button>
    </>
  );
};

export default BaseButton;
