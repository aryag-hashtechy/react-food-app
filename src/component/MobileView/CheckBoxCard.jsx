import React from 'react'

const CheckBoxCard = ({ label1, label2, value1, value2,  name, id1, id2}) => {
  return (
    <div className='radio__card--main'>
      <div className='radio__card--option-one'>
        <input 
        type="radio" 
        name={name}
        id={id1} 
        value={value1}
        />

        <label htmlFor={id1} className='radio__card--label-one'>{label1}</label>
      </div>

      <div className='radio__card--border'></div>

      <div className='radio__card--option-two'>
        <input 
        type="radio" 
        name={name} 
        id={id2} 
        value={value2}
        />

        <label htmlFor={id2} className='radio__card--label-two'>{label2}</label>
      </div>
    </div>
  )
}

export default CheckBoxCard
