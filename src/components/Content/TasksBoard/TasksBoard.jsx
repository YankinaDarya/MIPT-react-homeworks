import React from 'react';
import s from './TasksBoard.module.css';
import Task from "./Task/Task";

const TasksBoard = (props) => {

    const postsElements = props.tasks.map(t => <Task {...t}
                                                   deleteTask={props.deleteTask}/>);
    return(<div className={s.tasksContainer}>
        <div className={s.tasks}>
            {postsElements}
        </div>
    </div>);
};

export default TasksBoard;