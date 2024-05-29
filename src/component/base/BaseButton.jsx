import React from "react";

const BaseButton = ({ onClick, buttonText, variant }) => {
  return (
    <>
      <button onClick={onClick} className={variant}>
        {buttonText}
      </button>
    </>
  );
};

export default BaseButton;
