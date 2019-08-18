import { combineReducers } from "redux";
import surveys from "./survey/list";
import surveysInfo from "./survey/info";
import surveyCompletion from "./survey/completion";

/**
 * Mixs reducers.
 */
const reducers = combineReducers({
  surveys,
  surveysInfo,
  surveyCompletion,
});

export default reducers;