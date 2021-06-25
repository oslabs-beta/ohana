import React, { useState } from 'react';
import { TextField, Button, CircularProgress, Select, MenuItem } from '@material-ui/core'

const CreateCluster = () => {

  const [clusterName, setClusterName] = useState('');
  const [vClusterName, setvClusterName] = useState('');
  const [hostNamespace, setHostNamespace] = useState('');
  const [inProgress, setInProgress] = useState('');
  const [currentProcess, setCurrentProcess] = useState('');
  const [availableClusters, setAvailableClusters] = useState([]);
  const [availableNamespaces, setAvailableNamespaces] = useState([]);

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

  let namespaceArray = ['kiosk', 'default']
  // let namespaceOptions = [];
  let options = namespaceArray.map(element => <MenuItem value={`${element}`}>{element}</MenuItem>)
  console.log(options)  
  return (
    <div id='create-clusters'>
      <h1>Create a vCluster</h1>
      <div id='clusters'>
        <form onSubmit={formSubmit}>
          {/* <TextField label='Cluster' name='clusterName' onChange={handleClusterNameChange} color="primary" /> */}
          <Select label='Select Cluster' onChange={handleClusterNameChange}>
            <MenuItem value="cluster-1">cluster-1</MenuItem>
          </Select>
          <TextField label='vCluster' name='vClusterName' onChange={handleSetvClusterName} />
          {/* <TextField label='Host Namespace' name='hostNamespace' onChange={handleHostNamespaceChange} /> */}
          <Select label='Select Namespace' onChange={handleHostNamespaceChange}>
            {options}
          </Select>
          <Button variant="contained" color="primary" type="submit">Create</Button>
          <span>{currentProcess}</span><span>{inProgress}</span>
        </form>
      </div>
    </div>
  )
}
export default CreateCluster;
