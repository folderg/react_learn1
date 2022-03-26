import {combineReducers, createStore} from "redux";
import navbarReducer from "./navbar-reducer";
import chartReducer from "./chart-reducer";

let reducers = combineReducers({
    navbar: navbarReducer,
    charts: chartReducer
});
let store = createStore(reducers);

window.store = store;


export default store;