import React from 'react';
import TaskInput from "./TaskInput/TaskInput";
import {withPropsTaskInput} from "../../../../HOC/withParams";

const TaskForm = (props) => {
    /*let state = {
        nameValues: {id: 'name', onChange: props.onNameChange, value: props.values.name},
        descriptionValues: {id: 'description', onChange: props.onDescriptionChange, value: props.values.description},
        priorityValues: {id: 'priority', onChange: props.onPriorityChange, value: props.values.priority}
    };

    let TaskInputNameWithPropsComponent = withPropsTaskInput(TaskInput, state.nameValues);
    let TaskInputDescriptionWithPropsComponent = withPropsTaskInput(TaskInput, state.descriptionValues);
    let TaskInputPriorityWithPropsComponent = withPropsTaskInput(TaskInput, state.priorityValues);
*/
/*    return (<div>
        <TaskInputNameWithPropsComponent />
        <TaskInputDescriptionWithPropsComponent />
        <TaskInputPriorityWithPropsComponent />
    </div>);*/

    return (
        <form action="#">
            <TaskInput id='name' onChange={props.onNameChange} value={props.values.name}/>
            <TaskInput id='description' onChange={props.onDescriptionChange} value={props.values.description}/>
            <TaskInput id='priority' onChange={props.onPriorityChange} value={props.values.priority}/>
        </form>
    );
};

export default TaskForm;