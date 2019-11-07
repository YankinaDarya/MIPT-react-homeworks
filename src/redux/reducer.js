const ADD_TASK = 'ADD-TASK';
const NAME_SORT = 'NAME-SORT';
const PRIORITY_SORT = 'PRIORITY-SORT';
const DELETE_TASK = 'DELETE-TASK';

let initialState = {
        posts: [],
        id: 1
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            let newTask = {
                id: state.id++,
                name: action.name,
                description: action.description,
                priority: action.priority
            };
            return {...state,
                posts: [...state.posts, newTask],
            };
        case NAME_SORT: {
            return { ...state,
                posts: [...state.posts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))]
            }
        }
        case PRIORITY_SORT: {
            return { ...state,
                posts: [...state.posts.sort((a,b) => (a.priority > b.priority) ? 1 : ((b.priority > a.priority) ? -1 : 0))]
            }
        }
        case DELETE_TASK: {
            debugger;
            return { ...state,
                posts: state.posts.filter(function(task) {
                    return task.id !== action.id
                })
            }
        }
        default:
            return state;
    }
};

export default reducer;
export const addTaskActionCreator = (name, description, priority) => ({type: ADD_TASK, name, description, priority});
export const nameSortActionCreator = () => ({type: NAME_SORT});
export const prioritySortActionCreator = () => ({type: PRIORITY_SORT});
export const deleteTaskAC = (id) => ({type: DELETE_TASK, id});