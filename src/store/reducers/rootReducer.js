import todoReducer from './todoReducer';
import stateReducer from './stateReducer';
import fetchReducer from './fetchReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ todoReducer,stateReducer,fetchReducer });
export default rootReducer;