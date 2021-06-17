import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../components/LoginPage.jsx';
// import AdminSignup from '../components/AdminSignup.jsx';
import AdminContainer from './AdminContainer.jsx';
import UserContainer from './UserContainer.jsx';
import CreateUser from '../components/CreateUser.jsx';
<<<<<<< HEAD
import SpacesContainer from './SpacesContainer.jsx';
import vClusterContainer from './vClusterContainer.jsx';


=======
import ClusterContainer from './ClusterContainer.jsx';
import SpacesContainer from './SpacesContainer.jsx';
>>>>>>> 50937f7e8d78d27fc0ab54255a35b0a74b503536


//added two routes for spaces and clusters

const MainContainer = () => {
    return (
      <div className='MainContainer'> 
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/admin" exact component={AdminContainer} />
<<<<<<< HEAD
        <Route path="/user" exact component={SpacesContainer} />
        <Route path='/vcluster' exact component={vClusterContainer} />
=======
        <Route path="/user" exact component={UserContainer} />
        {/* <Route path="/spaces" exact component={SpacesContainer} />
        <Route path="/clusters" exact component={ClusterContainer} /> */}
        {/* <Route path="/" exact component={SpacesContainer} />
        <Route path="/" exact component={ClusterContainer} /> */}
>>>>>>> 50937f7e8d78d27fc0ab54255a35b0a74b503536
      </Switch>
      <SpacesContainer/>
      <ClusterContainer/>
      </div>   
    )
}

export default MainContainer;