import React, { useState } from 'react';
import { TextField, Button, CircularProgress } from '@material-ui/core'

const CreateCluster = () => {

  const [clusterName, setClusterName] = useState('');
  const [vClusterName, setvClusterName] = useState('');
  const [hostNamespace, setHostNamespace] = useState('');
  const [inProgress, setInProgress] = useState('');
  const [currentProcess, setCurrentProcess] = useState('');

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
<<<<<<< HEAD
    <h1>Create a vCluster</h1>
    <div id='clusters'>
      <form onSubmit={formSubmit}>
        <TextField label='Cluster' name='clusterName' onChange={handleClusterNameChange} color="primary" />
        <TextField label='vCluster' name='vClusterName' onChange={handleSetvClusterName} />
        <TextField label='Host Namespace' name='hostNamespace' onChange={handleHostNamespaceChange} />
        <Button variant="contained" color="primary" type="submit">Create</Button>
        <span>{currentProcess}</span><span>{inProgress}</span>
      </form>
    </div>
=======
      <h1>Create a vCluster</h1>
      <div id='clusters'>
        <form onSubmit={formSubmit}>
          <TextField label='Cluster' name='clusterName' onChange={handleClusterNameChange} color="primary" />
          <TextField label='vCluster' name='vClusterName' onChange={handleSetvClusterName} />
          <TextField label='Host Namespace' name='hostNamespace' onChange={handleHostNamespaceChange} />
          <Button variant="contained" color="primary" type="submit">Create</Button>
          <span>{currentProcess}</span><span>{inProgress}</span>
        </form>
      </div>
>>>>>>> 024d21d4cd91b8d6e22f04c65da2dd6db11af187
    </div>
  )
}
export default CreateCluster;
