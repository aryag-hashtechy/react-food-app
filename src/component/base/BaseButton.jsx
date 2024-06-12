import React from "react";

const BaseButton = ({ onClick, buttonText, variant }) => {
  const getVariantValue = (variant) => {
    switch (variant) {
      case "btn btn--primary":
        return "btn btn--primary";
      case "btn btn--secondary":
        return "btn btn--secondary";
      case "btn btn--secondary--orange":
        return "btn btn--secondary--orange";
      case "btn btn--primary--square":
        return "btn btn--primary--square";
      case "btn btn--secondary--square":
        return "btn btn--secondary--square";
      case "btn btn--primary--mobile":
        return "btn btn--primary--mobile";
      default:
        return "btn btn--primary";
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
