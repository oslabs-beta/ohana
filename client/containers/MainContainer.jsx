import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../components/LoginPage.jsx';
// import AdminSignup from '../components/AdminSignup.jsx';
import AdminContainer from './AdminContainer.jsx';
import UserContainer from './UserContainer.jsx';
<<<<<<< HEAD
import CreateUser from '../components/CreateUser.jsx'
import ClusterContainer from './ClusterContainer.jsx'
import SpacesContainer from './SpacesContainer.jsx'
=======
import CreateUser from '../components/CreateUser.jsx';
import ClusterContainer from '../components/CreateUser.jsx';
import SpacesContainer from '../components/CreateUser.jsx';
import CreateCluster from '../components/CreateCluster.jsx';
>>>>>>> 17973a421f580fec5662c147822791bd09027559

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
        <Route path="/" exact component={SpacesContainer} />
        <Route path="/" exact component={ClusterContainer} />
      </Switch>
<<<<<<< HEAD
      <SpacesContainer/>
      <ClusterContainer/>
=======
      <CreateCluster />
>>>>>>> 17973a421f580fec5662c147822791bd09027559
      </div>   
    )
}

export default MainContainer;