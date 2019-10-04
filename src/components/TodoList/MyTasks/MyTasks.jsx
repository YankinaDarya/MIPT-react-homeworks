import React, {Component} from 'react';
import s from './MyTasks.module.css';
import Task from "./Task/Task";

const MyTasks = (props) => {

    let postsElements = props.tasks.map(t => <Task name={t.name} priority={t.priority} description={t.description}
                                                   id={t.id}/>);

    let newPostElement = React.createRef();
    let newPriority = React.createRef();
    let newDescription = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let nameSort = () => {
        props.nameSort();
    };

    let prioritySort = () => {
        props.prioritySort();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let priority = newPriority.current.value;
        let description = newDescription.current.value;
        props.updateNewPostText(text, priority, description);
    };

    return (
        <div className={s.container}>
            <div className={s.addTask}>
                <div className={s.addTaskContent}>
                    <div className={s.title}>New task</div>
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
                    <div>
                        <button className={s.add} onClick={addPost}>Add task</button>
                    </div>

                    <div>
                        <button onClick={nameSort}>Sort by name</button>
                    </div>
                    <div>
                        <button onClick={prioritySort}>Sort by priority</button>
                    </div>

                </div>
            </div>
            <div className={s.tasksContainer}>
                <div className={s.tasks}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
};

export default MyTasks;