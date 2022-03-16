import React, { useState } from "react";
import Menu from "./components/food/Menu";
import items from "./data/foodData";
import Navbar from "./components/navbar/Navbar";
import CategoryMenu from "./components/food/CategoryMenu";

function Contacts() {
  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Contact page</h2>
            <div className="underline"></div>
          </div>
          <div className="contact-page">
            <div className="contact-page-info">
              <ul>
                <li>+37062341300</li>
                <li>vilkelis.vainius@gmail.com</li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vainius-vilkelis/"
                    className="link"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contacts;
