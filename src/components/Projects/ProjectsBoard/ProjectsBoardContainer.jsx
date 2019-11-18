import React from 'react';
import {connect} from "react-redux";
import ProjectsBoard from "./ProjectsBoard";

let mapStateToProps = (state) => {
    /*debugger;*/
    return {
        projects: state.projectsReducer.projects
    }
};

const ProjectsBoardContainer = connect(mapStateToProps, null)(ProjectsBoard);
export default ProjectsBoardContainer;