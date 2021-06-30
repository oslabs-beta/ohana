import React, { useState, useEffect, useContext } from 'react';
import { Button, TextField, Box } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { AppContext } from './AppContext'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
// const ohana = require('../assets/transparentohana.png')
// import dashboardIcon from '../assets/dashboard-icon.svg';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
}));


const LoginPage = (props) => {
  const { isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState();
  const [incorrectInfo, setIncorrectInfo] = useState('');
  let history = useHistory();

  const classes = useStyles();

  // when the component re-renders, check if the isLoggedIn is truthy and push
  // homepage endpoint so the route can render the proper page

  useEffect(() => {
    if (isLoggedIn) {
      console.log(isLoggedIn, 'is logged in login')
      if (isAdmin) history.push('/admin')
      else {
        history.push('/vcluster')
      }
    }
  })

  const formSubmit = (e) => {
    e.preventDefault();
    setRedirect(true);
  }

  const handleSubmit = (e) => {
    console.log('submitted')
    e.preventDefault();
    const form = e.target

    e.preventDefault();
    fetch(form.action, {
      method: form.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data === 'Incorrect username/password') setIncorrectInfo(<p>Incorrect username/password</p>);
        else {
          fetch('/user/verify', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              token,
            })
          })
            .then(res => {
              return res.json();
            })
            .then(res => {
              setIsAdmin(res);
              if (typeof res === 'boolean') {
                setIsLoggedIn(true);
              }
              if (isAdmin) history.push('/admin')
              else history.push('/vcluster')
            })
        }
      })
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div id='LoginPage'>
      <div className={classes.root}>
        <Grid container spacing={3}
          direction="row"
          justify-content="flex-start"
          alignItems="stretch"
        >
          <Grid item xs={6}>
            <div id='leftPaneLogin'>
              <img src="../assets/transparentohana.png" alt="ohana" />
            </div>
          </Grid>
          <Grid item xs={4}
            justify-self="center"
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="100vh"
            // marginTop="-10vh"
            >
              {/* <img src="../assets/dashboard-icon.svg"> */}
              {/* <img src={dashboardIcon}/> */}
              <form style={{ width: '100%' }} id='LoginForm' method="POST" action="/user/login" onSubmit={handleSubmit}>
                <p>Sign in</p>
                <TextField style={{ width: '100%' }} id='outlined-basic' variant='outlined' label='Email' name='email' onChange={handleEmail}></TextField ><br></br>
                <TextField style={{ width: '100%' }} id='outlined-basic' variant='outlined' label='Password' type='password' name='password' onChange={handlePassword}></TextField><br></br>
                {incorrectInfo}
                <Button style={{ width: '100%' }} type="submit" variant="contained" color="primary">Login</Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default LoginPage;

