import todoReducer from './todoReducer';
import stateReducer from './stateReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ todoReducer,stateReducer });
export default rootReducer;