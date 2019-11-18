import React from 'react';
import {connect} from "react-redux";
import TasksBoard from "./TasksBoard";
import {deleteTaskAC} from "../../../redux/tasks-reducer";

let mapStateToProps = (state) => {
    return {
        tasks: state.tasksReducer.tasks
    }
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => {
            dispatch(deleteTaskAC(id));
        }
    }
};*/

const TasksBoardContainer = connect(mapStateToProps, null)(TasksBoard);
export default TasksBoardContainer;