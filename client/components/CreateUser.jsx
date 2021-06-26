import React, { useState } from 'react';
import { Button, TextField, Select, FormControlLabel, Checkbox } from '@material-ui/core'

const CreateUser = () => {
  const [isAdmin, setAdmin] = useState(false)
  const [editAccess, setAccess] = useState(false)
  const [email, setEmail] = useState('')

  const handleAdmin = (e) => {
    setAdmin(e.target.checked);
  }

  const handleAccess = (e) => {
    setAccess(e.target.checked);
  }
// delete this
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/user/create', {
      method:"POST",
      header: {
        "Content-Type":"application/json"
    },
      body: JSON.stringify({email})
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
}

// delete this
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div id='createuser'>
      <form method="POST" action='/user/create' onSubmit={handleSubmit}>
      {/* <form onsubmit={handleSubmit}> */}
        <TextField label='User Email' name='email' onChange={handleEmail} value={email}></TextField><br></br>
        <TextField type='password' label='User Password' name='password'></TextField><br></br>
        <TextField label='First Name' name='firstName'></TextField><br></br>
        <TextField label='Last Name' name='lastName'></TextField><br></br>
        {/* <Select>Select Team</Select> */}
        <FormControlLabel control={<Checkbox />} name='isAdmin' label='Add as Admin' labelPlacement='end'
          onChange={handleAdmin} value={isAdmin} /><br></br>
        <FormControlLabel control={<Checkbox />} name='editAccess' label='Edit Perms' labelPlacement='end'
          onChange={handleAccess} value={editAccess} /><br></br>
        <Button type='submit' label='Create User' variant="contained" color="primary">Create User</Button>
      </form>
    </div>
  )
}

export default CreateUser;