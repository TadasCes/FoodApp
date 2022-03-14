import React from "react";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

const Menu = ({ data }) => {
  const shownFood = useSelector((state) => state.foodState.foodShown);

  return (
    <>
      <section className="section-center">
        {(shownFood == undefined || null) && <h4>Error</h4>}
        {console.log(shownFood)}
        {shownFood.map((item) => {
          return <MenuItem key={item.id} {...item} />;
        })}
      </section>
    </>
  );
};

export default Menu;
