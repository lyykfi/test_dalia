import {
  FETCH_SURVEY_LIST, FETCH_SURVEY_INFO, 
  UPDATE_SELECTED_OPTIONS, CREATE_SURVEY_COMPLETION, 
  CLEAR_SURVEY_COMPLETION } from "consts/surveys";

/**
 * An action for fetching survey list.
 * @returns An action.
 */
export const fetchSurveyList = (): any => {
  return {
    type: FETCH_SURVEY_LIST,
  }
}

/**
 * An action for fetching survey info.
 */
export const fetchSurveyInfo = (surveyId: string): any => {
  return {
    type: FETCH_SURVEY_INFO,
    payload: surveyId,
  }
}

/**
 * An action for updating selected options.
 * @param newSelectedOptions - An object with selected objects.
 */
export const updateSelectedOptions = (newSelectedOptions: { [key: string]: string }): any => {
  return {
    type: UPDATE_SELECTED_OPTIONS,
    payload: newSelectedOptions,
  }
}

/**
 * An action for creating survey completion.
 * @param surveyId - Id of survey.
 * @param selectedOptions - An object with selected options.
 */
export const createSurveyCompletion = (surveyId: string, selectedOptions: { [key: string]: string }): any => {
  const response = {completion: []};
  Object.keys(selectedOptions).forEach((key) => {
    (response.completion as any).push({"question_id": key, value: selectedOptions[key]});
  });

  return {
    type: CREATE_SURVEY_COMPLETION,
    payload: { surveyId, selectedOptions: response, },
  }
}

/**
 * An action for clearing survey completion state.
 */
export const clearSurveyCompletion = (): any => {
  return {
    type: CLEAR_SURVEY_COMPLETION,
  }
}