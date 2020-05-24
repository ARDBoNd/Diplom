import React, { useState } from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useInputChange } from '../Common/useInputChange'
import TextInput from '../Common/TextInput';

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
    const [flag, setRegistered] = useState(false);
    const [errors, setErrors] = useState({});
    const [registrationData, setRegistrationData] = useState({
        email: "",
        password: "",
        passwordRepeat: "",
    });

    const handleInputChange = ({ target }) => {
        setRegistrationData({ ...registrationData, [target.name]: target.value });
    };

    const formIsValid = () => {
        const _errors = {};

        if (!registrationData.email || !validateEmail(registrationData.email)) {
            _errors.email = 'Your email is not valid';
        }

        if (!registrationData.password) {
            _errors.password = 'Your password is not valid';
        }

        if (registrationData.password !== registrationData.passwordRepeat) {
            _errors.passwordRepeat = 'Your passwords are not equal!';
        }

        setErrors(_errors);

        return Object.keys(_errors).length === 0;
    };

    const handleSubmit = (event) => {
        debugger;
        event.preventDefault();
        /*
          #TODO Send a message by email
        */

        if (!formIsValid()) {
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: registrationData.email,
                password: registrationData.password
            })
        };

        const sendUser = () => {
            fetch('http://localhost:3001/register', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'OK') {
                        setRegistered(true);
                    }
                });
        };

        sendUser();
    };

    const validateEmail = (mail) => {
        debugger;
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
    }

    return (
        <div>
            {flag ? <div className={classes.container}>
                Congratulations, the user has been created!
                </div>
                : <div className={classes.container}>
                    <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
                        <TextInput
                            id="email"
                            name="email"
                            label="Email"
                            onChange={handleInputChange}
                            value={registrationData.email}
                            error={errors.email}
                        />
                        <TextInput
                            id="password"
                            name="password"
                            label="Password"
                            className={classes.input}
                            error={errors.password}
                            type="password"
                            value={registrationData.password}
                            onChange={handleInputChange} />
                        <TextInput
                            id="passwordRepeat"
                            name="passwordRepeat"
                            label="Confirm Password"
                            className={classes.input}
                            type="password"
                            error={errors.passwordRepeat}
                            value={registrationData.passwordRepeat}
                            onChange={handleInputChange} />
                        <Button type="submit" variant="contained" color="secondary">
                            Register
                        </Button>
                    </form>
                </div>
            }
        </div>
    );
};


export default Registration;