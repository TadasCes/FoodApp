import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import Navbar from "./Navbar";

function Home() {
  const [finalResult, setFinalResult] = useState(items);

  return (
    <>
      <main className="section">
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Navbar finalResult={finalResult} setFinalResult={setFinalResult} />
          <Menu data={finalResult} />
        </section>
      </main>
    </>
  );
}

export default Home;
