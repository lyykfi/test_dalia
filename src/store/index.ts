import { createStore, applyMiddleware, Store } from 'redux';
import reducers from 'reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas/index';

/**
 * Gets a new store instance.
 */
export function getStore(): Store {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducers, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(rootSaga);

    return store;
}