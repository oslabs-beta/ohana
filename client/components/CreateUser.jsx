import React from 'react';
import { Button, TextField, Select, FormControlLabel, Checkbox} from '@material-ui/core'


const CreateUser = () => {

  return (
    <div id='createuser'>
      <form method="POST" action='/user/create'>
      <TextField label='User Email' name='email'></TextField><br></br>
      <TextField type='password' label='User Password' name='password'></TextField><br></br>
      <TextField label='First Name' name='firstName'></TextField><br></br>
      <TextField label='Last Name' name='lastName'></TextField><br></br>
      {/* <Select>Select Team</Select> */}
      <FormControlLabel control={<Checkbox/>} name='isAdmin' label='Add as Admin' labelPlacement='end'/><br></br>
      <Button type='submit' label='Create User'>Create User</Button>
      </form>
    </div>

  )
}

export default CreateUser;