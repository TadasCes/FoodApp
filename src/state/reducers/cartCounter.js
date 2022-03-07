const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET_CART":
      return (state = 0);
    default:
      return state;
  }
};

export default counterReducer;
