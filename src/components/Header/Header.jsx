import React, {Component} from 'react';
import s from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.title}>ToDo List</div>
        </div>
    );
};

export default Header;