import { takeEvery, call, put } from "@redux-saga/core/effects";
import { CONFIG } from "data/config";
import {
    FETCH_SURVEY_INFO, SURVEY_INFO_RECIEVED, SURVEY_INFO_FAILED
} from "consts/surveys";

/**
 * Gets a list with surveys.
 */
function* getSurveyInfo(action: any) {
    try {
        const data = yield call(() => fetch(`${CONFIG.API_PATH}surveys/${action.payload}`, {
            mode: 'cors',
        }).then(res => { return res.json(); }));

        yield put({ type: SURVEY_INFO_RECIEVED, payload: data.survey, });
    } catch (e) {
        console.log(e);
        yield put({ type: SURVEY_INFO_FAILED, payload: e, });
    }
}

/**
 * Saga watcher.
 */
export function* surveyInfoWatcher() {
    yield takeEvery(FETCH_SURVEY_INFO, getSurveyInfo)
}