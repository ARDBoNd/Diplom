import React, { useState } from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from '@material-ui/core/Button';
import TextInput from '../Common/TextInput';
import CustomQuiz from '../Quiz/Quiz';
import { Link, useHistory } from 'react-router-dom';

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
        flexDirection: 'row',
        height: '520px',
    },
    input: {
        width: '100%',
        marginBottom: 30
    },
    button1: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '300px',
        color: 'black',
        fontSize: 20,
        height: '100%',
        border: '1px solid black',
        backgroundImage: 'url(https://static.educalingo.com/img/ru/800/kreml.jpg)'
    },    
    button2: {
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '38%',
        backgroundPositionY: '13%',
        color: 'white',
        width: '300px',
        height: '100%',
        fontSize: 20,
        border: '1px solid black',
        backgroundImage: 'url(https://www.equatorial.by/sites/default/files/images/yalta_lastochkino-gnezdo_003.jpg)'
    },
    button3: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: 'black',
        fontSize: 20,
        width: '300px',
        height: '100%',
        border: '1px solid black',
        backgroundImage: 'url(https://cdnimg.rg.ru/img/content/180/61/53/iStock-1168217995_d_850.jpg)'
    }
}));

const QuizSelector = () => {
    const classes = useStyles();
    const history = useHistory();

    return (<React.Fragment>
        <section className={classes.container}>
            <Button centerRipple onClick={()=>{history.push('/1')}} className={classes.button1} color="inherit">Викторина 1</Button>
            <Button centerRipple onClick={()=>{history.push('/2')}} className={classes.button2} color="inherit">Викторина 1</Button>
            <Button centerRipple onClick={()=>{history.push('/3')}} className={classes.button3} color="inherit">Викторина 1</Button>
        </section>
    </React.Fragment>
    );
};


export default QuizSelector;