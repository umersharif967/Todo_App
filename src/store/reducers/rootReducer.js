import todoReducer from './todoReducer';
import state_reducer from './state_reducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({ todoReducer,state_reducer });
export default rootReducer;