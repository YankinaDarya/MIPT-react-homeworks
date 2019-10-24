import React, {Component} from 'react';
import s from './Content.module.css';
import TasksBoardContainer from "./TasksBoard/TasksBoardContainer";
import AddTaskContainer from "./AddTask/AddTaskContainer";

const Content = (props) => {
    return (<div className={s.layout}>
        <div className={s.addTaskContent}>
            <div className={s.title}>New task</div>
            <AddTaskContainer/>
        </div>
        <TasksBoardContainer/>
    </div>);
};

export default Content;
