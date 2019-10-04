import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./data/state";
import {addPost, updateNewPostText, nameSort, prioritySort} from './data/state';

let renderEntireTree = (state) => {
    ReactDOM.render(<App appState={state} addPost={addPost} updateNewPostText={updateNewPostText} nameSort={nameSort} prioritySort={prioritySort}/>, document.getElementById('root'));
};

renderEntireTree(state);

subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
