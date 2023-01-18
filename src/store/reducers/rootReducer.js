import todoReducer from './todoReducer';
import stateReducer from './state_reducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({ todoReducer,stateReducer });
export default rootReducer;