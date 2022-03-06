import React from "react";
import FoodInfo from "./FoodInfo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import Error from "./Error";

const Menu = ({ data }) => {
  return (
    <>
      <section className="section-center">
        {data.map((item) => {
          return <MenuItem key={item.id} {...item} />;
        })}
      </section>
    </>
  );
};

export default Menu;
