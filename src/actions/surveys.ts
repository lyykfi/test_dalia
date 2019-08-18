import {
  FETCH_SURVEY_LIST, FETCH_SURVEY_INFO, 
  UPDATE_SELECTED_OPTIONS, CREATE_SURVEY_COMPLETION, 
  CLEAR_SURVEY_COMPLETION } from "consts/surveys";

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
export const updateSelectedOptions = (newSelectedOptions: { [key: string]: string; }) => {
  return {
    type: UPDATE_SELECTED_OPTIONS,
    payload: newSelectedOptions,
  }
}

/**
 * @todo add comment
 * @param response @
 */
export const createSurveyCompletion = (surveyId: string, selectedOptions: { [key: string]: string; }) => {
  const response = {completion: []};
  Object.keys(selectedOptions).forEach((key) => {
    (response.completion as any).push({question_id: key, value: selectedOptions[key]});
  });

  return {
    type: CREATE_SURVEY_COMPLETION,
    payload: { surveyId, selectedOptions: response, },
  }
}

/**
 * @todo add comment
 * @param response @
 */
export const clearSurveyCompletion = () => {
  return {
    type: CLEAR_SURVEY_COMPLETION,
  }
}