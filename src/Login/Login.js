import React, { useState } from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useInputChange } from '../Common/useInputChange'

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
        height: '800px',
    },
    input: {
        width: '100%',
        marginBottom: 30
    }
}));

const Login = () => {
    const classes = useStyles();
    const [input, handleInputChange] = useInputChange()
    const [flag, setLoggedIn] = useState(false);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            login: input.login,
            password: input.password
        })
    };

    const login = () => {
        console.log(input);
        fetch('http://localhost:3001/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    setLoggedIn(true);
                }
                else {

                }
            });
    };


    return (<div>
        {flag ? <div className={classes.container}>
            You are logged in!
                </div> : <div className={classes.container}>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField className={classes.input} name="login" label="Login" onChange={handleInputChange} />
                    <TextField className={classes.input} name="password" type="password" label="Password" onChange={handleInputChange} />
                    <Button
                        onClick={login}
                        variant="contained"
                        color="secondary"
                        href="#contained-buttons">
                        Login
            </Button>
                </form>
            </div>
        }
    </div>
    );
};


export default Login;