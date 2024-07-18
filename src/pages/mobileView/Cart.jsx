import React, { useEffect, useState } from "react";
import BaseButton from "../../component/base/BaseButton";
import { useNavigate } from "react-router-dom";
import QuantityCounter from "../../component/MobileView/QuantityCounter";
import apiPath from "../../apiPath";
import axiosProvider from "../../common/axiosProvider";
import backIcon from "../../assets/icons/back-icon.svg";
import Toast from "../../component/MobileView/Toast";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [toast, setToast] = useState({
    message: null,
    type: null,
    isVisible: false,
  });

  const handleFetch = async () => {
    try {
      const response = await axiosProvider({
        method: "GET",
        apiURL: apiPath.getCart,
        navigate,
      });

      if (response?.status === 200) {
        setCartItems(response?.data?.data);
        setQuantity(response?.data?.data[0].no_of_item);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (foodId, cartId) => {
    try {
      const response = await axiosProvider({
        method: "DELETE",
        apiURL: apiPath.deleteCart,
        navigate,
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

  const handleUpdate = async (values, cartId) => {
    try {
      const response = await axiosProvider({
        method: "PATCH",
        apiURL: apiPath.updateCart,
        navigate,
        params: { cartId, no_of_item: values },
      });
      if (response && response.status === 200) {
        handleFetch()
      }
    } catch (error) {
      console.log(error);
    }
  };

  const increaseQuantity = (id) => {
    setQuantity((data) => {
      let newQuantity = data + 1;
      handleUpdate(newQuantity, id);
      return newQuantity;
    });
  };

  const decreaseQuantity = (id) => {
    if (quantity > 1) {
      setQuantity((data) => {
        let newQuantity = data - 1;
        handleUpdate(newQuantity, id);
        return newQuantity;
      });
    }
  };

  const handleToast = (response, type, redirectTo) => {
    setToast((items)=>({
      ...items,
      type,
      message: response,
      isVisible: true
    }));

    setTimeout(()=>{
      setToast((items)=>({
        ...items,
        isVisible:false,
      }));
      redirectTo ? navigate(redirectTo) : <></>;
    },3000);
  }

  const handleNavigate = () => {
    if(cartItems.length > 0){
      navigate('/order');
    }else{
      handleToast("Please add an item to cart", "failure")
    }
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return (
   <>
     { toast?.isVisible && <Toast type={toast.type} message={toast.message}/> }
     <section className="cart__container">
      <div>
        <div className="cart__header">
          <img
            src={backIcon}
            alt="back-icon"
            className="cart__back-icon"
            onClick={() => {
              navigate("/dashboard");
            }}
          />
          <p className="cart__header--title">Cart</p>
        </div>

        {cartItems &&
          cartItems?.map((item) => (
              <QuantityCounter
                key={item.id}
                id={item?.id}
                foodId={item?.Food?.id}
                image={item.Food?.foodImage}
                name={item?.Food?.name}
                price={item?.Food?.price}
                no_of_items={item?.no_of_item || 1}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}     
                handleDelete={handleDelete}
              />
          ))}
      </div>

      <div className="cart__btn-container ">
        <BaseButton
          buttonText={"Complete Order"}
          variant={"btn btn--primary-large"}
          onClick={()=>handleNavigate()}
        />
      </div>
    </section>
   </>
  );
};

export default Cart;
