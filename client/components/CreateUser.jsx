import React, { useState } from 'react';
import { Button, TextField, Select, FormControlLabel, Checkbox } from '@material-ui/core'

const CreateUser = () => {
  const [isAdmin, setAdmin] = useState(false)
  const [editAccess, setAccess] = useState(false)

  const handleAdmin = (e) => {
    setAdmin(e.target.checked);
  }

  const handleAccess = (e) => {
    setAccess(e.target.checked);
  }

  return (
    <div id='createuser'>
      <form method="POST" action='/user/create'>
        <TextField label='User Email' name='email'></TextField><br></br>
        <TextField type='password' label='User Password' name='password'></TextField><br></br>
        <TextField label='First Name' name='firstName'></TextField><br></br>
        <TextField label='Last Name' name='lastName'></TextField><br></br>
        <TextField label='Team Name' name='teamName'></TextField><br></br>
        {/* <Select>Select Team</Select> */}
        <FormControlLabel control={<Checkbox />} name='isAdmin' label='Add as Admin' labelPlacement='end'
          onChange={handleAdmin} value={isAdmin} /><br></br>
        {/* <FormControlLabel control={<Checkbox />} name='editAccess' label='Edit Perms' labelPlacement='end'
          onChange={handleAccess} value={editAccess} /><br></br> */}
        <Button type='submit' label='Create User' variant="contained" color="primary">Create User</Button>
      </form>
    </div>
  )
}

export default CreateUser;