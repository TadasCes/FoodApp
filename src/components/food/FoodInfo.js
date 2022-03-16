import React, { useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import BackButton from "../utility/BackButton";
import { incrementCart, addFoodToCart } from "../../state/actions";
import Popup from "../Popup";

const FoodInfo = () => {
  const dispatch = useDispatch();
  const [buttonPopup, setButtonPopup] = useState(false);

  const getFoodState = useSelector((state) => state.foodState);
  const { id } = useParams();
  const currentFood = getFoodState.foodAll[id - 1];

  const addToCart = () => {
    dispatch(incrementCart());
    dispatch(addFoodToCart(currentFood));
    setButtonPopup(true);
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
          <div id="food-info-category">
            <div className="food-info-category">
              <h4>Category: </h4>
              <h4>{currentFood.category}</h4>
            </div>
            <div className="food-info-price" id="food-info-price">
              <h4>Price: </h4>
              <h4>€{currentFood.price}</h4>
            </div>
          </div>
          <div className="food-info-description" id="food-info-description">
            <h3>Description</h3>
            <p>{currentFood.desc}</p>
          </div>
          <div className="food-info-footer" id="food-info-footer">
            <BackButton to={`./menu/${currentFood.category}`} />
            <button className="btn btn-primary" onClick={() => addToCart(id)}>
              Order
            </button>
          </div>
          <Popup
            trigger={buttonPopup}
            text="Food added to cart successfully!"
            setTrigger={setButtonPopup}
            isYesNoBtn={false}
          ></Popup>
        </div>
      </div>
    </>
  );
};

export default FoodInfo;
