import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementCart, addFoodToCart } from "../../state/actions";

const CategoryItem = ({ category }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Link to={`/menu/${category}`}>
        <article className="menu-item">
          <h4>{category}</h4>
        </article>
      </Link>
    </>
  );
};

export default CategoryItem;
