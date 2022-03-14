import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../state/actions";
import IconButton from "../utility/IconButton";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();

  const [showCartCount, setShowCartCount] = useState(false);
  const foodState = useSelector((state) => state.foodState);
  const cartItems = foodState.foodInCart;

  useEffect(() => {
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
            <h5>{cartItems.length}</h5>
          </div>
        )}
        <button onClick={() => resetCartCount()}>reset</button>
      </div>
    </>
  );
};

export default Navbar;
