import React, { useState } from 'react';
import MainContainer from '../containers/MainContainer.jsx';
import NavBar from '../containers/NavBarContainer.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext } from './AppContext';
import PaletteIcon from '@material-ui/icons/Palette';
import StarIcon from '@material-ui/icons/Star';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ToggleTheme from '../themes/ToggleTheme.jsx';

// const useStyles = makeStyles(theme => {
//   button: {
//     color: theme.palette.primary
//   }
// })

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    // flexDirection: 'column',
    // minHeight: '100vh',
    // padding: theme.spacing(0, 0),
    // margin: { margin: '0px' },
    // justifyContent: 'space-between',
    // "& .MuiFilledInput-root": {
    //   // background: theme.palette.primary.contrastText,
    //   border: "1px solid #d5d5d5",
    //   borderRadius: "15px",
    // },

  },
  main: {
    // marginTop: theme.spacing(0),
    // marginBottom: theme.spacing(2),
    // padding: theme.spacing(0, 0),
    // justifyContent: 'space-between'
  },
  footer: {
    padding: theme.spacing(2, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
    // color: theme.palette.primary.contrastText
  },
  header: {
    paddingBottom: '2px'
  }
}));


const App = (props) => {
  let navBar = '';
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
  if (isLoggedIn) navBar = <NavBar />;

  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <AppContext.Provider value={value}>
          {/* {navBar} */}
          {/* <Container 
          border="3px solid orange"
          
          >  */}
          
         
            {/* <Container className={classes.main}> */}
              <MainContainer className={classes.root}/>
            {/* </Container> */}

            {/* <Container className={classes.footer}> */}
            <ToggleTheme />
          {/* </Container> */}
          {/* </Container> */}
        </AppContext.Provider>
      </Router>




      {/* <ToggleButtonGroup>
        <ToggleButton className={classes.button}>
          <PaletteIcon />
        </ToggleButton>
        <ToggleButton className={classes.button}>
          <StarIcon />
        </ToggleButton>
      </ToggleButtonGroup> */}

    </div>
  );
};

export default App;
