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

export const getCartItems = () => {
  return {
    type: "GET_CART_ITEMS",
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
