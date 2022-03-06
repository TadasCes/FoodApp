import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Navbar = ({ searchResults, setFinalResult }) => {
  const [categories, setAllCategories] = useState(allCategories);
  const [showSearchbar, setShowSearchbar] = useState(false);

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
          <button className="btn-icon">
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
        <Categories categories={categories} filterCategory={filterCategory} />
      </nav>
    </>
  );
};

export default Navbar;
