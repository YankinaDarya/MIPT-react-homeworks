import {addProject, getProjects} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_ALL_PROJECTS = 'SET-ALL-PROJECTS';
const PROJECTS_INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
    projects: [],
    initialized: false
};

const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_PROJECTS:
            return {
                ...state,
                projects: action.projects
            };
        case PROJECTS_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };

        default:
            return state;
    }
};

export default projectsReducer;

export const setAllProjects = (projects) => ({type: SET_ALL_PROJECTS, projects});
export const projectsInitializedSuccess = () => ({type: PROJECTS_INITIALIZED_SUCCESS});

export const addNewProject = (name) => (dispatch) => {
    addProject(name)
        .then((response => {
            if (response === null) {
                dispatch(getMyProjects());
            }
        }))
};
export const getMyProjects = () => (dispatch) => {
    return getProjects()
        .then((response => {
                dispatch(setAllProjects(response));///project.id, projects.name
        }))
};

export const initializeProjects = () => (dispatch) => {
    let promise = dispatch(getMyProjects());
    Promise.all([promise])
        .then(() => {
            dispatch(projectsInitializedSuccess());
        });
};