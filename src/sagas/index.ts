import { all } from 'redux-saga/effects';
import { surveysWatcher } from './survey/list';
import { surveyInfoWatcher } from './survey/info';
import { surveyCompletionWatcher } from "./survey/completion";

/**
 * Gets a list sagas.
 */
export default function* rootSaga() {
  yield all([
    surveysWatcher(),
    surveyInfoWatcher(),
    surveyCompletionWatcher(),
  ]);
}