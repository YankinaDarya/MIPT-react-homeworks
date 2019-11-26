import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    addButton: {
        margin: theme.spacing(3),
    }
}));

export default function FloatingActionButtons() {
    const classes = useStyles();
    return (
        <div>
            <Fab color="secondary" aria-label="add" className={classes.addButton}>
                <AddIcon />
            </Fab>
        </div>
    );
}