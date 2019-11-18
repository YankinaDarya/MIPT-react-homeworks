import {applyMiddleware,createStore, compose, combineReducers} from "redux";
import tasksReducer from "./tasks-reducer";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from "redux-thunk";
import projectsReducer from "./projects-reducer";

let reducers = combineReducers({
    tasksReducer: tasksReducer,
    form: formReducer,
    projectsReducer: projectsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
