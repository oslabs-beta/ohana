import React, { useState } from 'react';
import { Button, TextField, Select, FormControlLabel, Checkbox } from '@material-ui/core'

const CreateSpace = () => {
  const [hostNamespace, setHostNamespace] = useState('');
  const [team_id, setTeamId] = useState('');
  const [projectName, setProjectName] = useState('');

  const handleSetHostNamespace = (e) => {
    console.log('namespace', e.target.value)
    setHostNamespace(e.target.value)
  }

  const handleSetTeamId = (e) => {
    console.log('teamId', e.target.value)
    setTeamId(e.target.value);
  }

  const handleSetProject = (e) => {
    console.log('projectName', e.target.value)
    setProjectName(e.target.value);
  }

  const formSubmit = (e) => {
    const data = { hostNamespace, team_id, projectName };
    e.preventDefault();
    fetch('/spaces/rtcCreate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  return (
    <div id='create-spaces'>
      <h1>Create a namespace</h1>

      <div id='spaces'>
        <form method="POST" action="/spaces/create">
          <TextField label='Create Namespace' name='hostNamespace' onChange={handleSetHostNamespace}/>
          <TextField label='Team ID' name='team_id' onChange={handleSetTeamId}/>
          <TextField label='Project Name' name='projectName' onChange={handleSetProject}/>
          <Button type="submit" onClick={formSubmit}>Create</Button>
        </form>
      </div>
    </div>
  )
};

export default CreateSpace;
