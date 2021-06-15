import React, { useState, useContext } from 'react';
// import Table from './Table.jsx';
import MainContainer from '../containers/MainContainer.jsx'
import NavBar from '../containers/NavBarContainer.jsx'
import { BrowserRouter as Router } from 'react-router-dom';



const App = (props) => {

  

 
  
    return(
      <div className="App">
      <Router>
      <NavBar/>
        <MainContainer/>
      </Router>
      
    </div>
    );
  
};

export default App;
