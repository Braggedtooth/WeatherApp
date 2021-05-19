import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CloudIcon from '@material-ui/icons/Cloud';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),

    },
    title: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },

}));

export default function SearchAppBar() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <CloudIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h5" align="justify" noWrap>
                        Weather App
          </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
}
