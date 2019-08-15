import { all } from 'redux-saga/effects';
import { surveysWatcher } from './surveys';

/**
 * Gets a list sagas.
 */
export default function* rootSaga() {
  yield all([
    surveysWatcher(),
  ]);
}