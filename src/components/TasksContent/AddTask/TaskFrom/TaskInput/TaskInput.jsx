import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0 10px'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
    },
}));

export const TaskInput = ({input, label, meta: {touched, error}, ...custom}) => {
    const classes = useStyles();
    const hasError = touched && error;
    return (
        <div>
            {hasError ? <div className={classes.container}>
                        <TextField
                            error id="outlined-error-helper-text"
                            label={error}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            errortext={error}
                            {...input}
                            {...custom}
                        />
                </div> :
                <div className={classes.container}>
                        <TextField
                            id="outlined-password-input"
                            label={label}
                            className={classes.textField}
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                            {...input}
                            {...custom}
                        />
                </div>}
        </div>
    );
};

/*
import React, {Component} from 'react';
import s from "./TaskInput.module.css";

const TaskInput = (props) => {
    return (
        <div className={s.item}>
            <label htmlFor={`${props.id}`}>{props.id}:</label>
            <textarea id={`${props.id}`} className={s.input} onChange={props.onChange}
                      value={props.value}/>
        </div>
    );
};

export default TaskInput;*/
