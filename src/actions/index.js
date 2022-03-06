export const foodPopulate = (data) => {
  return {
    type: "POPULATE",
    payload: data,
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
