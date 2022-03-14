import React from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import BackButton from "../utility/BackButton";
import { incrementCart, addFoodToCart } from "../../state/actions";

const FoodInfo = () => {
  const dispatch = useDispatch();

  const getFoodState = useSelector((state) => state.foodState);
  const { id } = useParams();
  const currentFood = getFoodState.foodAll[id - 1];
  console.log(currentFood.img);

  const addToCart = () => {
    dispatch(incrementCart());
    dispatch(addFoodToCart(currentFood));
  };

  return (
    <>
      <div className="container-center">
        <div className="food-info-grid">
          <div className="food-info-image" id="food-info-image">
            <img src={currentFood.img} alt="" className="food-info-photo" />
          </div>
          <div className="food-info-header" id="food-info-header">
            <h2>{currentFood.title}</h2>
          </div>
          <div className="food-info-category" id="food-info-category">
            <h4>Category: </h4>
            <h4>{currentFood.category}</h4>
          </div>
          <div className="food-info-price" id="food-info-price">
            <h4>Price: </h4>
            <h4>{currentFood.price}</h4>
          </div>
          <div className="food-info-description" id="food-info-footer">
            <h3>Description</h3>
            <p>{currentFood.desc}</p>
          </div>
          <BackButton />
          <button className="btn btn-primary" onClick={() => addToCart(id)}>
            Order
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodInfo;
