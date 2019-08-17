import { all } from 'redux-saga/effects';
import { surveysWatcher } from './surveys';
import { surveyInfoWatcher } from './survey_info';

/**
 * Gets a list sagas.
 */
export default function* rootSaga() {
  yield all([
    surveysWatcher(),
    surveyInfoWatcher(),
  ]);
}