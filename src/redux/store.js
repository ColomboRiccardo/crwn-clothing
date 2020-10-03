import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; //we put all of our middlewares here, so we can pass them easily

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
