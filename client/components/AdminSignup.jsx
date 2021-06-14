import React, { useState }  from 'react';
import { Button, TextField } from '@material-ui/core'


const AdminSignup = () => {

  const [redirect, setRedirect] = useState(false);
  
  const formSubmit = (e) => {
    e.preventDefault();
    setRedirect(true);
  }

  return (
    <div id='adminsignup'>
      <form method="POST" action="/admin/create">
      <TextField label='First Name' name='firstName'></TextField>
      <TextField label='Last Name' name='lastName'></TextField>
      <TextField label='Email' name='email'></TextField>
      <TextField type='password' label='Password' name='password'></TextField>
      {/* <TextField type='hidden' name='isadmin' value='true'></TextField> */}
      <Button type="submit">Signup</Button>
      </form> 
      </div>

  )
}



export default AdminSignup;