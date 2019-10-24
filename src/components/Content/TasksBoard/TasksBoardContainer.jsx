import React from 'react';
import {connect} from "react-redux";
import TasksBoard from "./TasksBoard";
import {deleteTaskAC} from "../../../redux/reducer";

let mapStateToProps = (state) => {
    return {
        tasks: state.posts
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => {
            dispatch(deleteTaskAC(id));
        }
    }
};

const TasksBoardContainer = connect(mapStateToProps, mapDispatchToProps)(TasksBoard);
export default TasksBoardContainer;