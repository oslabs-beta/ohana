import React, { useState, useContext } from "react";
import {
  TextField,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { AppContext } from "./AppContext";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
  },
}));

const CreateCluster = () => {
  const [clusterName, setClusterName] = useState("");
  const [vClusterName, setvClusterName] = useState("");
  const [hostNamespace, setHostNamespace] = useState("");
  const [inProgress, setInProgress] = useState("");
  const [currentProcess, setCurrentProcess] = useState("");
  const { clusterNames, namespaceNames } = useContext(AppContext);

  const classes = useStyles();

  const clusterNamesDropdown = [];
  clusterNames.forEach((name) =>
    clusterNamesDropdown.push(<MenuItem value={name}>{name}</MenuItem>)
  );

  const namespaceDropdown = [];
  namespaceNames.forEach((name) =>
    namespaceDropdown.push(<MenuItem value={name}>{name}</MenuItem>)
  );

  const handleClusterNameChange = (e) => {
    setClusterName(e.target.value);
  };

  const handleSetvClusterName = (e) => {
    setvClusterName(e.target.value);
  };

  const handleHostNamespaceChange = (e) => {
    setHostNamespace(e.target.value);
  };

  const formSubmit = (e) => {
    const data = { clusterName, vClusterName, hostNamespace };
    setCurrentProcess(<span>Creating {vClusterName}</span>);
    setInProgress(<CircularProgress />);
    e.preventDefault();

    fetch("/vclusters/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrentProcess(data);
        setInProgress("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id='create-clusters'>
      <div className={classes.root}>
        <Box
          component='span'
          m={1}
          display='flex'
          justifyContent='flexStart'
          alignItems='center'
          flexDirection='column'
          // minHeight="100vh"
        >
          <h1>Create a new virtual cluster</h1>
          <div id='clusters'>
            <form onSubmit={formSubmit}>
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
              >
                <br />
                <Box
                  display='flex'
                  flexDirection='row'
                  justifyContent='space-between'
                  width='50vw'
                >
                  <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='flexStart'

                    // alignItems="center"
                  >
                    <FormControl>
                      <InputLabel id='inputLabels'>Select Cluster</InputLabel>
                      <Select
                        label='Select Cluster'
                        onChange={handleClusterNameChange}
                      >
                        {clusterNamesDropdown}
                      </Select>
                    </FormControl>
                    <FormControl>
                      <InputLabel id='inputLabels'>Select Namespace</InputLabel>
                      <Select
                        label='Select Namespace'
                        name='hostNamespace'
                        onChange={handleHostNamespaceChange}
                      >
                        {namespaceDropdown}
                      </Select>
                    </FormControl>

                    <TextField
                      label='vCluster'
                      name='vClusterName'
                      onChange={handleSetvClusterName}
                    />
                  </Box>
                  <Box alignItems='center' paddingTop='3.5em'>
                    <Button
                      variant='contained'
                      color='primary'
                      type='submit'
                      size='small'
                    >
                      Create
                    </Button>
                  </Box>
                  <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    maxWidth='12vw'
                    minWidth='12vw'
                    paddingTop='2em'
                  >
                    <span>{inProgress}</span>
                    <br />
                    {currentProcess}
                  </Box>
                </Box>
              </Box>
            </form>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default CreateCluster;
