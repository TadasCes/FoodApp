import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementCart, addFoodToCart } from "../../state/actions";

const CategoryItem = ({ category }) => {
  const { img, title } = category;

  return (
    <>
      <Link to={`/menu/${title}`}>
        <article className="category-item">
          <img src={img} alt="" className="category-photo" />
          <h4>{title}</h4>
        </article>
      </Link>
    </>
  );
};

export default CategoryItem;
