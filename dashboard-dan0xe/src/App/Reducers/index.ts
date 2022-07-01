import formReducer from "./formState";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  showForm: formReducer,
});

export default allReducers;
