import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    form: {
        width: 500,
        height: 200,
        border: '1px solid black',
        padding: 30
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        height: '100vh'
    },
    input: {
        width: '100%',
        marginBottom: 30
    }
}));

function App() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.container}>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField className={classes.input} id="standard-basic" label="Login"/>
                    <TextField className={classes.input} id="standard-basic" type="password" label="Password"/>
                    <Button variant="contained" color="primary" href="#contained-buttons">
                        Login
                    </Button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default App;
