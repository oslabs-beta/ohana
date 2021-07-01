import React, { useEffect, useContext, useState } from 'react';
import CreateSpace from '../components/CreateSpace.jsx';
import SpacesList from '../components/SpacesList.jsx';
import { AppContext } from '../components/AppContext.js';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CreateTeam from './CreateTeam.jsx';
import NavPane from '../containers/NavPane.jsx'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
  shape: {
    backgroundColor: theme.palette.primary.main,
    width: 55,
    height: 55,
  },
  shapeCircle: {
    borderRadius: '100%',
  },
}));

const TeamsDisplay = () => {
  const classes = useStyles();
  const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />;

  const { setIsLoggedIn, setIsAdmin, setClusterNames, setNamespaces, setTeamId } = useContext(AppContext);
  useEffect(() => {
    fetch('/cookies')
      .then(res => res.json())
      .then(data => {
        console.log('cookie request data', data)
        setIsLoggedIn(data.isLoggedIn);
        setIsAdmin(data.isAdmin);
        setTeamId(data.teamId);
      })
    fetch('/clusters/list')
      .then((res) => res.json())
      .then(data => {
        let names = [];
        data.forEach(element => names.push(element.name))
        setClusterNames(names)
    })
    fetch('/spaces/fetchspaces')
      .then((res) => res.json())
      .then(data => {
        let namespaces = [];
        data.forEach(element => namespaces.push(element.name))
        setNamespaces(namespaces)
    })
  }, [])


  return (
    <div id="teamslist">

<div className={classes.root}>
      <Grid container spacing={10}
        direction="row"
        // justify-content="flex-start"
        // alignItems="stretch"
      >
        <Grid item xs={5}>
        <NavPane />
      </Grid>
      <Grid item xs={7}>
        
      <Grid container spacing={2}>
      </Grid>
      <Box
          display="flex"
          flexDirection="column"
          minHeight="10vh"
          marginTop="1em"
          
          >
      <Box
            minHeight="10vh"
            maxHeight="20vh"
            paddingLeft="1em"
            lineHeight="2px"
            display="flex"
            justifyContent="flex-end"
            
            >
            {circle}
          </Box>
            </Box>
        <Grid item xs={12}>
          <Box
          border="1px solid #d5d5d5"
          minHeight="20vh"
          maxHeight="20vh"
          borderRadius="20px"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          paddingLeft="1rem"
          >
            <Box
            width="15rem"
            >
            <h2>Create and manage teams</h2>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <br/>
        <Box
          minHeight="20vh"
          maxHeight="30vh"
          borderRadius="20px"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          >

          <Box
          minHeight="20vh"
          maxHeight="30vh"
          width="40%"
          border="1px solid #d5d5d5"
          borderRadius="20px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          >
            <h1 id="ok">4</h1>
            <p>Active Teams</p>
          </Box>
          <Box
          minHeight="20vh"
          maxHeight="30vh"
          width="40%"
          border="1px solid #d5d5d5"
          borderRadius="20px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          >
            <h1 id="ok">15</h1>
            <p>Active Users</p>
          </Box>
          </Box>

        </Grid>
        <Grid xs={12}>
          <br/>
        <Box
          minHeight="20vh"
          maxHeight="25vh"
          borderRadius="20px"
          display="flex"
          border="1px solid #d5d5d5"
          justifyContent="flexStart"
          alignItems="flexStart"
          flexDirection="column"
          paddingLeft="1em"
          >
          <h2>Current Teams</h2>
          <ul>
          <li>dev-team-1</li>
          <li>dev-team-2</li>
          <li>dev-team-3</li>
          </ul>
          

          </Box>
        </Grid>
        <Grid xs={12}>
          <br/>
        <CreateTeam />
        </Grid>

      {/* <VClustersList /> */}
      </Grid>
      {/* <Grid item xs={6}>
      
      </Grid> */}
      
      </Grid>
      </div>
    
    </div>
  );
}


export default TeamsDisplay;