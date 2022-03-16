import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import Categories from "../../data/categoryData";

const CategoryMenu = ({ data }) => {
  const foodAll = useSelector((state) => state.foodState.foodAll);
  const [foodCategories, setFoodCategories] = useState(Categories);

  return (
    <>
      <section className="section-center">
        {(foodAll == undefined || null) && <h4>Error</h4>}
        {foodCategories.map((element) => {
          return <CategoryItem key={element.id} category={element} />;
        })}
      </section>
    </>
  );
};

export default CategoryMenu;
