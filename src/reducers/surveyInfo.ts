import {
    SURVEY_INFO_RECIEVED, FETCH_SURVEY_INFO, SURVEY_LIST_FAILED, 
    UPDATE_SELECTED_OPTION
} from "consts/surveys";

/**
 * Init state for a user account.
 */
const initState = {
    surveyInfo: null,
    selectedOptions: {},
    error: null,
    isFetching: false,
    surveyId: null,
}

/**
 * Surveys reducer.
 */
function surveysInfo(state = initState, action: any) {
    switch (action.type) {
        case FETCH_SURVEY_INFO:
            return Object.assign({}, state, {
                isFetching: true,
                error: null,
                surveyInfo: null,
                surveyId: action.payload,
            });
        case SURVEY_INFO_RECIEVED:
            return Object.assign({}, state, {
                isFetching: false,
                surveyInfo: action.payload,
            });
        case SURVEY_LIST_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.payload,
                surveyInfo: null,
            });
        case UPDATE_SELECTED_OPTION:
            const selectedOptions: any =  Object.assign({}, state.selectedOptions);
            selectedOptions[action.payload.key] = action.payload.value;

            return Object.assign({}, state, {
                selectedOptions,
            });
        default:
            return state
    }
}

export default surveysInfo;