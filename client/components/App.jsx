import React, { useState } from 'react';
import MainContainer from '../containers/MainContainer.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext } from './AppContext';
import { makeStyles } from '@material-ui/core/styles';
import ToggleTheme from '../themes/ToggleTheme.jsx';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
  },
  header: {
    paddingBottom: '2px'
  }
}));


const App = (props) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [clusterNames, setClusterNames] = useState([])
  const [namespaceNames, setNamespaces] = useState([])
  const [teamId, setTeamId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vClusters, setvClusters] = useState('');
  const value = { 
    isLoggedIn, setIsLoggedIn, 
    isAdmin, setIsAdmin, 
    clusterNames, setClusterNames, 
    namespaceNames, setNamespaces, 
    teamId, setTeamId,
    firstName, setFirstName,
    lastName, setLastName,
    vClusters, setvClusters
  };
  // if (isLoggedIn) navBar = <NavBar />;

  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <AppContext.Provider value={value}>
            <MainContainer />
            <ToggleTheme />
        </AppContext.Provider>
      </Router>
    </div>
  );
};

export default App;
