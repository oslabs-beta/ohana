import React from 'react';
import { Button, TextField } from '@material-ui/core'


const CreateTeam = () => {

  return (
    <div id='createteam'>
      <TextField label='Team Name'></TextField><br></br>
      <TextField label='Team Lead'></TextField><br></br>
      <TextField label='Team Lead Email'></TextField><br></br>
      <TextField label='Project Name'></TextField><br></br>
      <Button>Create Team</Button>
    </div>
  )
}


export default CreateTeam;