export const foodPopulate = (data) => {
  return {
    type: "POPULATE",
    payload: data,
  };
};

export const addFoodToCart = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};

export const filterFoodShown = (data) => {
  return {
    type: "FILTER_FOOD_SHOWN",
    payload: data,
  };
};

export const getCartItems = () => {
  return {
    type: "GET_CART_ITEMS",
  };
};

export const getCartItemCount = (id) => {
  return {
    type: "GET_ITEM_COUNT",
    payload: id,
  };
};

export const increaseCartItemCount = (id) => {
  return {
    type: "INCREASE_CART_ITEM_COUNT",
    payload: id,
  };
};
export const decreaseCartItemCount = (id) => {
  return {
    type: "DECREASE_CART_ITEM_COUNT",
    payload: id,
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const incrementCart = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrementCart = () => {
  return {
    type: "DECREMENT",
  };
};

export const resetCart = () => {
  return {
    type: "RESET_CART",
  };
};
