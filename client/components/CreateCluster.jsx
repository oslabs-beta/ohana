import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core'
// import {gcloud, kubectl, vCluster, runTerminalCommand} from '../../server/terminalCommands'
//import terminal commands

const CreateCluster = () => {

  const [vClusterName, setClusterName] = useState('');
  const [hostNamespace, setHostNamespace] = useState('');

  const handleClusterNameChange = (e) => {
    setClusterName(e.target.value)
  }

  const handleHostNamespaceChange = (e) => {
    setHostNamespace(e.target.value);
  }

  const formSubmit = (e) => {
    console.log(vClusterName);
    console.log(hostNamespace);
    const data = { vClusterName, hostNamespace}
    e.preventDefault();
    fetch('/clusters/create', {
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
        <TextField label='Clusters' name='vClusterName' onChange={handleClusterNameChange} />
        <TextField label='Host' name='hostNamespace' onChange={handleHostNamespaceChange} />
        {/* need to add in text fields for cluster creation */}
        <Button type="submit">Create</Button>
      </form>
    </div>
  </div>
)
}
export default CreateCluster;
