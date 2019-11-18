import React, {Component} from 'react';
import style from './Projects.module.css';
import {initializeProjects} from "../../redux/projects-reducer";
import {connect} from "react-redux";
import ProjectsBoardContainer from "./ProjectsBoard/ProjectsBoardContainer";
import Preloader from "../Common/Preloader/Preloader";

class Projects extends React.Component {
    componentDidMount() {
        this.props.initializeProjects();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />;
        }
        return (<div className={style.projectsLayout}>
            <ProjectsBoardContainer/>
        </div>);
    }
}

const mapStateToProps = (state) => ({
    initialized: state.projectsReducer.initialized
});

export default connect(mapStateToProps, {initializeProjects})(Projects);
