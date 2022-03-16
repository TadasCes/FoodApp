import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../state/actions";
import IconButton from "../utility/IconButton";
import { FaShoppingCart } from "react-icons/fa";
import { getCartCount } from "../../utility";

const CartIcon = () => {
  const dispatch = useDispatch();

  const [countTotal, setCountTotal] = useState(0);
  const [showCartCount, setShowCartCount] = useState(false);
  const foodState = useSelector((state) => state.foodState);
  const [cartItems, setCartItems] = useState(foodState.foodInCart);

  useEffect(() => {
    setCountTotal(getCartCount(cartItems));
    cartItems.length > 0 ? setShowCartCount(true) : setShowCartCount(false);
  });

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
