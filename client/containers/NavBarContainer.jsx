import React, { useContext, useState } from 'react';
import { Button, Link } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import SpacesContainer from './SpacesContainer.jsx'
import { useHistory } from 'react-router-dom';
export const LoginContext = React.createContext();
const NavBar = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  let history = useHistory();
  // console.log('nav', isLoggedIn)
  // console.log('nav admin', isAdmin)
  // console.log('nav context', LoginContext);
  // setLoggedIn(useContext(LoginContext))
  return (
    <div id='navbar'>
      {/* <Button>Spaces</Button>
    <Button onClick={handleCluster}>vClusters</Button>
     */}
    <Button className='navButtons' onClick={() => {history.push('/admin')}}>
      Admin
    </Button>
    <Button className='navButtons' onClick={() => {history.push('/spaces')}}>
      Spaces
    </Button>
    <Button className='navButtons' onClick={() => {history.push('/vcluster')}}>
      vClusters
    </Button>
    </div>
  )
}
export default NavBar;

