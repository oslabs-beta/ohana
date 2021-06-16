import React from 'react';
import SpacesList from './SpacesList.jsx';
import { Button } from '@material-ui/core';

const CreateSpace = () => {
  return (
    <div id='CreateSpace'>
      <h2>Create a New Namespace</h2>
      <form method="POST" action='/spaces/add'>
        <label>
          Name:
          <input type="text" name="name" />
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