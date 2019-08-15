import { combineReducers } from "redux";
import surveys from "./surveys";

/**
 * Mixs reducers.
 */
const reducers = combineReducers({
  surveys,
});

export default reducers;