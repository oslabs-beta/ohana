import React, { useEffect, useContext } from 'react';
import CreateSpace from '../components/CreateSpace.jsx';
import SpacesList from '../components/SpacesList.jsx';
import { AppContext } from '../components/AppContext.js';

const SpacesContainer = () => {
  const { setIsLoggedIn, setIsAdmin } = useContext(AppContext);
  useEffect(() => {
    fetch('/cookies')
      .then(res => res.json())
      .then(data => {
        setIsLoggedIn(data.isLoggedIn);
        setIsAdmin(data.isAdmin);
      })
  })
  return (
    <div id='Spaces-Container'>
      <CreateSpace />
      <SpacesList />
    </div>
  )
}

export default SpacesContainer;