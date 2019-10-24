import React, {Component} from 'react';
import s from "./TaskInput.module.css";

const TaskInput = (props) => {
    return (
        <div className={s.item}>
            <label htmlFor={`${props.id}`}>{props.id}:</label>
            <textarea id={`${props.id}`} className={s.input} onChange={props.onChange}
                      value={props.value}/>
        </div>
    );
};

export default TaskInput;