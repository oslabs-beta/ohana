import React, { useState, useContext } from 'react';
import { TextField, Button, CircularProgress, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { AppContext } from './AppContext';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
}));


const CreateCluster = () => {

  const [clusterName, setClusterName] = useState('');
  const [vClusterName, setvClusterName] = useState('');
  const [hostNamespace, setHostNamespace] = useState('');
  const [inProgress, setInProgress] = useState('');
  const [currentProcess, setCurrentProcess] = useState('');
  const { clusterNames, namespaceNames } = useContext(AppContext)

  const classes = useStyles();

  const clusterNamesDropdown = [];
  clusterNames.forEach(name => clusterNamesDropdown.push(<MenuItem value={name}>{name}</MenuItem>))

  const namespaceDropdown = [];
  namespaceNames.forEach(name => namespaceDropdown.push(<MenuItem value={name}>{name}</MenuItem>))

  const handleClusterNameChange = (e) => {
    setClusterName(e.target.value)
  }

  const handleSetvClusterName = (e) => {
    setvClusterName(e.target.value);
  }

  const handleHostNamespaceChange = (e) => {
    setHostNamespace(e.target.value);
  }

  const formSubmit = (e) => {
    const data = { clusterName, vClusterName, hostNamespace };
    setCurrentProcess(`Creating vCluster: ${vClusterName}`)
    setInProgress(<CircularProgress />);
    e.preventDefault();

    fetch('/vclusters/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        setCurrentProcess(data);
        setInProgress('');
      })
      .catch(err => console.log(err))
  }

  return (
    <div id='create-clusters'>
      <div className={classes.root}>
        <Box component="span" m={1}
        // display="flex"
        // justifyContent="center"
        // alignItems="center"
        // minHeight="100vh"
        >
          <h1>Create a vCluster</h1>
          <div id='clusters'>
            <form onSubmit={formSubmit}>

              <FormControl>
                <InputLabel id="inputLabels">Select Cluster</InputLabel>
                <Select label='Select Cluster' onChange={handleClusterNameChange}>
                  {clusterNamesDropdown}
                </Select>
              </FormControl>

              <TextField label='vCluster' name='vClusterName' onChange={handleSetvClusterName} />

              <FormControl>
                <InputLabel id="inputLabels">Select Namespace</InputLabel>
                <Select label='Select Namespace' name='hostNamespace' onChange={handleHostNamespaceChange}>
                  {namespaceDropdown}
                </Select>
              </FormControl>

              <Button variant="contained" color="primary" type="submit">Create</Button>
              <span>{currentProcess}</span><span>{inProgress}</span>
            </form>
          </div>
        </Box>
      </div>
    </div>
  )
}

export default CreateCluster;
