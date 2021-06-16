import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../components/LoginPage.jsx';
// import AdminSignup from '../components/AdminSignup.jsx';
import AdminContainer from './AdminContainer.jsx';
import UserContainer from './UserContainer.jsx';
import CreateUser from '../components/CreateUser.jsx';
import ClusterContainer from './ClusterContainer.jsx';
import SpacesContainer from './SpacesContainer.jsx';


//added two routes for spaces and clusters

const MainContainer = () => {
    return (
      <div className='MainContainer'> 
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/admin" exact component={AdminContainer} />
        <Route path="/user" exact component={UserContainer} />
        {/* <Route path="/spaces" exact component={SpacesContainer} />
        <Route path="/clusters" exact component={ClusterContainer} /> */}
        {/* <Route path="/" exact component={SpacesContainer} />
        <Route path="/" exact component={ClusterContainer} /> */}
      </Switch>
      <SpacesContainer/>
      <ClusterContainer/>
      </div>   
    )
}

export default MainContainer;