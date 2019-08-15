import { takeEvery, call, put } from "@redux-saga/core/effects";
import { CONFIG } from "data/config";
import { SurveyListItem } from "models/survey";
import { FETCH_SURVEY_LIST, SURVEY_LIST_RECIEVED, SURVEY_LIST_FAILED } from "consts/surveys";

/**
 * Gets a list with surveys.
 */
function* getSurveyList() {
    try {
        const data = yield call(() => fetch(`${CONFIG.API_PATH}/surveys`, {
            mode: 'cors',
        }).then(res => { return res.json(); }));

        yield put({ type: SURVEY_LIST_RECIEVED, payload: data, });
    } catch (e) {
        console.log(e);
        yield put({ type: SURVEY_LIST_FAILED, payload: e, });
    }
}

/**
 * Saga watcher.
 */
export function* surveysWatcher() {
    yield takeEvery(FETCH_SURVEY_LIST, getSurveyList)
}