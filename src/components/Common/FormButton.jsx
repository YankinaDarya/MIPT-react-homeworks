import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {purple, red} from "@material-ui/core/colors";
import {ThemeProvider} from '@material-ui/styles';

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
        margin: theme.spacing(2),
        height: 48,
        width: '100px',
        padding: '0 60px',
        borderRadius: '10px',
        float: 'right',
    }
}));

export const FormButton = (props) => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Button theme={theme} variant="contained" color="secondary" className={classes.button} onClick={props.onSubmit}>
                {props.text}
            </Button>
        </ThemeProvider>
    );
};
