import React, { useEffect, useState } from "react";
import BaseButton from "../../component/base/BaseButton";
import image1 from "../../assets/images/image2.png";
import { useNavigate } from "react-router-dom";
import QuantityCounter from "../../component/MobileView/QuantityCounter";
import apiPath from "../../apiPath";
import axiosProvider from "../../common/axiosProvider";
import backIcon from "../../assets/icons/back-icon.svg";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleFetch = async () => {
    try {
      const response = await axiosProvider({
        method: "GET",
        apiURL: apiPath.getCart,
      });

      if (response?.status === 200) {
        setCartItems(response?.data?.data);
        setQuantity(response?.data?.data[0].no_of_items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (foodId, cartId) => {
    try {
      console.log(foodId, cartId);
      const response = await axiosProvider({
        method: "DELETE",
        apiURL: apiPath.deleteCart,
        params: { foodId, cartId },
      });

      if (response?.status === 200) {
        console.log(response?.data?.data);
        handleFetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (values, cartId) => {
    try {
      console.log(values, cartId);
      const response = await axiosProvider({
        method: "PUT",
        apiURL: apiPath.updateCart,
        params: { cartId, no_of_item: values },
      });
      console.log(response);
      if (response?.data?.response === 200) {
        console.log(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const increaseQuantity = (id) => {
    setQuantity((data) => {
      let newQuantity = data + 1;
      handleSubmit(newQuantity, id);
      return newQuantity;
    });
  };

  const decreaseQuantity = (id) => {
    if (quantity > 1) {
      setQuantity((data) => {
        let newQuantity = data - 1;
        handleSubmit(newQuantity, id);
        return newQuantity;
      });
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <section className="cart__container">
      <div>
        <div className="cart__main">
          <img
            src={backIcon}
            alt="back-icon"
            className="cart__back-icon"
            onClick={() => {
              navigate("/dashboard");
            }}
          />
          <p className="cart__text">Cart</p>
        </div>

        {cartItems &&
          cartItems?.map((item) => (
            <>
              <QuantityCounter
                key={item.id}
                // no_of_items={item?.food?.foodImage}
                id={item?.id}
                foodId={item?.food_id}
                image={item.Food?.foodImage}
                name={item?.Food?.name}
                price={item?.Food?.price}
                no_of_items={item?.no_of_item || 1}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                handleDelete={handleDelete}
                handleSubmit={handleSubmit}
              />
            </>
          ))}
      </div>
      <div className="cart__btn-container ">
        <BaseButton
          buttonText={"Complete Order"}
          variant={"btn btn--primary"}
          onClick={handleSubmit}
        />
      </div>
    </section>
  );
};

export default Cart;
