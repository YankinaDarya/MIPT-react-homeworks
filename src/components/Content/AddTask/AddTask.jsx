import React, {Component} from 'react';
import s from "./AddTask.module.css";
import TaskFormContainer from "./TaskFrom/TaskFormContainer";
import TaskButtonsContainer from "./TaskButton/TaskButtonsContainer";

const AddTask = (props) => {
    return (
        <div className={s.addTask}>
            <div className={s.addTaskContent}>
                <div className={s.title}>New task</div>
                <TaskFormContainer store={props.store}/>
                <TaskButtonsContainer store={props.store}/>
            </div>
        </div>
    );
};

export default AddTask;
