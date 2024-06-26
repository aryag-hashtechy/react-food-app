import React, { useState } from "react";
import QuantityCounter from "./QuantityCounter";
import image1 from "../../assets/images/image2.png";

// const handleDelete = (id) => {
//   cartItems.map((item, index) => {
//     if (item.id === id) {
//       const deleteData = cartItems.splice(index, 1);
//       console.log(deleteData);
//     }
//   });
// };

const CartItems = () => {
  const cartItemsV2 = [
    {
      id: 1,
      name: "Veggie tomato mix",
      mrp: 29.99,
      image: { image1 },
    },
    {
      id: 2,
      name: "Fish with mix orange",
      mrp: 49.99,
      image: { image1 },
    },
    {
      id: 3,
      name: "Veggie tomato mix",
      mrp: 19.99,
      image: { image1 },
    },
  ];

  const [cartItems, setCartItems] = useState(cartItemsV2);

  const handleDelete = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <section>
      <div className="cart__main">
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
    </section>
  );
};

export default CartItems;
