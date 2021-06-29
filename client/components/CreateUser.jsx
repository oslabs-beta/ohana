import React, { useState } from 'react';
import { Button, TextField, Select, FormControlLabel, Checkbox } from '@material-ui/core'

const CreateUser = () => {
  const [isAdmin, setAdmin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [teamName, setTeamName] = useState('')
  const [createdUser, setCreatedUser] = useState('')

  const handleAdmin = (e) => {
    setAdmin(e.target.checked);
  }

  const handlePassword = (e) => {
    setPassword(e.target.checked);
  }

  const handleFirstName = (e) => {
    setFirstName(e.target.checked);
  }

  const handleLastName = (e) => {
    setLastName(e.target.checked);
  }

  const handleteamName = (e) => {
    setTeamName(e.target.checked);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password, firstName, lastName, teamName, isAdmin }
    fetch('/user/create', {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => setCreatedUser(<p>{data}</p>))
      .catch((err) => {
        console.log(err)
      })
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div id='createuser'>
      <form method="POST" action='/user/create' onSubmit={handleSubmit}>
        <TextField label='User Email' name='email' onChange={handleEmail} value={email}></TextField><br></br>
        <TextField type='password' label='User Password' name='password'></TextField><br></br>
        <TextField label='First Name' name='firstName'></TextField><br></br>
        <TextField label='Last Name' name='lastName'></TextField><br></br>
        <TextField label='Team Name' name='teamName'></TextField><br></br>
        {/* <Select>Select Team</Select> */}
        <FormControlLabel control={<Checkbox />} name='isAdmin' label='Add as Admin' labelPlacement='end'
          onChange={handleAdmin} value={isAdmin} /><br></br>
        <Button type='submit' label='Create User' variant="contained" color="primary">Create User</Button>
      </form>
    </div>
  )
}

export default CreateUser;