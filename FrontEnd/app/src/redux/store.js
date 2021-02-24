import { createStore } from 'redux';
import { combineReducers } from 'redux';
import reducers from './reducers';

var state = {
    name: "",
    email: "",
}

var combinedReducer = combineReducers(reducers);
const store = createStore(combinedReducer, state);
export default store;