import React from 'react';
import {updateNewPostActionCreator} from "../../../../redux/reducer";
import TaskForm from "./TaskForm";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.newPostText,
        newDescription: state.newDescription,
        newPriority: state.newPriority
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text, priority, description) => {
            dispatch(updateNewPostActionCreator(text, priority, description));
        }
    }
};

const TaskFormContainer = connect(mapStateToProps, mapDispatchToProps)(TaskForm);
export default TaskFormContainer;
