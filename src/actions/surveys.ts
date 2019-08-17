import { FETCH_SURVEY_LIST, FETCH_SURVEY_INFO, UPDATE_SELECTED_OPTION } from "consts/surveys";

/**
 * An action for fetching survey list.
 */
export const fetchSurveyList = () => {
  return {
    type: FETCH_SURVEY_LIST,
  }
}

/**
 * An action for fetching survey info.
 */
export const fetchSurveyInfo = (surveyId: string) => {
  return {
    type: FETCH_SURVEY_INFO,
    payload: surveyId,
  }
}

/**
 * An action for fetching survey info.
 */
export const updateSelectedOption = (key: string, value: string) => {
  return {
    type: UPDATE_SELECTED_OPTION,
    payload: {key, value,},
  }
}