import React, { useState } from "react";
import Menu from "./components/food/Menu";
import items from "./data/foodData";
import Navbar from "./components/navbar/Navbar";
import CategoryMenu from "./components/food/CategoryMenu";

function Home() {
  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Menu</h2>
            <div className="underline"></div>
          </div>
          <CategoryMenu />
        </section>
      </main>
    </>
  );
}

export default Home;
