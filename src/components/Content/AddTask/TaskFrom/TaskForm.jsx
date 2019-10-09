import React, {Component} from 'react';
import s from "./TaskForm.module.css";

const TaskForm = (props) => {

    let newPostElement = React.createRef();
    let newPriority = React.createRef();
    let newDescription = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let priority = newPriority.current.value;
        let description = newDescription.current.value;
        props.updateNewPostText(text, priority, description);
    };

    return (
        <form action="#">
            <div className={s.item}>
                <label htmlFor="name">Name:</label>
                <textarea id="name" className={s.input} onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div className={s.item}>
                <label htmlFor="description">Description:</label>
                <textarea id="description" className={s.input} onChange={onPostChange} ref={newDescription}
                          value={props.newDescription}/>
            </div>
            <div className={s.item}>
                <label htmlFor="priority">Priority:</label>
                <input id="priority" className={s.input} onChange={onPostChange} ref={newPriority}
                       value={props.newPriority}/>
            </div>
        </form>
    );
};

export default TaskForm;