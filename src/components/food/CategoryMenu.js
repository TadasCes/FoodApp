import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";

const CategoryMenu = ({ data }) => {
  const foodAll = useSelector((state) => state.foodState.foodAll);
  const [foodCategories, setFoodCategories] = useState([]);
  let categories = [...new Set([])];

  const getCategories = () => {
    foodAll.forEach((element) => {
      if (categories.indexOf(element.category) === -1) {
        categories.push(element.category);
      }
    });
  };

  getCategories();

  return (
    <>
      <section className="section-center">
        {(foodAll == undefined || null) && <h4>Error</h4>}
        {categories.map((category) => {
          return <CategoryItem category={category} />;
        })}
      </section>
    </>
  );
};

export default CategoryMenu;
