import { Action } from "./action";
import { FETCH_SURVEY_LIST } from "consts/surveys";

/**
 * An action for fetching survey list.
 */
export const fetchSurveyList = (): Action => {
    return {
      type: FETCH_SURVEY_LIST,
    }
}