import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementCart, addFoodToCart } from "../state/actions";

const MenuItem = (menuItem) => {
  const dispatch = useDispatch();
  const { id, img, title, price, desc } = menuItem;

  const getCartNumber = useSelector((state) => state.cartCounter);

  const addToCart = () => {
    dispatch(incrementCart());
    dispatch(addFoodToCart(menuItem));
  };

  return (
    <>
      <article key={id} className="menu-item">
        <img src={img} alt="" className="photo" />
        <div className="item-info">
          <header>
            <h4>{title}</h4>
            <h4 className="price">{price}</h4>
          </header>
          <p className="item-text">{desc.substring(0, 100)}</p>
          <Link to={`/food-info/${id}`}>
            <button className="btn btn-info">Info</button>
          </Link>
          <button className="btn btn-primary" onClick={() => addToCart(id)}>
            Order
          </button>
        </div>
      </article>
    </>
  );
};

export default MenuItem;
