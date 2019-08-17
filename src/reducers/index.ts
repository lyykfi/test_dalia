import { combineReducers } from "redux";
import surveys from "./surveys";
import surveysInfo from "./surveyInfo";

/**
 * Mixs reducers.
 */
const reducers = combineReducers({
  surveys,
  surveysInfo,
});

export default reducers;