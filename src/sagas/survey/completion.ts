import { takeEvery, call, put } from "@redux-saga/core/effects";
import { CONFIG } from "data/config";
import {
    CREATE_SURVEY_COMPLETION, CREATE_SURVEY_COMPLETION_RECIEVED,
    CREATE_SURVEY_COMPLETION_FAIL
} from "consts/surveys";

/**
 * Gets a list with surveys.
 */
function* surveyCompletion(action: any) {
    try {
        const response = yield call(() => fetch(`${CONFIG.API_PATH}surveys/${action.payload.surveyId}/completions`, {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(action.payload.selectedOptions)
        }).then(res => { return res.json(); }));

        yield put({ type: CREATE_SURVEY_COMPLETION_RECIEVED, payload: response, });
    } catch (e) {
        console.log(e);
        yield put({ type: CREATE_SURVEY_COMPLETION_FAIL, payload: e, });
    }
}

/**
 * Saga watcher.
 */
export function* surveyCompletionWatcher() {
    yield takeEvery(CREATE_SURVEY_COMPLETION, surveyCompletion)
}