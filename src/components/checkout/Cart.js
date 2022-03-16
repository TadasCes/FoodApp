import React, { useState } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import BackBtn from "../utility/BackButton";
import { removeCartItem } from "../../state/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const cartState = useSelector((state) => state.foodState.foodInCart);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((element) => {
      total += element.dish.price;
      setCartTotalPrice(Math.round(total * 100) / 100);
    });
  }, [cartItems, cartTotalPrice]);

  useEffect(() => {
    updateCartState();
  });

  const updateCartState = () => {
    setCartItems(cartState);
  };

  const deleteCartItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    // updateCartState();
  };

  return cartState.length > 0 ? (
    <>
      <section className="cart-container">
        <div className="grid-wrapper cart-grid-wrapper">
          <div className="grid-header">
            <h2>Your cart items</h2>
          </div>
          <h5 className="grid-heading">Image</h5>
          <h5 className="grid-heading">Title</h5>
          <h5 className="grid-heading">Count</h5>
          <h5 className="grid-heading">Price</h5>
          <h5 className="grid-heading">Total</h5>
          {cartState.map((item) => {
            return (
              <CartItem
                key={item.dish.id}
                dishId={item.dish.id}
                deleteCartItem={deleteCartItem}
              />
            );
          })}

          <footer className="grid-footer">
            <BackBtn to={""} />
            <div className="cart-total">
              <h3 className="">Total</h3>
              <h4 className="">{cartTotalPrice}</h4>
            </div>
          </footer>
        </div>
      </section>
    </>
  ) : (
    <div>
      <BackBtn to={""} />
      <h3>Cart is empty</h3>
    </div>
  );
};

export default Cart;
