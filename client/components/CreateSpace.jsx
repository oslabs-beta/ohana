import React, { useState } from 'react';
import { Button, TextField, Select, FormControlLabel, Checkbox } from '@material-ui/core';
// import { kubectl, vCluster, runTerminalCommand } from '../../terminalCommands.js'
// import { exec } from 'child_process';
// const { exec } = require('child_process');

const CreateSpace = () => {
  const [hostNamespace, setHostNamespace] = useState('');
  const [team_id, setTeamId] = useState('');
  const [project, setProject] = useState('');

  const handleSetHostNamespace = (e) => {
    console.log('namespace',e.target.value)
    setHostNamespace(e.target.value)
  }

  const handleSetTeamId = (e) => {
    console.log('teamId',e.target.value)
    setTeamId(e.target.value);
  }

  const handleSetProject = (e) => {
    console.log('project',e.target.value)
    setProject(e.target.value);
  }

  const formSubmit = (e) => {
    const data = { hostNamespace };
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

  // const { namespace, team_id, project } = req.body;

  return (
    <div id='create-spaces'>
      <h1>Create a namespace</h1>

      <div id='spaces'>
        <form method="POST" action="/spaces/create">
          <TextField label='Create Namespace' name='hostNamespace' onChange={handleSetHostNamespace}/>
          <TextField label='Team ID' name='team_id' onChange={handleSetTeamId}/>
          <TextField label='Project Name' name='project' onChange={handleSetProject}/>
          <Button type="submit" onClick={formSubmit}>Create</Button>
        </form>
      </div>
    </div>
  )
};

export default CreateSpace;
