import React, { Component } from 'react';
// import Table from './Table.jsx';
import MainContainer from '../containers/MainContainer.jsx'
import NavBar from '../containers/NavBarContainer.jsx'
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <div className="App">
      <NavBar/>
      <Router>
        <MainContainer/>
      </Router>
    </div>
    );
  };
};

export default App;