import React, { useState } from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from '@material-ui/core/Button';
import TextInput from '../Common/TextInput';
import CustomQuiz from '../Quiz/Quiz';
import QuizSelector from '../quizSelector/quizSelector';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    form: {
        width: 500,
        border: '1px solid black',
        padding: 30,
        borderRadius: 15,
        backgroundColor: theme.palette.background.paper
    },
    container: {
        display: 'block'
    },
    input: {
        width: '100%',
        marginBottom: 30
    }
}));

const Login = () => {
    const classes = useStyles();
    const [flag, setLoggedIn] = useState(false);
    const [errors, setErrors] = useState({});
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const history = useHistory();

    const handleLogin = () => {
        return flag || localStorage.getItem('geo') === 'logged'
    }

    const handleInputChange = ({ target }) => {
        setLoginData({ ...loginData, [target.name]: target.value });
    };

    const formIsValid = () => {
        const _errors = {};

        if (!loginData.email || !validateEmail(loginData.email)) {
            _errors.email = 'Ваш email неверно введён!';
        }

        if (!loginData.password) {
            _errors.password = 'Неверный пароль!';
        }

        setErrors(_errors);

        return Object.keys(_errors).length === 0;
    };

    const handleSubmit = (event) => {
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
            body: JSON.stringify(loginData)
        };

        const login = () => {
            fetch('http://localhost:3001/login', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.status) {
                        localStorage.setItem('geo', 'logged');
                        setLoggedIn(true);
                        history.push('/menu')
                    }
                });
        };

        login();
    };

    const validateEmail = (mail) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
    }

    return (<React.Fragment>
        {handleLogin() ? <div className={classes.container}>
            <div style={{ display: 'flex', flexWrap: 'wrap', height: '500px' }}>
                <QuizSelector/>
            </div>
        </div> : <div className={classes.container}>
                <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
                    <TextInput
                        id="email"
                        name="email"
                        label="Email"
                        onChange={handleInputChange}
                        value={loginData.email}
                        error={errors.email}
                    />
                    <TextInput
                        id="password"
                        name="password"
                        label="Password"
                        className={classes.input}
                        error={errors.password}
                        type="password"
                        value={loginData.password}
                        onChange={handleInputChange} />
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary">
                        Вход
                        </Button>
                </form>
            </div>
        }
    </React.Fragment>
    );
};


export default Login;