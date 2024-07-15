import React, { useEffect, useState } from "react";
import BaseButton from "../../component/base/BaseButton";
import axiosProvider from "../../common/axiosProvider";
import QuantityCounter from "../../component/MobileView/QuantityCounter";
import apiPath from "../../apiPath";
import { useNavigate } from "react-router-dom";
import image1 from "../../assets/images/image2.png";
import backIcon from "../../assets/icons/back-icon.svg"

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleFetch = async () => {
    try{
      const response = await axiosProvider({ method: "GET", apiURL: apiPath.getCart,  navigate});
      if(response && response.status === 200){
        setCartItems(response?.data?.data)
        setQuantity(response?.data?.data[0].no_of_item);
      }
    }catch(err){
      console.log(err);
    }
  }

  const handleUpdate = async (quantity, id) => {
    try{
      const response = await axiosProvider({ method: "PATCH", apiURL: apiPath?.updateCart, navigate, params: { cartId : id, no_of_item: quantity } })
      if(response && response.status === 200){
        console.log(response?.data?.message);
        handleFetch();
      }
    }catch(err){
      console.log(err);
    }
  }

  const handleDelete = async (cartId, foodId) =>{
    try{
      const response = await axiosProvider({ method: "DELETE", apiURL: apiPath.deleteCart, navigate, params: {foodId, cartId} })
      if(response && response?.status === 200){
        console.log(response?.data?.message);
        handleFetch();
      }
    }catch(err){
      console.log(err)
    }
  }

  const handleOrder = async () => {
    try{
      const response = await axiosProvider({ method: "POST", apiURL: apiPath.createOrder,  })
      if(response && response?.status === 200){
        console.log(response?.data?.message)
      }
    }catch(err){
      console.log(err)
    }
  }

  const increaseQuantity = (id) => {
    setQuantity((data)=>{
      let newQunatity = data + 1;
      handleUpdate(newQunatity, id);
      return newQunatity;
    });
  };

  const decreaseQuantity = (id) => {
    if (quantity > 1) {
      setQuantity((data)=>{
        let newQunatity = data - 1;
        handleUpdate(newQunatity, id);
        return newQunatity;
      });
    }
  };

  useEffect(()=>{
    handleFetch()
  },[])

  return (
    <section className="cart__container">
      <div>
        <div className="cart__header">
          <img src={backIcon} alt="back-icon" className="cart__back-icon" onClick={()=>navigate("/dashboard")}/>
          <p className="cart__header--title">Cart</p>
        </div>
        {cartItems?.map((item) => (
          <QuantityCounter
            id={item?.id}
            no_of_items = {item?.no_of_item}
            foodId = {item?.Food?.id}
            price = {item?.Food?.price}
            name = {item?.Food?.name}
            foodImage = {item?.Food?.foodImage}
            handleDelete = {handleDelete}
            img = {image1}
            quantity = {quantity}
            increaseQuantity = {increaseQuantity}
            decreaseQuantity = {decreaseQuantity}
          />
        ))}
      </div>
      <div className="cart__btn-container ">
        <BaseButton
          onClick={()=>handleOrder}
          buttonText={"Complete Order"}
          variant={"btn btn--primary"}
        />
      </div>
    </section>
  );
};

export default Cart;
