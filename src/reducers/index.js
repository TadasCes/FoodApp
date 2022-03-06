import { combineReducers } from "redux";
import loggedReducer from "./isLogged";
import cartCounter from "./cartCounter";
import foodReducer from "./food";

const allReducers = combineReducers({
  cartCounter: cartCounter,
  isLogged: loggedReducer,
  foodAll: foodReducer,
});

export default allReducers;
