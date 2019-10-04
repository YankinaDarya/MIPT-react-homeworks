import React from 'react';
import './App.css';
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            <TodoList tasksInfo={props.appState.tasks} addPost={props.addPost}
                      updateNewPostText={props.updateNewPostText} nameSort={props.nameSort}
                      prioritySort={props.prioritySort}/>
        </div>
    );
};

export default App;