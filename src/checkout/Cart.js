import React from "react";
import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from "../state/actions";

const Cart = ({ id, img, title, price, desc }) => {
  const dispatch = useDispatch();
  const foodState = useSelector((state) => state.foodState);
  const cartItems = foodState.foodInCart;

  return (
    <>
      <section className="section-center">
        <header>
          <h5>Title</h5>
          <h5>Count</h5>
          <h5>Price</h5>
        </header>
        <div className="grid-container cart-grid-container">
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
          <div className="grid-item cart-grid-item-5">Details</div>
        </div>
      </section>
    </>
  );
};

export default Cart;
