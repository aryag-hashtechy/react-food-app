import React from "react";

const BaseButton = ({ onClick, buttonText, variant }) => {
  const getVariantValue = (variant) => {
    switch (variant) {
      case "btnPrimary":
        return "btnPrimary";
      case "btnSecondary":
        return "btnSecondary";
      case "btnSecondaryOrange":
        return "btnSecondary border-primary text-primary";
      default:
        return "btnPrimary";
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
