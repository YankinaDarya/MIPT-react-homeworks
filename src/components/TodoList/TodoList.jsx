import React, {Component} from 'react';
import s from './TodoList.module.css';
import MyTasks from "./MyTasks/MyTasks";

const TodoList = (props) => {
    return (<div>
        <MyTasks tasks={props.tasksInfo.posts} addPost={props.addPost} newPostText={props.tasksInfo.newPostText}
                 updateNewPostText={props.updateNewPostText} newPriority={props.tasksInfo.newPriority}
                 newDescription={props.tasksInfo.newDescription} nameSort={props.nameSort} prioritySort={props.prioritySort}/>
    </div>);
};

export default TodoList;
