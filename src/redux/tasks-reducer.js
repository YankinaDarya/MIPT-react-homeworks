import {addTask, getTasks} from "../api/api";
import {stopSubmit} from "redux-form";

const NAME_SORT = 'NAME-SORT';
const PRIORITY_SORT = 'PRIORITY-SORT';
const TASKS_INITIALIZED_SUCCESS = 'TASKS-INITIALIZED-SUCCESS';
const SET_ALL_TASKS = 'SET-ALL-TASKS';
const TASKS_INITIALIZED_FALSE = 'TASKS-INITIALIZED-FALSE';
/*const DELETE_TASK = 'DELETE-TASK';*/

let initialState = {
    tasks: [],
    initialized: false,
    projectId: null
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_TASKS:
            return {
                ...state,
                tasks: action.tasks
            };
        case NAME_SORT: {
            return {
                ...state,
                tasks: [...state.tasks.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))]
            }
        }
        case PRIORITY_SORT: {
            return {
                ...state,
                tasks: [...state.tasks.sort((a, b) => (a.priority > b.priority) ? 1 : ((b.priority > a.priority) ? -1 : 0))]
            }
        }
        case TASKS_INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
                projectId: action.projectId
            };
        }
        case TASKS_INITIALIZED_FALSE: {
            return {
                ...state,
                initialized: false
            };
        }
        /*case DELETE_TASK: {
            debugger;
            return {
                ...state,
                posts: state.posts.filter(function (task) {
                    return task.id !== action.id
                })
            }
        }*/
        default:
            return state;
    }
};

export default tasksReducer;

export const nameSortActionCreator = () => ({type: NAME_SORT});
export const prioritySortActionCreator = () => ({type: PRIORITY_SORT});
export const setAllTasks = (tasks) => ({type: SET_ALL_TASKS, tasks});
export const tasksInitializedSuccess = (projectId) => ({type: TASKS_INITIALIZED_SUCCESS, projectId});
export const tasksInitializedFalse = () => ({type: TASKS_INITIALIZED_FALSE});

export const addNewTask = (name, description, priority, projectId) => (dispatch) => {
    priority = parseInt(priority, 10);
    addTask(name, description, projectId, priority)
        .then((response => {
            if (response === null) {
                dispatch(getMyTasks(projectId));
            }
        }))
};
export const getMyTasks = (projectId) => (dispatch) => {
    dispatch(tasksInitializedFalse());
    return getTasks(projectId)
        .then((response => {
            dispatch(setAllTasks(response));
        }))
};

export const initializeTasks = (projectId) => (dispatch) => {
    let promise = dispatch(getMyTasks(projectId));
    Promise.all([promise])
        .then(() => {
            dispatch(tasksInitializedSuccess(projectId));
        });
};