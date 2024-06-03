import React from "react";

const BaseInput = ({
  name,
  id,
  inputVariant,
  isRequired,
  inputType,
  placeholder,
  labelText,
  labelVariant,
  isDisable = false,
}) => {
  const handleChange = (e) => {
    if (name) {
      console.log(e.target.value);
      let obj = {};
      obj[name] = e.target.value;
      return;
    }
  };
  return (
    <>
      {labelText && (
        <label
          className={labelVariant ? labelVariant : "labelPrimary"}
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
        className={inputVariant ? inputVariant : "inputPrimary"}
        onChange={handleChange}
        disabled={isDisable}
      />
    </>
  );
};

export default BaseInput;
