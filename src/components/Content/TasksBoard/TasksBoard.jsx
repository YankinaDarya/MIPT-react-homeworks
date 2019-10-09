import React, {Component} from 'react';
import s from './TasksBoard.module.css';
import Task from "./Task/Task";

const TasksBoard = (props) => {
    let postsElements = props.tasks.map(t => <Task name={t.name}
                                                   priority={t.priority}
                                                   description={t.description}
                                                   id={t.id}/>);
    return(<div className={s.tasksContainer}>
        <div className={s.tasks}>
            {postsElements}
        </div>
    </div>);
};

export default TasksBoard;