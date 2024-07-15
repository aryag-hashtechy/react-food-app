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
        // query
        navigate,
      });
      console.log(response);

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
      const response = await axiosProvider({
        method: "DELETE",
        apiPath: apiPath.deleteCart,
        navigate,
        params: { foodId, cartId },
      });
      if (response?.data?.response === 200) {
        console.log(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (values, cartId, userId, foodId, id) => {
    try {
      const response = await axiosProvider({
        method: id ? "PUT" : "POST",
        apiPath: id ? apiPath.updateCart + userId : apiPath.addCart,
        params: id ? cartId : { foodId, userId },
        bodyData: values,
      });
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

  console.log(cartItems);

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
                foodId={item?.food?.foodId}
                image={item.Food?.foodImage}
                name={item?.Food?.name}
                price={item?.Food?.price}
                no_of_items={item?.no_of_item || 1}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                handleDelete={handleDelete}
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
