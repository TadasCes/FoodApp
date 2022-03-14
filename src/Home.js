import React, { useState } from "react";
import Menu from "./components/food/Menu";
import items from "./data";
import Navbar from "./components/navbar/Navbar";

function Home() {
  return (
    <>
      <main className="section">
        <Navbar />
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Menu />
        </section>
      </main>
    </>
  );
}

export default Home;
