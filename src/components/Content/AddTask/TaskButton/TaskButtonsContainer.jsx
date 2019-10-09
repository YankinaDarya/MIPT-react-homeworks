import React from 'react';
import { addTaskActionCreator,
    nameSortActionCreator, prioritySortActionCreator} from "../../../../redux/reducer";
import {connect} from "react-redux";
import TaskButtons from "./TaskButtons";

let mapStateToProps = (state) => {
    return {}
};

let mapDispatchToProps = (dispatch) => {
    return {
        addTask: () => {
            dispatch(addTaskActionCreator());
        },
        nameSort: () => {
            dispatch(nameSortActionCreator());
        },
        prioritySort: () => {
            dispatch(prioritySortActionCreator())
        }
    }
};

const TaskButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(TaskButtons);
export default TaskButtonsContainer;
