import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../components/LoginPage.jsx';
import AdminSignup from '../components/AdminSignup.jsx';
import AdminContainer from './AdminContainer.jsx';
import UserContainer from './UserContainer.jsx';
import CreateUser from '../components/CreateUser.jsx'
import ClusterContainer from '../components/CreateUser.jsx'
import SpacesContainer from '../components/CreateUser.jsx'

//added two routes for spaces and clusters

const MainContainer = () => {
    return (
      <div className='MainContainer'> 
      <AdminSignup/>  
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/adminsignup" exact component={AdminSignup} />
        <Route path="/admin" exact component={AdminContainer} />
        <Route path="/user" exact component={UserContainer} />
        <Route path="/spaces" exact component={SpacesContainer} />
        <Route path="/clusters" exact component={ClusterContainer} />
      </Switch>
      </div>   
    )
}

export default MainContainer;