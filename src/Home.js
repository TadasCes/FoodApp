import React, { useState } from "react";
import { useSelector } from "react-redux";
import Menu from "./food/Menu";
import items from "./data";
import Navbar from "./navbar/Navbar";
import { useEffect } from "react";

function Home() {
  const [finalResult, setFinalResult] = useState([]);
  const getAllFood = useSelector((state) => state.foodState);

  return (
    <>
      <main className="section">
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Navbar finalResult={finalResult} setFinalResult={setFinalResult} />
          <Menu data={getAllFood} />
        </section>
      </main>
    </>
  );
}

export default Home;
