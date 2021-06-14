import React from 'react';
import { Button, TextField, Select, FormControlLabel, Checkbox} from '@material-ui/core'


const CreateUser = () => {

  return (
    <div id='createuser'>
      <form method="POST" action='/user/create'>
      <TextField label='User Email' name='email'></TextField>
      <TextField type='password' label='User Password' name='password'></TextField>
      <TextField label='First Name' name='firstName'></TextField>
      <TextField label='Last Name' name='lastName'></TextField>
      {/* <Select>Select Team</Select> */}
      <FormControlLabel control={<Checkbox/>} name='isAdmin' label='Add as Admin' labelPlacement='end'/>
      <Button type='submit'>Create User</Button>
      </form>
    </div>

  )
}

export default CreateUser;