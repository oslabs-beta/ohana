import React from 'react';
import { Button, TextField } from '@material-ui/core'


const CreateTeam = () => {

  return (
    <div id='createteam'>
      <TextField>Team Name</TextField>
      <Button>Create Team</Button>
    </div>
  )
}


export default CreateTeam;