import React from 'react';
import CreateSpace from '../components/CreateSpace.jsx';
import SpacesList from '../components/SpacesList.jsx';

const SpacesContainer = () => {

  return (
    <div id='Spaces-Container'>
      <CreateSpace />
      <SpacesList />
    </div>
  )
}

export default SpacesContainer;