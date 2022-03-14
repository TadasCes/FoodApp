import React, { useEffect, useState } from "react";
import items from "./data";
import Home from "./Home";
import Cart from "./components/checkout/Cart";
import FoodInfo from "./components/food/FoodInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { foodPopulate } from "./state/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(foodPopulate(items));
  });

  return (
    <Router>
      {/* <div>
        <button onClick={() => dispatch(decrement())}>- </button>
      </div> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/food-info/:id" element={<FoodInfo />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
