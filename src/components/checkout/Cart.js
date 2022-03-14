import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const getFoodState = useSelector((state) => state.foodState);
  const cartItems = getFoodState.foodInCart;

  // console.log(cartItems.dish);
  return (
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
          {cartItems.map((item) => {
            return <CartItem key={item.dish.id} {...item} />;
          })}
          <div className="cart-details">
            <h3>Details</h3>
            <ul>
              <li>Price: </li>
              <li>Shipping: </li>
              <li>Discounts: </li>
              <li>Total price: </li>
            </ul>
          </div>
          <footer className="grid-footer">
            <Link to="/">
              <div className="btn-cart-back">
                <button>Back to menu</button>
              </div>
            </Link>
            <div className="cart-total">
              <h3 className="">Total</h3>
              <h4 className="">€128</h4>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Cart;
