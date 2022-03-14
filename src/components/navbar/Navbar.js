import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const [showCartCount, setShowCartCount] = useState(false);
  const foodState = useSelector((state) => state.foodState);
  const cartItems = foodState.foodInCart;

  useEffect(() => {
    cartItems.length > 0 ? setShowCartCount(true) : setShowCartCount(false);
  });

  return (
    <>
      <nav className="navbar">
        <div className="nav">
          <div>
            <h2>Logo</h2>
          </div>
          <div className="nav-controls">
            <SearchBar />
            <CartIcon />
          </div>
        </div>

        {/* <Categories
          categories={allCategories}
          filterCategory={filterCategory}
        /> */}
      </nav>
    </>
  );
};

export default Navbar;
