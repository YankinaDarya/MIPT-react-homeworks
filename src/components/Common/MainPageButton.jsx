import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import style from '../MainPage/MainPage.module.css'


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    }
}));

export const MainPageButton = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Button color='primary' className={style.classes}>
                <div className={style.button}>{props.text}</div>
            </Button>
        </div>
    );
};