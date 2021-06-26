import React, { useContext, useEffect, useState } from 'react';
import { Button, Link } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import SpacesContainer from './SpacesContainer.jsx'
import { useHistory } from 'react-router-dom';
import { AppContext } from '../components/AppContext'

const NavBar = () => {
  const { isAdmin } = useContext(AppContext)
  console.log(AppContext)
  console.log(useContext(AppContext))
  let adminButton = '';
  if (isAdmin) adminButton = <Button className='navButtons' onClick={() => { history.push('/admin') }}>Admin</Button>
  let history = useHistory();

  return (
    <div id='navbar'>
      {adminButton}
      <Button className='navButtons' onClick={() => { history.push('/spaces') }}>
        Spaces
      </Button>
      <Button className='navButtons' onClick={() => { history.push('/vcluster') }}>
        vClusters
      </Button>
    </div>
  )
}
export default NavBar;

