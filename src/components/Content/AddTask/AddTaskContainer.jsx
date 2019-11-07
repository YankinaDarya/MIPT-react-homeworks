import React from 'react';
import {connect} from "react-redux";
import TaskButtons from "./TaskButton/TaskButtons";
import TaskForm from "./TaskFrom/TaskForm";
import {addTaskActionCreator, nameSortActionCreator, prioritySortActionCreator} from "../../../redux/reducer";

class AddTaskContainer extends React.Component {

    state = {
        name: '',
        description: '',
        priority: ''
    };

    nameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    priorityChange = (e) => {
        this.setState({
            priority: e.target.value
        });
    };

    descriptionChange = (e) => {
        this.setState({
            description: e.target.value
        });
    };

    addTaskA = () => {
        this.props.addTask(this.state);
        this.setState({
            name: '', description: '', priority: ''
        });
    };

    nameSortA = () => {
        this.props.nameSort();
    };

    prioritySortA = () => {
        this.props.prioritySort();
    };


render()
{
    return (
        <div>
            <TaskForm values={this.state} onNameChange={this.nameChange} onDescriptionChange={this.descriptionChange}
                      onPriorityChange={this.priorityChange}/>
            <TaskButtons addNewTask={this.addTaskA} onNameSort={this.nameSortA} onPrioritySort={this.prioritySortA}
                />
        </div>
    );
}
}

let mapDispatchToProps = (dispatch) => {
    return {
        addTask: ({name, description, priority}) => {
            dispatch(addTaskActionCreator(name, description, priority));
        },
        nameSort: () => {
            dispatch(nameSortActionCreator());
        },
        prioritySort: () => {
            dispatch(prioritySortActionCreator());
        }
    }
};

export default connect(null, mapDispatchToProps)(AddTaskContainer);