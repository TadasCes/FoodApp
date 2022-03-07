import { combineReducers } from "redux";
import loggedReducer from "./isLogged";
import cartCounter from "./cartCounter";
import { foodReducer, foodStateReducer } from "./food";

const allReducers = combineReducers({
  cartCounter: cartCounter,
  isLogged: loggedReducer,
  foodState: foodReducer,
});

export default allReducers;
