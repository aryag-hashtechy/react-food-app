import React from "react";

const BaseButton = ({ onClick, buttonText, variant , type="button"}) => {

  const handleClass = () => {
      switch(variant){
        case "btnPrimary":
          return "btnPrimary";
        case "btnSecondary":
          return "btnSecondary";
          case 'btnSecondaryOrange':
           return "btnSecondary border-primary text-primary"
        default:
          return "btnPrimary";
      }
  }
    
  return (
    <>
      <button type={type} onClick={onClick} className={handleClass()}>
        {buttonText ? buttonText : "Playstore"}
      </button>
    </>
  );
};

export default BaseButton;
