import React from 'react'
import image from "../../assets/images/Mask Group.png";

const SearchCard = ({ name, foodImage , price}) => {
  return (
    <>
      <div className="search__card--container">
        <img src={ foodImage ? `http://localhost:5000${foodImage}` : image } className="search__card--image" />

        <div className="search__card--content">
          <p className="search__card--title">
            { name ? name : "Veggie tomato" }
          </p>

          <p className="search__card--price">{ price ? `Rs. ${price}` : "Rs. ---" }</p>
        </div>
      </div>
    </>
  )
}

export default SearchCard
