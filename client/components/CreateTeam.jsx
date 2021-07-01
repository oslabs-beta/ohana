import { Button, TextField, Box } from '@material-ui/core';
import React, { useEffect, useContext, useState } from 'react';
import CreateSpace from '../components/CreateSpace.jsx';
import { AppContext } from '../components/AppContext.js';
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


const CreateTeam = () => {
  const [teamName, setTeamName] = useState('')
  const [addTeamStatus, setAddTeamStatus] = useState('')

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  }
  const handleSubmit = (e) => {
    console.log('am i hitting submit?')
    e.preventDefault();
    fetch('/teams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ teamName })
    })
      .then(res => res.json())
      .then(data => setAddTeamStatus(<p>{data}</p>))
      .catch(err => {
        console.log(err)
        setAddTeamStatus(<p>Unable to create new team</p>)
      })
  }

  // should add in dropdown for team
  return (
    <div id='createteam'>
      <form method="POST" action="/team" onSubmit={handleSubmit}>
      <Box
          display="flex"
          flexDirection="row"
          justifyContent="flexStart"
          
          width="50vw"
          // flexDirection="column"
          >
            <Box
            
            maxWidth="20vw"
            >
          <h2>Create a Team</h2>
          </Box>
          <Box
      
      >
      {addTeamStatus}
      </Box>
          </Box>
        <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flexStart"
        minHeight="15vh"
        minWidth="40vw"
        >
        <TextField label='Team Name' name='teamName' onChange={handleTeamNameChange}></TextField><br></br>
        {/* <TextField label='Team Lead'></TextField><br></br>
        <TextField label='Team Lead Email'></TextField><br></br>
        <TextField label='Project Name'></TextField><br></br> */}
        <Button variant="contained" color="primary" type="submit">Create Team</Button>
        </Box>
      </form>
      
    </div>
  )
}

export default CreateTeam;