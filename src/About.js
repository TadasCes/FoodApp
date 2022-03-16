import React, { useState } from "react";
import Menu from "./components/food/Menu";
import items from "./data/foodData";
import Navbar from "./components/navbar/Navbar";
import CategoryMenu from "./components/food/CategoryMenu";

function About() {
  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>About this project</h2>
            <div className="underline"></div>
          </div>
          <div className="about-page">
            <div className="about-page-info">
              <p>
                This project is made for learning purposes only. Main
                technologies used: React, Redux, SCSS{" "}
              </p>
              <p>
                This project is open source, you can check it here:{" "}
                <a href="https://github.com/VilkelisV/FoodApp" className="link">
                  Github
                </a>{" "}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
