<<<<<<< HEAD
import React, { useContext, useState } from 'react';
import { Button, Link } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import SpacesContainer from './SpacesContainer.jsx'
import { useHistory } from 'react-router-dom';
export const LoginContext = React.createContext();
=======
import React, { useContext, useState }  from 'react';
import { Button, Link } from '@material-ui/core';
import { Switch, Route} from 'react-router-dom';
import SpacesContainer from './SpacesContainer.jsx'
import { useHistory } from 'react-router-dom';  

export const LoginContext = React.createContext();

>>>>>>> 3fa3dab2ec9a6dcef41e6c7eaf7ef29192c83834
const NavBar = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  let history = useHistory();
<<<<<<< HEAD
  // console.log('nav', isLoggedIn)
  // console.log('nav admin', isAdmin)
  // console.log('nav context', LoginContext);
  // setLoggedIn(useContext(LoginContext))
  return (
    <div id='navbar'>
      {/* <Button>Spaces</Button>
    <Button onClick={handleCluster}>vClusters</Button>
    <Button>Admin</Button> */}
=======


  // console.log('nav', isLoggedIn)
  // console.log('nav admin', isAdmin)

  // console.log('nav context', LoginContext);

  // setLoggedIn(useContext(LoginContext))

  return (
    <div id='navbar'>
    {/* <Button>Spaces</Button>
    <Button onClick={handleCluster}>vClusters</Button>
    <Button>Admin</Button> */}
    
>>>>>>> 3fa3dab2ec9a6dcef41e6c7eaf7ef29192c83834
      <Link component='button' onClick={() => {
        history.push('/user')
      }}>Spaces</Link>
      <Link component='button' onClick={() => {
        history.push('/vcluster')
      }}>vClusters</Link>
<<<<<<< HEAD
=======
  
>>>>>>> 3fa3dab2ec9a6dcef41e6c7eaf7ef29192c83834
    </div>
  )
}
export default NavBar;