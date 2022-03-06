const foodReducer = (state = [], action) => {
  switch (action.type) {
    case "POPULATE":
      if (state !== []) {
        return action.payload;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default foodReducer;
