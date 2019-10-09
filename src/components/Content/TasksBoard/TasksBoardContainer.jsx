import React from 'react';
import {connect} from "react-redux";
import TasksBoard from "./TasksBoard";

let mapStateToProps = (state) => {
    return {
        tasks: state.posts
    }
};

let mapDispatchToProps = (dispatch) => {
    return {}
};

const TasksBoardContainer = connect(mapStateToProps, mapDispatchToProps)(TasksBoard);
export default TasksBoardContainer;