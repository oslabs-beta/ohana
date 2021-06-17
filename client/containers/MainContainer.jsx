import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../components/LoginPage.jsx';
// import AdminSignup from '../components/AdminSignup.jsx';
import AdminContainer from './AdminContainer.jsx';
import UserContainer from './UserContainer.jsx';
import CreateUser from '../components/CreateUser.jsx';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c5d30b0f47d85e197aef7ede22c4d1d1e1a3f7f4
import SpacesContainer from './SpacesContainer.jsx';
import ClusterContainer from './ClusterContainer.jsx';


<<<<<<< HEAD
=======
import ClusterContainer from './ClusterContainer.jsx';
import SpacesContainer from './SpacesContainer.jsx';
>>>>>>> 50937f7e8d78d27fc0ab54255a35b0a74b503536
=======
export const LoginContext = React.createContext();


const MainContainer = (props) => {

  const [loginStatus, setLoginStatus] = useState({
    login: false,
    logout: true,
  })

  // console.log('login context', LoginContext);
>>>>>>> c5d30b0f47d85e197aef7ede22c4d1d1e1a3f7f4

  // console.log('main', props)
  return (
    <div className='MainContainer'>


      <Switch>

        <Route path="/" exact>
          <LoginContext.Provider value={loginStatus}>
            <LoginPage props={loginStatus} />
          </LoginContext.Provider>
        </Route>
        <Route path="/admin" exact component={AdminContainer} />
<<<<<<< HEAD
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
=======
        <Route path="/user" exact component={SpacesContainer} />
        <Route path='/vcluster' exact component={ClusterContainer} />
>>>>>>> c5d30b0f47d85e197aef7ede22c4d1d1e1a3f7f4
      </Switch>

      {props.children}

    </div>

  )

}

export default MainContainer;

