import React from 'react';
import s from "./TaskButtons.module.css";

const TaskButtons = (props) => {

    return (<div>
            <div>
                <button className={s.add} onClick={props.addNewTask}>Add Task</button>
            </div>
            <div>
                <button onClick={props.onNameSort}>Sort by name</button>
            </div>
            <div>
                <button onClick={props.onPrioritySort}>Sort by priority</button>
            </div>
        </div>
    );
};

export default TaskButtons;