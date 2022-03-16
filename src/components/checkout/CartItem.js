import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  decreaseCartItemCount,
  increaseCartItemCount,
  removeCartItem,
} from "../../state/actions";

const CartItem = ({ dishId, deleteCartItem }) => {
  const dispatch = useDispatch();

  const [itemCount, setItemCount] = useState(0);
  const getFoodState = useSelector((state) => state.foodState);
  const currentFood = getFoodState.foodInCart.filter(
    (item) => item.dish.id === dishId
  );
  const { id, img, title, price } = currentFood[0].dish;

  // setItemcount(count);

  const increaseCartItem = () => {
    dispatch(increaseCartItemCount(id));

    setItemCount(currentFood);
  };
  const decreaseCartItem = () => {
    dispatch(decreaseCartItemCount(id));
    // if (currentFood[0].count === 0) {
    //   dispatch(removeCartItem(id));
    // }
    deleteCartItem(id);
    setItemCount(currentFood);
  };

  return currentFood !== null ? (
    <>
      <div className="grid-item cart-grid-item-1">
        <img src={img} alt="" className="photo" />
      </div>
      <div className="grid-item cart-grid-item-2">
        <h5 className="cart-item-title">{title}</h5>
      </div>
      <div className="grid-item cart-grid-item-3">
        <div className="cart-item-count">
          <button onClick={() => decreaseCartItem()}>-</button>
          <h5>{currentFood[0].count}</h5>
          <button onClick={() => increaseCartItem()}>+</button>
        </div>
      </div>
      <div className="grid-item cart-grid-item-4">€{price}</div>
      <div className="grid-item cart-grid-item-4">
        €{price * currentFood[0].count}
      </div>
    </>
  ) : (
    console.log("nera")
  );
};

export default CartItem;
