import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from './MainPage.module.css'
import {MainPageButton} from "../Common/MainPageButton";


const MainPage = (props) => {
    return (<div className={style.greeting}>
        <div className={style.title}>Welcome to my ToDo list!</div>
            <Link to='/projects'><MainPageButton text={'To projects'}/></Link>
    </div>);
};

export default MainPage;
