import React, { useState } from 'react';
import './App.css';


import Home from './Home/Home';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import { AppBar, IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Router, Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import CustomQuiz from './Quiz/Quiz';
import CustomQuiz3 from './Quiz/Quiz3';
import CustomQuiz2 from './Quiz/Quiz2';
import QuizSelector from './quizSelector/quizSelector';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: '80vh'
  }
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0); // integer state
  const handleButtons = () => {
    return localStorage.getItem('geo') === 'logged';
  };

  const logoff = () => {
    localStorage.removeItem('geo');
    setValue(value => ++value)
  }

  const login = () => {
    setValue(value => ++value);
  }

  return (
    <BrowserRouter>
      <AppBar style={{ backgroundColor: 'black' }} position="static">
        <Toolbar>
          <Link
            className={classes.link}
            to="/"
          >
            <Typography variant="h6" className={classes.title}>
              География
              </Typography>
          </Link>
          {
            handleButtons()?
              <span>
                <Button onClick={logoff} color="inherit"><Link className={classes.link} to="/">Выйти</Link></Button>
              </span> :
              <span>
                <Button onClick={login} color="inherit"><Link className={classes.link} to="/login">Вход</Link></Button>
                <Button color="inherit"><Link className={classes.link} to="/signup">Регистрация</Link></Button>
              </span>
          }
        </Toolbar>
      </AppBar>
      <section className={classes.section}>
        <Switch>
          {/* <Route path="/" component={null}/> */}
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Registration} />
          <Route path="/menu" component={QuizSelector} />
          <Route exact path="/1" component={CustomQuiz} />
          <Route exact path="/2" component={CustomQuiz2} />
          <Route exact path="/3" component={CustomQuiz3} />
        </Switch>
      </section>
    </BrowserRouter>
  )
}

export default App;
