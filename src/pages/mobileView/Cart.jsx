import React from "react";
import CartItems from "../../component/MobileView/CartItems";
import BaseButton from "../../component/base/BaseButton";

const Cart = () => {
  return (
    <section className="cart__container">
      <div>
        <p>Cart</p>
        <CartItems />
      </div>
      <div className="cart__btn-container ">
        <BaseButton
          buttonText={"Complete Order"}
          variant={"btn btn--primary"}
        />
      </div>
    </section>
  );
};

export default Cart;
