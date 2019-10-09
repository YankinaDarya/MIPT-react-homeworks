const ADD_TASK = 'ADD-TASK';
const NAME_SORT = 'NAME-SORT';
const PRIORITY_SORT = 'PRIORITY-SORT';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts: [],
        id: 1,
        newDescription: '',
        newPostText: '',
        newPriority: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            let newTask = {
                id: state.id++,
                name: state.newPostText,
                description: state.newDescription,
                priority: state.newPriority
            };
            return {...state,
                posts: [...state.posts, newTask],
                newPostText: '',
                newDescription: '',
                newPriority: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {...state,
                newPostText: action.newText,
                newPriority: action.newPriority,
                newDescription: action.newDescription
            };
        case NAME_SORT: {
            return { ...state,
                posts: [...state.posts.sort((a,b) => (a.namr > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))]
            }
        }
        case PRIORITY_SORT: {
            return { ...state,
                posts: [...state.posts.sort((a,b) => (a.priority > b.priority) ? 1 : ((b.priority > a.priority) ? -1 : 0))]
            }
        }
        default:
            return state;
    }
};

export default reducer;
export const addTaskActionCreator = () => ({type: ADD_TASK});
export const updateNewPostActionCreator = (text, priority, description) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text,
    newPriority: priority, newDescription: description
});
export const nameSortActionCreator = () => ({type: NAME_SORT});
export const prioritySortActionCreator = () => ({type: PRIORITY_SORT});