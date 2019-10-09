import React, {Component} from 'react';
import s from "./TaskButtons.module.css";

const TaskButtons = (props) => {

    const addNewTask = () => {
        props.addTask();
    };

    const onNameSort = () => {
        props.nameSort();
    };

    const onPrioritySort = () => {
        props.prioritySort();
    };

    return (<div>
            <div>
                <button className={s.add} onClick={addNewTask}>Add Task</button>
            </div>
            <div>
                <button onClick={onNameSort}>Sort by name</button>
            </div>
            <div>
                <button onClick={onPrioritySort}>Sort by priority</button>
            </div>
        </div>
    );
};

export default TaskButtons;