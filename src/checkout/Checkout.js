import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Checkout = ({ id, img, title, price, desc }) => {
  return (
    <>
      <section className="section-center">
        <div className="grid-container cart-grid-container">
          <div className="grid-item cart-grid-item-1">image</div>
          <div className="grid-item cart-grid-item-2">Dish</div>
          <div className="grid-item cart-grid-item-3">Count</div>
          <div className="grid-item cart-grid-item-4">Price</div>
          <div className="grid-item cart-grid-item-5">Details</div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
