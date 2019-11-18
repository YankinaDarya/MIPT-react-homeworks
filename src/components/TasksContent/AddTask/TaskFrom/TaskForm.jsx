import React from 'react';
import {TaskInput} from "./TaskInput/TaskInput";
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {addNewTask} from "../../../../redux/tasks-reducer";
import style from "../../../Projects/AddProject/AddProject.module.css";
import {FormButton} from "../../../Common/FormButton";
import {maxLengthCreator, required, notANumber} from "../../../../utils/validators/validators";

const maxLength15 = maxLengthCreator(15);
const maxLength80 = maxLengthCreator(80);
const maxLength5 = maxLengthCreator(5);

const AddTaskForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><Field component={TaskInput} name={"name"} placeholder={"Name *"} autoFocus={true} validate={[required, maxLength15]}/></div>
            <div><Field component={TaskInput} name={"description"} placeholder={"Description *"} validate={[required, maxLength80]}/></div>
            <div><Field component={TaskInput} name={"priority"} placeholder={"Priority *"} validate={[required, maxLength5, notANumber]}/></div>

            <FormButton type="Submit" onSubmit={handleSubmit} text="Add task" />
        </form>
    );
};

const ReduxTaskForm = reduxForm({ form: 'addTask'})(AddTaskForm);

const AddTask = (props) => {
    const onSubmit = (formData) => {
        props.addNewTask(formData.name, formData.description, formData.priority, props.projectId);
    };
    return(
        <div>
            <h1 className={style.label}>New Task</h1>
            <ReduxTaskForm onSubmit={onSubmit} />
        </div>
    );
};

const mapStateToProps = (state) => ({
   projectId: state.tasksReducer.projectId
});

export default connect(mapStateToProps, {addNewTask})(AddTask);