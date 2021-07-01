import React, { useState, useEffect, useContext } from 'react';
import { Button, TextField, Box } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { AppContext } from './AppContext'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
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


const HomePage = () => {

  const classes = useStyles();
  const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />;



  return (
    <div id="homePage">
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
            width="20rem"
            >
            <h1>Welcome to Ohana, <br/> Larry</h1>
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
            <h1 id="ok">OK</h1>
            <p>Connected to GKE</p>
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
            <h1 id="ok">4</h1>
            <p>Active vClusters</p>
          </Box>
          </Box>

        </Grid>
        <Grid xs={12}>
          <br/>
        <Box
          minHeight="20vh"
          maxHeight="30vh"
          borderRadius="20px"
          display="flex"
          border="1px solid #d5d5d5"
          justifyContent="flexStart"
          alignItems="flexStart"
          flexDirection="column"
          paddingLeft="2em"
          paddingRight="2em"
          >
            <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            >
            <Box
            // border="1px solid blue"
            >
          <h2>Active vClusters</h2>
          <ul>
          <li>vCluster-1-dev</li>
          <li>vCluster-1-dev</li>
          <li>vCluster-1-dev</li>
          </ul>
          </Box>
          <Box
            // border="1px solid blue"
            >
          <h2>Active Spaces</h2>
          <ul>
          <li>spaces-1-dev</li>
          <li>spaces-1-dev</li>
          <li>spaces-1-dev</li>
          </ul>
          </Box>
          </Box>
          <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          // border="1px solid blue"
          minHeight="10vh"
          >
            <Box
            >
          <Button label='Create vCluster' variant="contained" color="primary">Create vCluster</Button>
          </Box>
          <Button label='Create Namespace' variant="contained" color="primary">Create Namespace</Button>
          </Box>

          </Box>
        </Grid>
        

      {/* <VClustersList /> */}
      </Grid>
      {/* <Grid item xs={6}>
      
      </Grid> */}
      
      </Grid>
      
      </div>


    </div>
  )

}



export default HomePage;