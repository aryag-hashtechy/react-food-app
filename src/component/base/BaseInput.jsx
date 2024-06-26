import React from "react";

const BaseInput = ({
  name,
  id,
  inputVariant,
  isRequired,
  inputType,
  handleChange,
  placeholder,
  labelText,
  labelVariant,
  isDisable = false,
}) => {

  return (
    <>
      {labelText && (
        <label
          className={labelVariant ? labelVariant : "label--primary"}
          htmlFor={id}
        >
          {labelText}
        </label>
      )}

      <input
        type={inputType ? inputType : "text"}
        name={name}
        id={id}
        required={isRequired}
        placeholder={placeholder ? placeholder : "Enter your text"}
        className={inputVariant ? inputVariant : "input--primary"}
        onChange={handleChange}
        disabled={isDisable}
      />
    </>
  );
};

export default BaseInput;
