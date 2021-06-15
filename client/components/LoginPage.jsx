import React, { useState }  from 'react';
import { Button, TextField } from '@material-ui/core'
import { Redirect } from 'react-router';

const LoginPage = () => {

  

  const formSubmit = (e) => {
    e.preventDefault();
    setRedirect(true);
  }
  // if (redirect === true) return <Redirect to='/adminsignup' />

  return (
    <div id='LoginPage'>
    <form method="POST" action="/user/login">
    <TextField label='Email' name='email'>Email</TextField>
    <TextField label='Password' type='password' name='password'>Password</TextField>
    <Button type="submit">Login</Button>
    </form>

    <Button onClick={formSubmit}>First Time? Sign up Here</Button>
    </div>
    
  )
}

export default LoginPage;