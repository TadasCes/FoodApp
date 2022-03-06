import React, { Component } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const FoodInfo = () => {
  const getAllFood = useSelector((state) => state.foodAll);
  const { id } = useParams();
  const currentFood = getAllFood[id - 1];

  console.log(getAllFood);

  return (
    <>
      <h3>{currentFood.title}</h3>
    </>
  );
};

export default FoodInfo;
