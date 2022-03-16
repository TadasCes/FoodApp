import { FaSearch } from "react-icons/fa";
import React, { useEffect, useState } from "react";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { filterFoodShown } from "../../state/actions";
import IconButton from "../utility/IconButton";

const Navbar = ({ searchResults, setFinalResult }) => {
  const dispatch = useDispatch();
  const getFoodState = useSelector((state) => state.foodState);
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [items, setItems] = useState(getFoodState.foodAll);

  const searchItem = (searchTerm) => {
    if (searchTerm == "") {
      // setFinalResult(items);
    } else {
      const foodToShow = items.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      dispatch(filterFoodShown(foodToShow));
    }
  };

  return (
    <>
      <div className="search-bar">
        {showSearchbar && (
          <div className="search-bar-input">
            <input
              type="text"
              placeholder="Item name"
              onChange={(event) => {
                searchItem(event.target.value);
              }}
            />
          </div>
        )}
        <IconButton
          linkPath=""
          icon={FaSearch}
          onClickEvent={() => setShowSearchbar(!showSearchbar)}
        />
      </div>
    </>
  );
};

export default Navbar;
