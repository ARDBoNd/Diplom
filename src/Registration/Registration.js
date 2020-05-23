import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    form: {
        width: 500,
        border: '1px solid black',
        padding: 30,
        borderRadius: 15,
        backgroundColor: theme.palette.background.paper
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        height: '100vh',
    },
    input: {
        width: '100%',
        marginBottom: 30
    }
}));

const Registration = () => {
    const classes = useStyles();

    return (<div className={classes.container}>
        <form className={classes.form} noValidate autoComplete="off">
            <TextField className={classes.input} id="email" label="Email"/>
            <TextField className={classes.input} id="password" type="password" label="Password"/>
            <TextField className={classes.input} id="password-confirm" type="password" label="Confirm Password"/>
            <Button variant="contained" color="secondary" href="#contained-buttons">
                Register
            </Button>
        </form>
    </div>);
};


export default Registration;