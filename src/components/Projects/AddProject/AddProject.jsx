import React from 'react';
import {TaskInput} from '../../TasksContent/AddTask/TaskFrom/TaskInput/TaskInput';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {addNewProject} from '../../../redux/projects-reducer';
import style from './AddProject.module.css';
import {FormButton} from "../../Common/FormButton";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength15 = maxLengthCreator(15);

const AddProjectForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><Field component={TaskInput} name={"name"} placeholder={"Project name *"} autoFocus={true}
                        validate={[required, maxLength15]}/></div>

            <FormButton type="Submit" onSubmit={handleSubmit} text="Add project" />
        </form>
    );
};

const ReduxProjectForm = reduxForm({ form: 'addProject'})(AddProjectForm);

const AddProject = (props) => {
    const onSubmit = (formData) => {
        props.addNewProject(formData.name);
    };
    return(
        <div>
            <h1 className={style.label}>New project</h1>
            <ReduxProjectForm onSubmit={onSubmit} />
        </div>
    );
};

export default connect(null, {addNewProject})(AddProject);