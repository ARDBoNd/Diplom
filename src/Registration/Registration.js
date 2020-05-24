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

const Registration = () => {
    const classes = useStyles();
    const [input, handleInputChange] = useInputChange()
    const [flag, setRegistered] = useState(false);

    // const makeGetRequest = () => {
    //     return fetch("http://localhost:3001/users", {mode: 'cors'})
    //         .then(response => response.json())
    //         .then(response => response.args);
    // }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: input.email,
            password: input.password
        })
    };

    const sendUser = () => {
        console.log(input);
        fetch('http://localhost:3001/register', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'OK') {
                   setRegistered(true);
                }
            });
    };

    return (
        <div>
            {flag
                ? <div className={classes.container}>
                    Congratulations, the user has been created!
                </div>
                : <div className={classes.container}>
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField className={classes.input} name="email" label="Email" onChange={handleInputChange} />
                        <TextField className={classes.input} name="password" type="password" label="Password" onChange={handleInputChange} />
                        <TextField className={classes.input} name="password-confirm" type="password" label="Confirm Password" onChange={handleInputChange} />
                        <Button
                            onClick={sendUser}
                            variant="contained"
                            color="secondary"
                            href="#contained-buttons">
                            Register
                    </Button>
                    </form>
                </div>
            }
        </div>
    );
};


export default Registration;