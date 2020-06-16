import React, { useState } from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from '@material-ui/core/Button';
import TextInput from '../Common/TextInput';
import CustomQuiz from '../Quiz/Quiz';
import { Link } from 'react-router-dom';

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

const Home = () => {
    const classes = useStyles();

    return (<React.Fragment>
      <div style={{width: '300px'}}>
      <h1>Обучение географии</h1>
        <strong>Добро пожаловать, юный друг! Рады приветствовать вас на нашем сайте. Вас ждут увлекательные тесты и интересная информация о нашей планете!</strong>
        <Button color="inherit"><Link className={classes.link} to="/login">Вход</Link></Button>
      <Link  to="/signup"
      >
        Создать аккаунт.
      </Link>
      </div>
    </React.Fragment>
    );
};


export default Home;