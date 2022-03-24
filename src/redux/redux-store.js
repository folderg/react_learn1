import {combineReducers, createStore} from "redux";
import navbarReducer from "./navbar-reducer";

let reducers = combineReducers({
    navbar: navbarReducer
});
let store = createStore(reducers);

window.store = store;


export default store;