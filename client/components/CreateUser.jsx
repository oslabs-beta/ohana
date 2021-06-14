import React from 'react';
import { Button, TextField, Select } from '@material-ui/core'


const CreateUser = () => {

  return (
    <div id='createuser'>
      <TextField>User Email</TextField>
      <TextField>User Password</TextField>
      <TextField>First Name</TextField>
      <TextField>Last Name</TextField>
      <Select>Select Team</Select>
      <Button>Create User</Button>
    </div>

  )
}

export default CreateUser;