/**
 * @file redux store
 * @author vaer
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from '../reducers';
import saga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware, logger)
);
const enhancerNullLogger = composeEnhancers(
    applyMiddleware(sagaMiddleware)
);
let store = createStore(reducer, enhancer);

if (process.env.NODE_ENV === 'development') {
    store = createStore(reducer, enhancerNullLogger);
}
// 必须有个run函数，才能可以访问
sagaMiddleware.run(saga);

export default store;