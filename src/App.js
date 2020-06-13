import React from 'react';
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

  return (
    <BrowserRouter>
      <AppBar style={{ backgroundColor: 'black' }} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            <Link
              className={classes.link}
              to="/"
            >
            <Typography variant="h6" className={classes.title}>
                География
              </Typography>
          </Link>

          <Button color="inherit"><Link className={classes.link} to="/login">Вход</Link></Button>
          <Button color="inherit"><Link className={classes.link} to="/signup">Регистрация</Link></Button>
        </Toolbar>
      </AppBar>
      <section className={classes.section}>
        <Switch>
          {/* <Route path="/" component={null}/> */}
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Registration} />
        </Switch>
      </section>
    </BrowserRouter>
  )
}

export default App;
