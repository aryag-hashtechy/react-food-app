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
      case "btn-primary-square":
        return "btn-primary rounded-[10px]";
      case "btn-secondary-square":
        return "btn-secondary rounded-[10px]";
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
