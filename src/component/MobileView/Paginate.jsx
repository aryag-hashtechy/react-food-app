import React from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import frontIcon from "../../assets/icons/front-icon.svg";

const Paginate = ({
  pageCount,
  handlePageChange,
  handleIncrement,
  handleDecrement,
  currentPage,
}) => {

  return (
    <div className="paginate__main">
      <img
        src={backIcon}
        hidden={currentPage > 1 ? false : true}
        alt="back-icon"
        className="paginate__back-icon"
        onClick={() => handleDecrement()}
      />
      {pageCount && pageCount?.map((items) => (
        <p
          key={items}
          className={`paginate__number ${
            currentPage === items ? "active" : ""
          }`}
          onClick={() => handlePageChange(items)}
        >
          {items}
        </p>
      ))}
      <img
        src={frontIcon}
        hidden={currentPage >= pageCount?.length ? true : false}
        alt="front-icon"
        className="paginate__front-icon"
        onClick={() => handleIncrement()}
      />
    </div>
  );
};

export default Paginate;
