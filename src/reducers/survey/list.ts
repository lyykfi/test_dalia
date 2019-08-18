import {
  SURVEY_LIST_RECIEVED, SURVEY_LIST_FAILED, FETCH_SURVEY_LIST
} from "consts/surveys";

/**
 * Init state for a user account.
 */
export const initState = {
    surveyList: null,
    isFetching: false,
    surveyListError: null,
}

/**
 * Surveys reducer.
 */
function surveys(state = initState, action: any) {
  switch (action.type) {
    case FETCH_SURVEY_LIST:
      return Object.assign({}, state, {
        surveyList: null,
        isFetching: true,
        surveyListError: null,
      });
    case SURVEY_LIST_RECIEVED:
      return Object.assign({}, state, {
        surveyList: action.payload,
        isFetching: false,
        surveyListError: null,
      });
    case SURVEY_LIST_FAILED:
      return Object.assign({}, state, {
        surveyList: null,
        isFetching: false,
        surveyListError: action.payload,
      });
    default:
      return state
  }
}

export default surveys;