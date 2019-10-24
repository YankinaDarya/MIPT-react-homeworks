import React, {Component} from 'react';
import s from './Header.module.css';

const Header = () => {
    return(
            <div className={s.headerContainer}>
                <div className={s.header}>
                    <div className={s.title}>ToDo List</div>
                </div>
            </div>
    );
};

export default Header;