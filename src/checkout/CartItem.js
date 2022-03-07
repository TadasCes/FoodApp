import React from "react";
import { useDispatch } from "react-redux";

const CartItem = (cartItem) => {
  const dispatch = useDispatch();
  const { id, img, title, price, desc } = cartItem;

  return (
    <>
      <div className="grid-item cart-grid-item-1">
        <img src={img} alt="" className="photo" />
      </div>
      <div className="grid-item cart-grid-item-2">{title}</div>
      <div className="grid-item cart-grid-item-3">count</div>
      <div className="grid-item cart-grid-item-4">{price}</div>
    </>
  );
};

export default CartItem;
