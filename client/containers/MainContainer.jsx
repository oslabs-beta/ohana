import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../components/LoginPage.jsx';
import AdminSignup from '../components/AdminSignup.jsx';
import AdminContainer from './AdminContainer.jsx';
import UserContainer from './UserContainer.jsx';
import CreateUser from '../components/CreateUser.jsx'





const MainContainer = () => {
    return (
      <div className='MainContainer'> 
      <AdminSignup/>  
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/adminsignup" exact component={AdminSignup} />
        <Route path="/admin" exact component={AdminContainer} />
        <Route path="/user" exact component={UserContainer} />
      </Switch>
      </div>   
      
    )
}

export default MainContainer;