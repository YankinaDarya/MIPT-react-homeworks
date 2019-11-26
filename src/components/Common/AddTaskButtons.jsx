import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {purple, red} from "@material-ui/core/colors";
import {ThemeProvider} from '@material-ui/styles';
import style from './AddTaskButtons.module.css';

const theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: {
            light: '#e6ae88',
            main: '#c66e1c',
            dark: '#844708',
            contrastText: '#fff',
        },
        error: red,
    },
});

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(3),
        height: 55,
        width: '200px',
        padding: '0 60px',
        borderRadius: '10px',
        float: 'right',
    }
}));

export const AddTaskButtons = (props) => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Button theme={theme} variant="contained" color="secondary" className={classes.button} onClick={props.onClick}>
                <div className={style.buttonText}>{props.text}</div>
            </Button>
        </ThemeProvider>
    );
};
