import React, { useState, useContext, useEffect } from 'react';
import MainContainer from '../containers/MainContainer.jsx'
import NavBar from '../containers/NavBarContainer.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext } from './AppContext'

const App = (props) => {
  let navBar = '';
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [clusterNames, setClusterNames] = useState([])
  const value = { isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, clusterNames, setClusterNames };
  if (isLoggedIn) navBar = <NavBar />;
  
  return (
    <div className="App">
      <Router>
        <AppContext.Provider value={value}>
          {navBar}
          <MainContainer />
        </AppContext.Provider>
      </Router>
    </div>
  );
};

export default App;
