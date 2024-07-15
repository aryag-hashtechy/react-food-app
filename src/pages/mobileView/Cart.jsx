import React, { useEffect, useState } from "react";
import BaseButton from "../../component/base/BaseButton";
import image1 from "../../assets/images/image2.png";
import { useNavigate } from "react-router-dom";
import QuantityCounter from "../../component/MobileView/QuantityCounter";
import apiPath from "../../apiPath";
import axiosProvider from "../../common/axiosProvider";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleFetch = async () => {
    try {
      console.log("before ", apiPath.getCart);
      const response = await axiosProvider({
        method: "GET",
        apiPath: apiPath.getCart,
        navigate,
      });
      console.log("herer ");
      console.log("Response", response);
      if (response?.data?.response === 200) {
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

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <section className="cart__container">
      <div>
        <p>Cart</p>
        {cartItems?.map((item) => (
          <QuantityCounter
            key={item.id}
            id={item.id}
            image={item.image.image1}
            name={item.name}
            mrp={item.mrp}
            handleDelete={handleDelete}
          />
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
