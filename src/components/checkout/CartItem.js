import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  decreaseCartItemCount,
  increaseCartItemCount,
  removeCartItem,
} from "../../state/actions";

const CartItem = ({ dishId, deleteCartItem, updateCartState }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ totalPrice: 0 });

  const getFoodState = useSelector((state) => state.foodState);
  const currentFood = getFoodState.foodInCart.filter(
    (item) => item.dish.id === dishId
  );
  const { id, img, title, price } = currentFood[0].dish;
  const currentFoodCount = currentFood[0].count;
  const [itemCount, setItemCount] = useState(currentFoodCount);

  // useEffect(() => {
  //   setState({ totalPrice: price * itemCount });
  // }, []);

  // setItemcount(count);
  // console.log(state.totalPrice);

  const increaseCartItem = () => {
    dispatch(increaseCartItemCount(id));

    setItemCount(currentFoodCount);
    updateCartState();
  };
  const decreaseCartItem = () => {
    dispatch(decreaseCartItemCount(id));
    deleteCartItem(id);
    setItemCount(currentFoodCount);
    updateCartState();
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
          <h5>{currentFoodCount}</h5>
          <button onClick={() => increaseCartItem()}>+</button>
        </div>
      </div>
      <div className="grid-item cart-grid-item-4">€{price}</div>
      <div className="grid-item cart-grid-item-4">€{state.totalPrice}</div>
    </>
  ) : (
    console.log("nera")
  );
};

export default CartItem;
