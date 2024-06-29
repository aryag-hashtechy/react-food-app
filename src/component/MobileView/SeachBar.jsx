import React from "react";
import image2 from "../../assets/images/search.svg";
import { useNavigate } from "react-router-dom";
import BaseInput from "../base/BaseInput";

const SearchBar = ({ navigateTo }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="search__main" onClick = { ()=>navigate(navigateTo) }>
        <img src={image2} className="search__image"/>

        <BaseInput
          inputType={"search"}
          placeholder={"search"}
          inputVariant="border-none bg-transparent outline-none"
        />
      </div>
    </>
  );
};

export default SearchBar;
