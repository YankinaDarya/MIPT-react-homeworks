import React, {Component} from 'react';
import s from './Task.module.css';

const Task = (props) => {
    return(
        <div className={s.item}>
            <img src="https://www.pinclipart.com/picdir/big/344-3445869_14-push-pin-icon-png-transparent-background-images.png" alt="gbsg"/>
            <div><span><span className={s.info}>ID:</span> {props.id}</span></div>
            <div><span><span className={s.info}>Name:</span> {props.name}</span></div>
            <div>
                <span><span className={s.info}>Description:</span> {props.description}</span>
            </div>
            <div>
            <span><span className={s.info}>Priority:</span> {props.priority}</span>
            </div>
        </div>
    );
};

export default Task;