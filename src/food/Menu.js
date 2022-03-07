import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ data }) => {
  return (
    <>
      <section className="section-center">
        {data.foodAll.map((item) => {
          return <MenuItem key={item.id} {...item} />;
        })}
      </section>
    </>
  );
};

export default Menu;
