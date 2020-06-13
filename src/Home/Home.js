import React, { useState } from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from '@material-ui/core/Button';
import TextInput from '../Common/TextInput';
import CustomQuiz from '../Quiz/Quiz';

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
      <h1>Добро пожаловать, в обучение географии! :)</h1>
    </React.Fragment>
    );
};


export default Home;