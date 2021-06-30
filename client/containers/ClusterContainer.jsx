import React, { useState, useEffect, useContext } from 'react';
import CreateCluster from '../components/CreateCluster.jsx';
import VClustersList from '../components/VClustersList.jsx';
import { AppContext } from '../components/AppContext';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import clsx from 'clsx';

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

const ClusterContainer = () => {
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
    <div id='vClusterContainer'>
      <div className={classes.root}>
        <Grid container spacing={10}
          direction="row"
        // justify-content="flex-start"
        // alignItems="stretch"
        >
          <Grid item xs={5}>

            <div id='leftPaneNav' className='shadow'>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
              >



                <Box
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                  minHeight="15vh"
                >
                  {/* <img src={require("../assets/transparentohana.png")} alt="ohana" className="ohana_logo" /> */}
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  minHeight="15vh"
                >
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    minHeight="8vh"
                    border="1px solid #d5d5d5"
                    borderRadius="15px"
                    maxWidth="100%"
                    minWidth="80%"
                    alignSelf="center"
                    marginLeft="-2rem"
                  >
                    {circle}
                    <Box
                      minHeight="0"
                      maxHeight="10vh"
                      paddingLeft="1em"
                      lineHeight="2px"
                    >
                      <h3>Lawrence Han</h3>
                      <p><mark>admin</mark></p>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignContent="center"
                justifyContent="flexStart"
                minHeight="68vh"
              >
                <Box
                  minHeight="0"
                  maxHeight="15vh"
                  paddingLeft="1em">
                  <h3>General</h3>
                  <p>Clusters</p>
                  <p>Spaces</p>
                  <p>Images</p>
                </Box>
                <Box
                  minHeight="10vh"
                  maxHeight="15vh"
                  paddingLeft="1em">
                  <h3>Admin</h3>
                  <p>Teams</p>
                  <p>Users</p>
                </Box>
                <Box
                  minHeight="0"
                  maxHeight="15vh"
                  paddingLeft="1em">
                  <h3>Support</h3>
                  <p>Docs</p>
                  <p>Github</p>

                </Box>
              </Box>

            </div>

          </Grid>

          <Grid item xs={8}>
            <VClustersList />
          </Grid>
          <Grid item xs={4}>
            <CreateCluster />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default ClusterContainer;