/** @format */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { spawn } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

import {
  signInReducer,
  signInSaga,
  videoListReducer,
  videoSaga
} from './modules';

const rootReducer = combineReducers({
  signIn: signInReducer,
  video: videoListReducer
});

const reducers = (state, action) => {
  return rootReducer(state, action);
};

function* sagas() {
  yield spawn(signInSaga);
  yield spawn(videoSaga);
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware ];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);
