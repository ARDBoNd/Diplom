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
            <Button 
            onClick={()=>{alert('You just clicked me!');}}
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