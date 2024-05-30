import React from "react";

const BaseButton = ({ onClick, buttonText, variant , type="button"}) => {
  
  const handleClass = () => {
      switch(variant){
        case "btn-primary":
          return "btn-primary";
        case "btn-secondary":
          return "btn-secondary";
        default:
          return "btn-primary";
      }
  }
    
  return (
    <>
      <button type={type} onClick={onClick} className={ handleClass()}>
        {buttonText ? buttonText : "Playstore"}
      </button>
    </>
  );
};

export default BaseButton;
