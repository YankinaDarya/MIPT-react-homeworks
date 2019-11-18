import React, {Component} from 'react';
import s from './TasksContent.module.css';
import TasksBoardContainer from "./TasksBoard/TasksBoardContainer";
import AddTaskContainer from "./AddTask/AddTaskContainer";
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {initializeTasks} from "../../redux/tasks-reducer";
import Preloader from "../Common/Preloader/Preloader";

class TasksContent extends React.Component {
    componentDidMount() {
        let projectId = this.props.match.params.projectId;
        projectId = parseInt(projectId, 10);
        this.props.initializeTasks(projectId);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />;
        }
        return (<div className={s.layout}>
            <div className={s.addTaskContent}>
                <AddTaskContainer/>
            </div>
            <TasksBoardContainer/>
        </div>);
    }
}

const mapStateToProps = (state) => ({
    initialized: state.tasksReducer.initialized
});

export default compose(connect(mapStateToProps, {initializeTasks}), withRouter)(TasksContent);