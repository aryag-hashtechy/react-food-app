import React from "react";

const BaseFloatingInput = ({
  name,
  id,
  inputVariant,
  isRequired,
  inputType,
  placeholder,
  labelText,
  labelVariant,
  isDisable = false,
  isFlotting = false,
}) => {
  const handleChange = (e) => {
    if (name) {
      let obj = {};
      return (obj[name] = e.target.value);
    }
  };
  return (
    <>
      <div className="float">
        <input
          type={inputType}
          name={name}
          id={id}
          required
          autocomplete="off"
        />
        <label className="label-name">
          <span className="content-name">{labelText}</span>
        </label>
      </div>
    </>
  );
};

export default BaseFloatingInput;
