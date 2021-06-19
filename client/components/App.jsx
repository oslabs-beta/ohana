import React, { useState, useContext } from 'react';
import MainContainer from '../containers/MainContainer.jsx'
import NavBar from '../containers/NavBarContainer.jsx'
import { BrowserRouter as Router } from 'react-router-dom';



const App = (props) => {

<<<<<<< HEAD

    return(
      <div className="App">
=======
  return (
    <div className="App">
>>>>>>> 024d21d4cd91b8d6e22f04c65da2dd6db11af187
      <Router>
        <NavBar />
        <MainContainer />
      </Router>
    </div>
  );

};

export default App;
