import { combineReducers } from "redux";
import { getReducer } from "./getReducer";
export default combineReducers({
  gets: getReducer,
});
