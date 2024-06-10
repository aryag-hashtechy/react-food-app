import React from "react";
import image2 from "../../assets/images/search.svg";
import BaseInput from "../base/BaseInput";

const SearchBar = () => {
  return (
    <>
      <div className="search-main">
        <img src={image2} className="search-image" />
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
