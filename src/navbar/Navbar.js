import { FaSearch } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import items from "../data";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { resetCart, clearCart } from "../state/actions";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Navbar = ({ searchResults, setFinalResult }) => {
  const dispatch = useDispatch();

  const [categories, setAllCategories] = useState(allCategories);
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [showCartCount, setShowCartCount] = useState(false);
  const getCartCount = useSelector((state) => state.cartCounter);
  const foodState = useSelector((state) => state.foodState);
  const cartItems = foodState.foodInCart;

  useEffect(() => {
    cartItems.length > 0 ? setShowCartCount(true) : setShowCartCount(false);
  });

  const resetCartCount = () => {
    dispatch(clearCart());
  };

  const filterCategory = (category) => {
    if (category === "all") {
      setFinalResult(items);
      return;
    }
    setFinalResult(items.filter((item) => item.category === category));
  };

  const searchItem = (searchTerm) => {
    if (searchTerm == "") {
      setFinalResult(items);
    } else {
      console.log(searchTerm);
      setFinalResult(
        items.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      console.log(searchResults);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-right">
          {showSearchbar && (
            <div className="input-bar">
              <input
                type="text"
                placeholder="Item name"
                onChange={(event) => {
                  searchItem(event.target.value);
                }}
              />
            </div>
          )}
          <button
            className="btn-icon"
            onClick={() => setShowSearchbar(!showSearchbar)}
          >
            <FaSearch />
          </button>
          <Link to="/cart">
            <button className="btn-icon">
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </Link>
          {showCartCount && (
            <div>
              <h5>{cartItems.length}</h5>
            </div>
          )}
          <button onClick={() => resetCartCount()}>reset</button>
        </div>
        <Categories categories={categories} filterCategory={filterCategory} />
      </nav>
    </>
  );
};

export default Navbar;
