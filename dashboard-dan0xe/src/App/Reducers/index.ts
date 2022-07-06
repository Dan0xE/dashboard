import formReducer from "./formState";
import clockReducer from "./clockState";
import weatherReducer from "./weatherState";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  showForm: formReducer,
  showClock: clockReducer,
  showWeather: weatherReducer,
});

export default allReducers;
