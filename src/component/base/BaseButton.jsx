import React from "react";

const BaseButton = ({ onClick, buttonText, variant }) => {
  return (
    <>
      <button onClick={onClick} className={variant ? variant : "btn-primary"}>
        {buttonText ? buttonText : "Playstore"}
      </button>
    </>
  );
};

export default BaseButton;
