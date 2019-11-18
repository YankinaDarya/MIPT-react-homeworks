import React, {Component} from 'react';
import style from './ProjectsBoard.module.css';
import Project from "./Project/Project";
import {withModalWindow} from "../../../HOC/ModalWindow/ModalWindow";
import AddProject from "../AddProject/AddProject";

const ProjectsBoard = (props) => {

    let projectsElements = props.projects.map(p => <Project name={p.name}
                                                            id={p.id}/>);
    const AddProjectWindow = withModalWindow(AddProject);
    projectsElements.push( <AddProjectWindow buttonName={"Add project"} addWindow={style.addWindow}
                                             textStyle={style.textStyle}/>);
    return (<div className={style.board}>
        <div className={style.title}>My Projects</div>
        {projectsElements}
    </div>);
};
export default ProjectsBoard;
