import React, {Component} from 'react';
import s from './Task.module.css';

const Task = (props) => {
    return(
        <div className={s.item}>
            <img src="https://www.pinclipart.com/picdir/big/344-3445869_14-push-pin-icon-png-transparent-background-images.png" alt="кнопка"/>
            <div><span className={s.info}>ID:</span> {props.id}</div>
            <div><span className={s.info}>Name:</span> {props.name}</div>
            <div>
                <span className={s.info}>Description:</span> {props.description}
            </div>
            <div>
                <span className={s.info}>Priority:</span> {props.priority}
            </div>
        </div>
    );
};

export default Task;