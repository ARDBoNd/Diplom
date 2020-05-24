import React from 'react';
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
        height: '100vh',
    },
    input: {
        width: '100%',
        marginBottom: 30
    }
}));

const Registration = () => {
    const classes = useStyles();
    const [input, handleInputChange] = useInputChange()

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
        debugger;
        console.log(input);
        fetch('http://localhost:3001/user', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    };

    return (<div className={classes.container}>
        <form className={classes.form} noValidate autoComplete="off">
            <TextField className={classes.input} name="email" label="Email"  onChange={handleInputChange}/>
            <TextField className={classes.input} name="password" type="password" label="Password"  onChange={handleInputChange} />
            <TextField className={classes.input} name="password-confirm" type="password" label="Confirm Password"  onChange={handleInputChange} />
            <Button
                onClick={sendUser}
                variant="contained"
                color="secondary"
                href="#contained-buttons">
                Register
            </Button>
        </form>
    </div>);
};

// научиться сохранять туда данные, и научиться загружать из неё данные.
// 3. После этого, в Registration компоненте (это файл, который ты сейчас читаешь), 
// нужно прикрутить к кнопке Register функциональность сохранения email и пароля в базу данных.
// 4. То есть, когда человек ввёл данные в форму, после нажатия кнопки, должна запуститься функция SAVE базы данных.
// 5. После этого, в базе данных появится информация о этом пользователе.
// 6. Затем, когда это будет готово, нужно будет прикрутить к кнопке Login - функцию загрузки данных из базы данных.
// 7. Затем, если пользователь нашёлся, то мы попадаем на сайт (откроется другой компонент)
// 8. Этот компонент ещё нужно создать (нужно подумать, чтобы это было связано с географией).


export default Registration;