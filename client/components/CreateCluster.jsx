import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core'
import {gcloud, kubectl, vCluster, runTerminalCommand} from '../../server/terminalCommands'
//import terminal commands

const CreateCluster = () => {

  const [clusterName, setClusterName] = useState('');
  const [hostNamespace, setHostNamespace] = useState('');

  const handleClusterNameChange = (e) => {
    setClusterName(e.target.value)
  }

  const handleHostNamespaceChange = (e) => {
    setHostNamespace(e.target.value);
  }

  const formSubmit = (e) => {
    e.preventDefault();
    runTerminalCommand(vCluster.create);
  }

  return (
    <div id='create-clusters'>
    <h1>Create a vCluster</h1>
    <div id='clusters'>
      <form>
        <TextField label='Clusters' name='clusters' onChange={handleClusterNameChange} />
        <TextField label='Host' name='host' onChange={handleHostNamespaceChange} />
        {/* need to add in text fields for cluster creation */}
        <Button type="submit" onClick={formSubmit}>Create</Button>
      </form>
    </div>
  </div>
)
}
export default CreateCluster;