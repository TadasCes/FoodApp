import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";

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
        <div className="nav section">
          <Link to="/">
            <div className="nav-logo">
              <h2>Kumpinski</h2>
            </div>
          </Link>
          <div className="nav-right">
            <ul className="nav-list">
              <li>Menu</li>
              <li>About</li>
              <li>Contacts</li>
            </ul>
            <div className="nav-controls">
              <SearchBar />
              <CartIcon />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
