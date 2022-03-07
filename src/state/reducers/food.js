const initialState = {
  foodAll: [],
  foodInCart: [],
};

function nextFoodId(foods) {
  const maxId = foods.reduce((maxId, food) => Math.max(food.id, maxId), -1);
  return maxId + 1;
}

export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POPULATE":
      return {
        ...state,
        foodAll: action.payload,
      };
    case "ADD_TO_CART":
      console.log(action.payload);
      return {
        ...state,
        foodInCart: [...state.foodInCart, action.payload],
      };

    case "GET_CART_ITEMS":
      return state;
    case "CLEAR_CART":
      console.log(state.foodInCart);
      return {
        ...state,
        foodInCart: [],
      };
    default:
      return state;
  }
};

export const foodStateReducer = (state = initialState.foodInCart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      state = [];
      return {
        ...state,
        foodInCart: [
          ...state.foodInCart,
          {
            foodInCart: state.foodInCart.push(action.payload),
          },
        ],
      };
    case "GET_CART_ITEMS":
      return state;
    case "CLEAER_CART":
      console.log(state.foodInCart);
      return {
        ...state,
        foodInCart: [],
      };
    default:
      return state;
  }
};
