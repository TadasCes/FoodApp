import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import Home from "./Home";
import Error from "./Error";
import Navbar from "./Navbar";
import FoodInfo from "./FoodInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { foodPopulate, decrement } from "./actions";

function App() {
  useEffect(() => {
    dispatch(foodPopulate(items));
  });

  const [finalResult, setFinalResult] = useState(items);
  const dispatch = useDispatch();

  return (
    <Router>
      {/* <div>
        <button onClick={() => dispatch(decrement())}>- </button>
      </div> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/food-info/:id" element={<FoodInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
