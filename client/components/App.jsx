import React, { useState, useContext } from 'react';
import MainContainer from '../containers/MainContainer.jsx'
import NavBar from '../containers/NavBarContainer.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext } from './AppContext'

const App = (props) => {
<<<<<<< HEAD
   
=======
  let navBar = '';
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const value = { isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin };
  if (isLoggedIn) navBar = <NavBar />;

>>>>>>> 4c6d36e0ec3cc4e9beed50f02f659089328aa64c
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
