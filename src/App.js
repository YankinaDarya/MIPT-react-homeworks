import React from 'react';
import style from './App.module.css';
import TasksContent from "./components/TasksContent/TasksContent";
import {Route, withRouter} from 'react-router-dom';
import Projects from "./components/Projects/Projects";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";

const App = (props) => {
    return (
        <div className={style.appWrapper}>
            <Header />
            <Route exact path= '/' render={() => <MainPage />}/>
            <Route path= '/projects' render={() => <Projects />}/>
            <Route path= '/tasks/:projectId' render={() =><TasksContent />}/>
        </div>
    );
};

export default withRouter(App);