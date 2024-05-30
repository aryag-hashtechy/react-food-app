import React from 'react'

const BaseInput = ({ name, id, inputVariant, isRequired, inputType, placeholder, labelText , labelVariant, isDisable = false }) => {

  const handleChange = (e) => {
    if (name) {
      console.log(e.target.value)
      let obj = {}
      obj[name] = e.target.value;
      return
    }
  }
  return (
    <>
      {labelText ? <label className={labelVariant ? labelVariant : "text-[#919191] block pb-0.5"} htmlFor={id}>{labelText}</label> : <></>}
      <input type={inputType? inputType : "text"}
        name={name}
        id={id}
        required={isRequired}
        placeholder={placeholder? placeholder : "Enter your text"}
        className={inputVariant ? inputVariant : "border-b-2 outline-none border-black pb-1.5 placeholder-black"}
        onChange={handleChange}
        disabled={isDisable}
      />
    </>
  )
}

export default BaseInput
