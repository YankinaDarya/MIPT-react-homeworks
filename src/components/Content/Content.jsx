import React, {Component} from 'react';
import s from './Content.module.css';
import AddTask from "./AddTask/AddTask";
import TasksBoardContainer from "./TasksBoard/TasksBoardContainer";

const Content = (props) => {
    return (<div className={s.layout}>
        <AddTask store={props.store}/>
        <TasksBoardContainer store={props.store}/>
    </div>);
};

export default Content;
