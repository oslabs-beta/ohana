import React, { useState } from 'react';
import { Button, TextField, Box } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CreateUser from './CreateUser.jsx';

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


const UsersDisplay = () => {

  const classes = useStyles();
  const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />;
  // const [teamName, setTeamName] = useState('')
  // const [addTeamStatus, setAddTeamStatus] = useState('')

  // const handleTeamNameChange = (e) => {
  //   setTeamName(e.target.value);
  // }
  // const handleSubmit = (e) => {
  //   console.log('am i hitting submit?')
  //   e.preventDefault();
  //   fetch('/teams', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ teamName })
  //   })
  //     .then(res => res.json())
  //     .then(data => setAddTeamStatus(<p>{data}</p>))
  //     .catch(err => {
  //       console.log(err)
  //       setAddTeamStatus(<p>Unable to create new team</p>)
  //     })
  // }

  

  // should add in dropdown for team
  return (
  <div id="userDisplay">
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
        <img src={require("../assets/transparentohana.png")} alt="ohana" className="ohana_logo"/>
        </Box>
        <Box
        display="flex"
        flexDirection="column"
        minHeight="15vh">
        <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        minHeight="10vh"
        maxheight="11vh"
        border="1px solid #d5d5d5"
        borderRadius="15px"
        maxWidth="100%"
        minWidth="80%"
        alignSelf="center"
        marginLeft="-2rem"
        
        >
          &nbsp;&nbsp;
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
        minHeight="75vh"
        
        >
          <Box
          minHeight="10vh"
          maxHeight="25vh"
          paddingLeft="1em"
          
          >
        <h3>General</h3>
        <p>Clusters</p>
        <p>Spaces</p>
        <p>Images</p>
        </Box>
        <Box
          minHeight="10vh"
          maxHeight="20vh"
          paddingLeft="1em"
          >
        <h3>Admin</h3>
        <p>Teams</p>
        <p>Users</p>
        </Box>
        <Box
          minHeight="0"
          maxHeight="20vh"
          paddingLeft="1em">
        <h3>Support</h3>
        <p>Docs</p>
        <p>Github</p>
        
        </Box>
        </Box>          
        </div>
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
          <h2>Create and manage users</h2>
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
        <h2>Current Users</h2>
        <ul>
        <li>dev-user-1</li>
        <li>dev-user-2</li>
        <li>dev-user-3</li>
        </ul>
        

        </Box>
      </Grid>
      <Grid xs={12}>
        <br/>
      <CreateUser />
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

export default UsersDisplay;