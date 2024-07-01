import React from "react";
import backicon from "../../assets/icons/back-icon.svg";
import fronticon from "../../assets/icons/front-icon.svg";

const Pagination = ({
  pageCount,
  handlePageChange,
  handleIncrement,
  handleDecrement,
  currentPage,
}) => {
  console.log(pageCount);
  return (
    <>
      <div className="pagination__main">
        <img
          src={backicon}
          alt="back-icon"
          hidden={currentPage > 1 ? false : true}
          className="pagination__back-icon"
          onClick={() => handleDecrement()}
        />
        {pageCount.map((items) => (
          <p
            className={`pagination__number ${
              currentPage === items ? "active" : ""
            }`}
            onClick={() => handlePageChange(items)}
          >
            {items}
          </p>
        ))}

        <img
          src={fronticon}
          alt="front-icon"
          hidden={currentPage >= pageCount?.length ? true : false}
          className="pagination__front-icon"
          onClick={() => handleIncrement()}
        />
      </div>
    </>
  );
};

export default Pagination;
