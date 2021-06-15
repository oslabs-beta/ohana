import React from 'react';
import { Button } from '@material-ui/core';
import { Switch, Route, Link } from 'react-router-dom';
import SpacesContainer from './SpacesContainer.jsx'
import { useHistory } from 'react-router-dom';  



const NavBar = () => {
  let history = useHistory();

  // handle vcluster click
  const handleCluster = (e) => {
    
    history.push('/vcluster');
  }

  // handle spaces click


  return (
    <div id='navbar'>
    <Button>Spaces</Button>
    <Button onClick={handleCluster}>vClusters</Button>
    <Button>Admin</Button>
    </div>

  )
}


export default NavBar;