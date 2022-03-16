import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../state/actions";
import IconButton from "../utility/IconButton";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
  const dispatch = useDispatch();

  const [countTotal, setCountTotal] = useState(0);
  const [showCartCount, setShowCartCount] = useState(false);
  const foodState = useSelector((state) => state.foodState);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(foodState.foodInCart);
    let total = 0;
    if (cartItems !== undefined) {
      cartItems.forEach((element) => {
        total += element.count;
        setCountTotal(total);
      });
    }

    cartItems.length > 0 ? setShowCartCount(true) : setShowCartCount(false);
  });

  const getCartCount = () => {
    let countTotal = 0;
    if (cartItems !== undefined) {
      cartItems.forEach((element) => {
        countTotal += element.count;
      });
    }
  };
  getCartCount();

  const resetCartCount = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="cart-icon">
        <IconButton linkPath="/cart" icon={FaShoppingCart} />
        {showCartCount && (
          <div className="cart-icon-count">
            <h5>{countTotal}</h5>
          </div>
        )}
        <button onClick={() => resetCartCount()}>reset</button>
      </div>
    </>
  );
};

export default CartIcon;
