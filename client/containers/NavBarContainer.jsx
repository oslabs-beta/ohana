import React, { useContext, useEffect, useState } from 'react';
import { Button, Link } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import SpacesContainer from './SpacesContainer.jsx'
import { useHistory } from 'react-router-dom';
<<<<<<< HEAD
// export const LoginContext = React.createContext();
=======
import { AppContext } from '../components/AppContext'
>>>>>>> 4c6d36e0ec3cc4e9beed50f02f659089328aa64c

const NavBar = () => {
  const { isAdmin } = useContext(AppContext)
  const [isLoggedIn, setLoggedIn] = useState(false);
  // const [isAdmin, setAdmin] = useState(false);
  let adminButton = '';
  if (isAdmin) adminButton = <Button className='navButtons' onClick={() => {history.push('/admin')}}>Admin</Button>
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
    {adminButton}
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

