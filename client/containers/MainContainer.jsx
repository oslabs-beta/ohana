import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../components/LoginPage.jsx';
import AdminContainer from './AdminContainer.jsx';
import SpacesContainer from './SpacesContainer.jsx';
import ClusterContainer from './ClusterContainer.jsx';


export const LoginContext = React.createContext();


const MainContainer = (props) => {

  const [loginStatus, setLoginStatus] = useState({
    login: false,
    logout: true,
  })

  return (
    <div className='MainContainer'>
      <Switch>
        <Route path="/" exact>
        </Route>
        <Route path="/admin" exact component={AdminContainer} />
        <Route path="/spaces" exact component={SpacesContainer} />
        <Route path='/vcluster' exact component={ClusterContainer} />
      </Switch>

      {props.children}

    </div>
  )
}

export default MainContainer;

