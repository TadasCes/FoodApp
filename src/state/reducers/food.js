const initialState = {
  foodAll: [],
  foodShown: [],
  foodInCart: [],
};

function findFoodInArray(state, id) {
  let foodFound = {};
  let found = false;
  state.foodInCart.forEach((food) => {
    if (food.dish.id === id) {
      found = true;
      foodFound = food;
    }
  });
  if (found) {
    return foodFound;
  } else {
    return null;
  }
}

let foodInArray = {};
export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POPULATE":
      // return (state = initialState);
      console.log(state);
      return {
        ...state,
        foodShown: action.payload,
        foodAll: action.payload,
      };

    case "ADD_TO_CART":
      // return (state = initialState);
      foodInArray = findFoodInArray(state, action.payload.id);
      if (foodInArray !== null) {
        foodInArray.count++;
        return state;
      } else {
        return {
          ...state,
          foodInCart: [...state.foodInCart, { count: 1, dish: action.payload }],
        };
      }

    case "FILTER_FOOD_SHOWN":
      return {
        ...state,
        foodShown: action.payload,
      };

    case "GET_CART_ITEMS":
      return { ...state };

    case "GET_ITEM_COUNT":
      foodInArray = findFoodInArray(state, action.payload);
      return foodInArray.count;

    case "INCREASE_CART_ITEM_COUNT":
      foodInArray = findFoodInArray(state, action.payload);
      foodInArray.count++;
      return { ...state };

    case "DECREASE_CART_ITEM_COUNT":
      foodInArray = findFoodInArray(state, action.payload);
      if (foodInArray.count <= 1) {
        state.foodInCart.splice(state.foodInCart.indexOf(foodInArray), 1);
        return { ...state };
      }

      foodInArray.count--;
      // console.log(foodInArray.count);
      return { ...state };

    case "REMOVE_CART_ITEM":
      // foodInArray = findFoodInArray(state, action.payload.id);
      // console.log(foodInArray);
      state.foodInCart.splice(action.payload.id, 1);
      return { ...state };

    case "CLEAR_CART":
      console.log(state.foodInCart);
      return {
        ...state,
        foodInCart: (state.foodInCart = []),
      };
    default:
      return state;
  }
};
