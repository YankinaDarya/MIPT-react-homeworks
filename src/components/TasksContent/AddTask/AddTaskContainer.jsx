import React from 'react';
import {connect} from "react-redux";
import TaskButtons from "./TaskButton/TaskButtons";
import AddTask from "./TaskFrom/TaskForm";
import {nameSortActionCreator, prioritySortActionCreator} from "../../../redux/tasks-reducer";
import {withModalWindow} from "../../../HOC/ModalWindow/ModalWindow";
import style from './AddTask.module.css';

class AddTaskContainer extends React.Component {

    nameSortA = () => {
        this.props.nameSort();
    };

    prioritySortA = () => {
        this.props.prioritySort();
    };

    render() {
        let AddTaskWindow = withModalWindow(AddTask);
        return (
            <div>
                <AddTaskWindow buttonName={"Add New Task"} textStyle={style.title}/>
                <TaskButtons onNameSort={this.nameSortA} onPrioritySort={this.prioritySortA}
                />
            </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        nameSort: () => {
            dispatch(nameSortActionCreator());
        },
        prioritySort: () => {
            dispatch(prioritySortActionCreator());
        }
    }
};

export default connect(null, mapDispatchToProps)(AddTaskContainer);