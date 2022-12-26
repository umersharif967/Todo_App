import {createStore} from "redux";
import rootReducer from "../Reducers/CombinedReducer.jsx";
const store = createStore(rootReducer);

export default store;
