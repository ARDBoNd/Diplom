import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Login" />
        <TextField id="standard-basic" type="password" label="Password" />
        <Button variant="contained" color="primary" href="#contained-buttons">
        Login
       </Button>
      </form>
      </header>
    </div>
  );
}

export default App;
