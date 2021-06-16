import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core'
//import terminal commands

const CreateCluster = () => {

  const [clusterName, setClusterName] = useState('');
  const [vClusterName, setvClusterName] = useState('');
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
    const data = { clusterName, vClusterName, hostNamespace };
    e.preventDefault();
    fetch('/clusters/rtcCreate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  return (
    <div id='create-clusters'>
    <h1>Create a vCluster</h1>
    <div id='clusters'>
      <form onSubmit={formSubmit}>
        <TextField label='Cluster' name='clusterName' onChange={handleClusterNameChange} />
        <TextField label='vCluster' name='vClusterName' onChange={handleSetvClusterName} />
        <TextField label='Host' name='hostNamespace' onChange={handleHostNamespaceChange} />
        {/* need to add in text fields for cluster creation */}
        <Button type="submit">Create</Button>
      </form>
    </div>
  </div>
)
}
export default CreateCluster;
