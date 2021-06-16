import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core'
<<<<<<< HEAD
=======
// import {gcloud, kubectl, vCluster, runTerminalCommand} from '../../server/terminalCommands'
>>>>>>> 17973a421f580fec5662c147822791bd09027559
//import terminal commands

const CreateCluster = () => {

<<<<<<< HEAD
  const [clusterName, setClusterName] = useState('');
  const [vClusterName, setvClusterName] = useState('');
=======
  const [vClusterName, setClusterName] = useState('');
>>>>>>> 17973a421f580fec5662c147822791bd09027559
  const [hostNamespace, setHostNamespace] = useState('');

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
<<<<<<< HEAD
    const data = { clusterName, vClusterName, hostNamespace };
    e.preventDefault();
    fetch('/clusters/rtcCreate', {
=======
    console.log(vClusterName);
    console.log(hostNamespace);
    const data = { vClusterName, hostNamespace}
    e.preventDefault();
    fetch('/clusters/create', {
>>>>>>> 17973a421f580fec5662c147822791bd09027559
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
<<<<<<< HEAD
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
=======
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
>>>>>>> 17973a421f580fec5662c147822791bd09027559
  }

  return (
    <div id='create-clusters'>
    <h1>Create a vCluster</h1>
    <div id='clusters'>
      <form onSubmit={formSubmit}>
<<<<<<< HEAD
        <TextField label='Cluster' name='clusterName' onChange={handleClusterNameChange} />
        <TextField label='vCluster' name='vClusterName' onChange={handleSetvClusterName} />
=======
        <TextField label='Clusters' name='vClusterName' onChange={handleClusterNameChange} />
>>>>>>> 17973a421f580fec5662c147822791bd09027559
        <TextField label='Host' name='hostNamespace' onChange={handleHostNamespaceChange} />
        {/* need to add in text fields for cluster creation */}
        <Button type="submit">Create</Button>
      </form>
    </div>
  </div>
)
}
export default CreateCluster;
