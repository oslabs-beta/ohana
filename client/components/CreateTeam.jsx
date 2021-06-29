import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const CreateTeam = () => {
  const [teamName, setTeamName] = useState('')
  const [addTeamStatus, setAddTeamStatus] = useState('')

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  }
  const handleSubmit = (e) => {
    console.log('am i hitting submit?')
    e.preventDefault();
    fetch('/teams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ teamName })
    })
      .then(res => res.json())
      .then(data => setAddTeamStatus(<p>{data}</p>))
      .catch(err => {
        console.log(err)
        setAddTeamStatus(<p>Unable to create new team</p>)
      })
  }

  // should add in dropdown for team
  return (
    <div id='createteam'>
      <form method="POST" action="/team" onSubmit={handleSubmit}>
        <TextField label='Team Name' name='teamName' onChange={handleTeamNameChange}></TextField><br></br>
        {/* <TextField label='Team Lead'></TextField><br></br>
        <TextField label='Team Lead Email'></TextField><br></br>
        <TextField label='Project Name'></TextField><br></br> */}
        <Button variant="contained" color="primary" type="submit">Create Team</Button>
      </form>
      {addTeamStatus}
    </div>
  )
}

export default CreateTeam;