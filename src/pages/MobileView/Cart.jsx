import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import endPoints from "../../common/endPoints";
import backIcon from "../../assets/icons/back-icon.svg";
import axiosProvider from "../../common/axiosProvider";
import BaseButton from "../../component/base/BaseButton";
import QuantityCounter from "../../component/MobileView/QuantityCounter";
import Toast from "../../component/MobileView/Toast";
import { handleToast } from "../../lib/GlobalMethods";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../feature/cart/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [toast, setToast] = useState({
    message: null,
    type: null,
    isVisible: false,
  });

  const handleFetch = async () => {
    try {
      const response = await axiosProvider({
        method: "GET",
        apiURL: endPoints.getCart,
        navigate,
      });

      if (response?.status === 200) {
        setCartItems(response?.data?.data);
        
        let sum = 0;
        response?.data?.data?.map((data) =>{
          sum += (data.no_of_item * data.Food.price);
        })

        setTotalPrice(sum)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (cartId, foodId) => {
    try {
      const response = await axiosProvider({
        method: "DELETE",
        apiURL: endPoints.deleteCart,
        navigate,
        params: { foodId, cartId },
      });

      if (response?.status === 200) {
        dispatch(deleteCart(foodId))
        handleToast(setToast, response)
        handleFetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (values, cartId) => {
    try {
      const response = await axiosProvider({
        method: "PATCH",
        apiURL: endPoints.updateCart,
        navigate,
        params: { cartId, no_of_item: values },
      });
      if (response && response.status === 200) {
        handleFetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const increaseQuantity = (id) => {
    cartItems?.filter((data) =>{
       if(data.id === id){
         ++ data.no_of_item
         handleUpdate(data.no_of_item, id)
       }
    })
  };

  const decreaseQuantity = (id) => {
    cartItems?.filter((data) =>{
      if(data.id === id){
        -- data.no_of_item
        handleUpdate(data.no_of_item, id)
      }
   })
  };

  const handleNavigate = () => {
    if (cartItems.length > 0) {
      navigate("/order");
    } else {
      handleToast("Please add an item to cart", "failure");
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      {toast?.isVisible && <Toast type={toast.type} message={toast.message} />}
      <section className="cart__container">
        <div>
          <div className="cart__header">
            <img
              src={backIcon}
              alt="back-icon"
              className="cart__back-icon"
              onClick={() => {
                navigate(-1);
              }}
            />
            <p className="cart__header--title">Cart</p>
          </div>

          {cartItems &&
            cartItems?.map((item) => (
              <QuantityCounter
                id={item?.id}
                foodId={item?.Food?.id}
                image={item.Food?.foodImage}
                name={item?.Food?.name}
                price={item?.Food?.price}
                no_of_item={item?.no_of_item || 1}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                handleDelete={handleDelete}
              />
            ))}
        </div>

        <div className="cart__footer">
        <p className="cart__total-price">Total Price: Rs.{totalPrice}</p>
        
        <div className="cart__btn-container ">
          <BaseButton
            buttonText={"Complete Order"}
            variant={"btn btn--primary-large"}
            onClick={() => handleNavigate()}
          />
        </div> 
        </div>
      </section>
    </>
  );
};

export default Cart;
