import React from 'react';
import { Button, TextField } from '@material-ui/core'


const AdminSignup = () => {

  return (
    <div id='adminsignup'>
      <TextField>First Name</TextField>
      <TextField>Last Name</TextField>
      <TextField>Email</TextField>
      <TextField>Password</TextField>
      <Button>Signup</Button>
      </div>

  )
}



export default AdminSignup;