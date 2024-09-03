import React, { useEffect, useState } from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import { useNavigate } from "react-router-dom";
import QuantityCounter from "../../component/MobileView/QuantityCounter";
import { useDispatch, useSelector } from "react-redux";
import axiosProvider from "../../common/axiosProvider";
import endPoints from "../../common/endPoints";
import { deleteWishlist } from "../../feature/wishlist/wishlistSlice";
import { addToCart } from "../../feature/cart/cartSlice";

const Wishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [wishlistData, setWishlistData] = useState();
  const wishlistId = useSelector((state) => state?.wishlist?.wishlist);

  const handleFetch = async () => {
    try {
      const response = await axiosProvider({
        method: "GET",
        apiURL: endPoints.getWishlist,
        params:{ food_id: wishlistId },
        navigate,
      });

      if (response?.status === 200) {
        setWishlistData(response?.data?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleWishlist = async (id) => {
    try {
      const response = await axiosProvider({
        method: "POST",
        apiURL: endPoints.createCart,
        navigate,
        params: { foodId: id },
      });
      if (response.status === 200) {
        dispatch(deleteWishlist(id));
        dispatch(addToCart(id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (food_id) => {
    try {
      const response = await axiosProvider({
        method: "DELETE",
        apiURL: endPoints.deleteWishlist,
        params: { food_id },
      });
      if (response.status === 200) {
        dispatch(deleteWishlist(food_id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleFetch();
  }, [wishlistId]);

  return (
    <div className="wishlist__main">
      <div>
        <div className="wishlist__header">
          <img
            src={backIcon}
            alt="back-icon"
            className="wishlist__header--back-icon"
            onClick={() => navigate("/dashboard")}
          />

          <div className="wishlist__header-title">Wishlist</div>
        </div>

        <div className="wishlist__body">
          {wishlistData?.map((data) => (
            <QuantityCounter
              id={data?.id}
              image={data?.foodImage}
              name={data?.name}
              price={data?.price}
              handleDelete={handleDelete}
              handleWishlist={handleWishlist}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
