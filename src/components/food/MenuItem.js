import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementCart, addFoodToCart } from "../../state/actions";

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
      <Link to={`/menu/${menuItem.category}/food-info/${id}`}>
        <article key={id} className="menu-item">
          <img src={img} alt="" className="photo" />
          <div className="item-info">
            <header>
              <h4>{title}</h4>
              <h4 className="price">{price}</h4>
            </header>
          </div>
        </article>
      </Link>
    </>
  );
};

export default MenuItem;
