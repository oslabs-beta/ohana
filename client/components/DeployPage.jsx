import React from 'react';
import { Box } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DeployComp from './DeployComponent.jsx';
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


const DeployPage = () => {
  
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
          <h2>Create and manage deployments</h2>
          </Box>
        </Box>
      </Grid>
      
      <Grid xs={12}>
        <br/>
      <DeployComp />
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

export default DeployPage;