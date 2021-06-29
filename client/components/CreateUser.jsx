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

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const handleFirstName = e => {
    setFirstName(e.target.value)
  }

  const handleLastName = e => {
    setLastName(e.target.value)
  }

  const handleTeamName = e => {
    setTeamName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password, firstName, lastName, teamName, isAdmin }
    console.log('data', data)
    fetch('/user/create', {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => setCreatedUser(<p>{data}</p>))
      .catch((err) => {
        console.log(err)
      })
}

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div id='createuser'>
      <form onSubmit={handleSubmit}>
        <TextField label='User Email' name='email' onChange={handleEmail}></TextField><br></br>
        <TextField type='password' label='User Password' name='password' onChange={handlePassword}></TextField><br></br>
        <TextField label='First Name' name='firstName' onChange={handleFirstName}></TextField><br></br>
        <TextField label='Last Name' name='lastName' onChange={handleLastName}></TextField><br></br>
        <TextField label='Team Name' name='teamName' onChange={handleTeamName}></TextField><br></br>
        {/* <Select>Select Team</Select> */}
        <FormControlLabel control={<Checkbox />} name='isAdmin' label='Add as Admin' labelPlacement='end'
          onChange={handleAdmin} value={isAdmin} /><br></br>
        <Button type='submit' label='Create User' variant="contained" color="primary">Create User</Button>
        {createdUser}
      </form>
    </div>
  )
}

export default CreateUser;