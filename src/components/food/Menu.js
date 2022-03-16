import React, { useState } from "react";
import { useParams } from "react-router";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import BackButton from "../utility/BackButton";

const Menu = ({ data }) => {
  const shownFood = useSelector((state) => state.foodState.foodShown);
  const { category } = useParams();

  const [filteredFood, setFilteredFood] = useState(() => {
    let filteredArray = [];
    shownFood.forEach((element) => {
      if (element.category === category) {
        filteredArray.push(element);
      }
    });
    return filteredArray;
  });

  return (
    <>
      <main className="section">
        <section className="menu section">
          <BackButton to={""} />
          <div className="title">
            <h2>{category}</h2>
            <div className="underline"></div>
          </div>
          <div className="grid-wrapper">
            {(filteredFood == undefined || null) && <h4>Error</h4>}
            {filteredFood.map((item) => {
              return <MenuItem key={item.id} {...item} />;
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Menu;
