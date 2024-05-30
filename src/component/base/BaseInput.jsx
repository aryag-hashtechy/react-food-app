import React from 'react'

const BaseInput = ({ name , id , inputVariant , isRequired , inputType , value , placeholder , labelText , labelVariant , isDisable = false}) => {
  
    const handleChange = (e) => {
        if (name) {
            let obj = {}
            obj[name] = e.target.value
            return
          }
    }
  
    return (
    <>
      {labelText ? <label className={labelVariant} htmlFor={id}>{labelText}</label> : <></>}
      <input type={ inputType } 
       name={name}
       id={id}
       value={value}
       required={ isRequired }
       placeholder={placeholder}
       className={inputVariant}
       onChange={handleChange}
       disabled={isDisable}
       />
    </>
  )
}

export default BaseInput
