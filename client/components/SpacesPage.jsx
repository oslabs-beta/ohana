import React from 'react';
import { Button, TextField } from '@material-ui/core';
import SpacesList from './SpacesList.jsx';

const CreateSpace = () => {
  return (
    <div id='CreateSpace'>
      <h2>Create a New Namespace</h2>
      <form method="POST" action='/spaces/add'>
        <label>

          {/* <input type="text" name="namespace" /> */}
          <TextField name='namespace' label='Name' />

          <TextField type="text" name="team_id" label='Team ID' />

          <TextField type="text" name="project" label='Project Name' />
        </label>
        <Button type='submit' label='Create Namespace'>Create Namespace</Button>
      </form>
    </div>
  )
}

const SpacesPage = () => {
  return (
    <div id='SpacesPage'>
      <h1>Currently Active Spaces</h1>
      <SpacesList />
      <h1>Create a Space</h1>
      <CreateSpace />
    </div>
  )
}



export default SpacesPage;