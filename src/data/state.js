let renderEntireTree = () => {
    console.log("no matter what");
};
let state = {
    tasks: {
        posts: [],
        id: 1,
        newDescription: '',
        newPostText: '',
        newPriority: ''
    }
};

export const nameSort = () => {
    state.tasks.posts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    renderEntireTree(state);
};

export const prioritySort = () => {
    state.tasks.posts.sort((a,b) => (a.priority > b.priority) ? 1 : ((b.priority > a.priority) ? -1 : 0));
    renderEntireTree(state);
};

export const addPost = () => {
    let newPost = {id: state.tasks.id++, name: state.tasks.newPostText, description: state.tasks.newDescription, priority:state.tasks.newPriority};

    state.tasks.posts.push(newPost);

    state.tasks.newPostText = '';
    state.tasks.newDescription = '';
    state.tasks.newPriority = '';
    renderEntireTree(state);
};

export const updateNewPostText = (newText, newPriority, newDescription) => {
    state.tasks.newPostText = newText;
    state.tasks.newPriority = newPriority;
    state.tasks.newDescription = newDescription;
    renderEntireTree(state);
};

export const subscribe = (observer) => {
    renderEntireTree = observer;
};

export default state;