import React, { useState, useEffect } from "react";
import image from "../../assets/icons/back-icon.svg";
import image1 from "../../assets/images/Food.png";
import BaseButton from "../../component/base/BaseButton";
import veg from "../../assets/images/veg.png";
import nonveg from "../../assets/images/non-veg-icon.png";
import heart from "../../assets/images/heart2.svg";
import heartFilled from "../../assets/icons/heart-icon.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToWishlist,
  deleteWishlist,
} from "../../feature/wishlist/wishlistSlice";
import Toast from "../../component/MobileView/Toast";
import endPoints from "../../common/endPoints";
import axiosProvider from "../../common/axiosProvider";

const DetailPage = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const cart = useSelector((state) => state.cart.cart);
  const [foodData, setFoodData] = useState();
  const [toast, setToast] = useState({
    message: null,
    type: null,
    isVisible: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleFetch = async () => {
    try {
      const response = await axiosProvider({
        method: "GET",
        apiURL: endPoints.getSingleFood,
        params: { foodId: id },
      });
      if (response && response.status === 200) {
        const isPresent = wishlist.find(
          (data) => data === response.data.data.id
        );
        const isinCart = cart.find((data) => data === response.data.data.id);
        isPresent ? (response.data.data.is_in_wishlist = true) : <></>;
        isinCart
          ? (response.data.data.is_in_cart = true)
          : (response.data.data.is_in_cart = false);
        setFoodData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCart = async (id) => {
    try {
      const response = await axiosProvider({
        method: "POST",
        apiURL: endPoints.createCart,
        params: { foodId: id },
        navigate,
      });

      if (response && response.status === 200) {
        handleToast(response?.data?.message, "success");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteWishlist = async (food_id) => {
    try {
      const response = await axiosProvider({
        method: "DELETE",
        apiURL: endPoints.deleteWishlist,
        params: { food_id },
      });

      if (response?.status === 200) {
        dispatch(deleteWishlist(food_id));
        setFoodData((data) => ({
          ...data,
          is_in_wishlist: false,
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreateWishlist = async (food_id) => {
    try {
      const response = await axiosProvider({
        method: "POST",
        apiURL: endPoints.createWishlist,
        params: { food_id },
      });
      if (response?.status === 200) {
        dispatch(addToWishlist(food_id));
        setFoodData((data) => ({
          ...data,
          is_in_wishlist: true,
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleToast = (response, type, redirectTo) => {
    setToast((items) => ({
      ...items,
      type,
      message: response,
      isVisible: true,
    }));

    setTimeout(() => {
      setToast((items) => ({
        ...items,
        isVisible: false,
      }));
      redirectTo ? navigate(redirectTo) : <></>;
    }, 3000);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      {toast?.isVisible && <Toast type={toast.type} message={toast.message} />}
      <section className="mobile__container">
        <div>
          <img
            src={image}
            alt="back-icon"
            onClick={() => navigate(-1)}
            className="detail__back-icon"
          />
        </div>

        <div className="detail__main">
          <img
            src={
              foodData?.foodImage
                ? `http://localhost:5000${foodData?.foodImage}`
                : image1
            }
            alt="banner-image"
            className="detail__banner-image"
          />
        </div>

        <div>
          <div className="detail__img-container">
            <img
              src={foodData?.type === "Veg" ? veg : nonveg}
              alt="veg-icon"
              className="detail__veg-icon"
            />
            <p className="detail__veg-title">
              {foodData?.type ? foodData?.type : "Veg"}
            </p>
          </div>

          <div className="detail__title">
            <p className="detail__title-content">
              {foodData?.name ? foodData.name : "Veggie tomato mix"}
            </p>
            <img
              src={foodData?.is_in_wishlist ? heartFilled : heart}
              className="detail__heart"
              onClick={() =>
                foodData?.is_in_wishlist
                  ? handleDeleteWishlist(foodData.id)
                  : handleCreateWishlist(foodData.id)
              }
            />
          </div>

          <p className="detail__price">
            {foodData?.price ? `Rs. ${foodData.price}` : "Rs. 550"}
          </p>

          <p className="detail__description">
            {foodData?.description
              ? foodData.description
              : "Lorem ipsum dolor sit amet consectetur adipisicing"}
          </p>
        </div>

        <div>
          <BaseButton
            buttonText={foodData?.is_in_cart ? "Go to Cart" : "Add to Cart"}
            variant={"btn detail__btn"}
            onClick={() => {
              foodData?.is_in_cart
                ? navigate("/cart")
                : handleCart(foodData?.id);
            }}
          />
        </div>
      </section>
    </>
  );
};

export default DetailPage;
