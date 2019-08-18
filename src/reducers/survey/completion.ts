import {
    CREATE_SURVEY_COMPLETION,
    CREATE_SURVEY_COMPLETION_FAIL,
    CREATE_SURVEY_COMPLETION_RECIEVED,
    CLEAR_SURVEY_COMPLETION,
} from "consts/surveys";

/**
 * Init state for a user account.
 */
export const initState = {
    isFetching: false,
    isSuccess: false,
    error: null,
}

/**
 * A enum with response statuses.
 */
export enum RESPONSE_STATUSES {
    OK = 'ok',
}

/**
 * Surveys reducer.
 */
function surveysCompletion(state = initState, action: any) {
    switch (action.type) {
        case CREATE_SURVEY_COMPLETION:
            return Object.assign({}, state, {
                isFetching: true,
                isSuccess: false,
                error: null,
            });
        case CREATE_SURVEY_COMPLETION_RECIEVED:
            return Object.assign({}, state, {
                isFetching: false,
                isSuccess: action.payload.status === RESPONSE_STATUSES.OK,
                error: null,
            });
        case CREATE_SURVEY_COMPLETION_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.payload,
                isSuccess: false,
            });
        case CLEAR_SURVEY_COMPLETION:
            return Object.assign({}, state, {
                isFetching: false,
                error: null,
                isSuccess: false,
            });
        default:
            return state
    }
}

export default surveysCompletion;