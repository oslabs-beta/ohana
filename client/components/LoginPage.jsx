import React from 'react';
import { Button, TextField } from '@material-ui/core'

const LoginPage = () => {

  return (
    <div id='LoginPage'>
    <TextField>Email</TextField>
    <TextField>Password</TextField>

    <Button>First Time? Sign up Here</Button>
    </div>
    
  )
}

export default LoginPage;