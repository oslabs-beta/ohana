import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
// import LoginPage from '../components/LoginPage.jsx';
// do we need this?
import AdminContainer from './AdminContainer.jsx';
import SpacesContainer from './SpacesContainer.jsx';
import ClusterContainer from './ClusterContainer.jsx';
import LoginPage from '../components/LoginPage.jsx';
import HomePage from '../components/HomePage.jsx';
import TeamsDisplay from '../components/TeamsDisplay.jsx';
import UsersDisplay from '../components/UsersDisplay.jsx';
import DeployPage from '../components/DeployPage.jsx';

export const LoginContext = React.createContext();

const MainContainer = (props) => {
  
  const [loginStatus, setLoginStatus] = useState({
    login: false,
    logout: true,
  })

  return (
    <div className='MainContainer'>
      <Switch>
        <Route path="/" exact component={LoginPage}>
        </Route>
        <Route path="/home" exact component={HomePage} />
        <Route path="/admin" exact component={AdminContainer} />
        <Route path="/spaces" exact component={SpacesContainer} />
        <Route path='/vcluster' exact component={ClusterContainer} />
        <Route path='/team' exact component={TeamsDisplay} />
        <Route path='/users' exact component={UsersDisplay} />
        <Route path='/deploy' exact component={DeployPage} />
        
      </Switch>
      {props.children}
    </div>
  )
}

export default MainContainer;
