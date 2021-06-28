import React, { useState, useContext } from 'react';
import { TextField, Button, CircularProgress, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { AppContext } from './AppContext';

const CreateCluster = () => {

  const [clusterName, setClusterName] = useState('');
  const [vClusterName, setvClusterName] = useState('');
  const [hostNamespace, setHostNamespace] = useState('');
  const [inProgress, setInProgress] = useState('');
  const [currentProcess, setCurrentProcess] = useState('');
  const [availableNamespaces, setAvailableNamespaces] = useState([]);
  const { clusterNames } = useContext(AppContext)

  const clusterNamesDropdown = [];
  clusterNames.forEach(name => clusterNamesDropdown.push(<MenuItem value={name}>{name}</MenuItem>))

//   useEffect(() => {
//     fetch('vclusters/fetchclusters')
//     .then(res => {
//       console.log('fetchclusters', res)
//       res.json()
//     .then(data => {
//       console.log('what is in my fetch request 1', data)
//       const availableClusters = data.map(element => element.name)
//       setAvailableClusters(availableClusters);
//     })
//   })
//   .catch(err => console.log(err))
// }, [])

//   useEffect(() => {
//     fetch('vclusters/fetchnamespaces')
//     .then(res => {
//       console.log('fetchnamespaces', res)
//       res.json()
//     .then(data => {
//       console.log('what is in my fetch request 2', data)
//       const availableNamespaces = data.map(element => element.name)
//       setAvailableNamespaces(availableNamespaces)
//     })
//   })
//   .catch(err => console.log(err))
// }, [])

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
  // const clusterList = availableClusters.map(element => <MenuItem value={`${element}`}>{element}</MenuItem>)
  const namespaceList = availableNamespaces.map(element => <MenuItem value={`${element}`}>{element}</MenuItem>)

  return (
    <div id='create-clusters'>
      <h1>Create a vCluster</h1>
      <div id='clusters'>
        <form onSubmit={formSubmit}>
          {/* <TextField label='Cluster' name='clusterName' onChange={handleClusterNameChange} color="primary" /> */}
          {/* <FormControl>
          <InputLabel id="inputLabels">Select Cluster</InputLabel>
            <Select label='Select Cluster' onChange={handleClusterNameChange}>
            {clusterList}
            </Select>
          </FormControl> */}
          <FormControl>
            <InputLabel id="inputLabels">Select Cluster</InputLabel>
            <TextField label='Cluster' name='clusterName' onChange={handleClusterNameChange} color="primary" />
            <Select label='Select Cluster' onChange={handleClusterNameChange}>
            {clusterNamesDropdown}
            </Select>
          </FormControl>
          <TextField label='vCluster' name='vClusterName' onChange={handleSetvClusterName} />
          {/* <TextField label='Host Namespace' name='hostNamespace' onChange={handleHostNamespaceChange} /> */}
          <FormControl>
          <InputLabel id="inputLabels">Select Namespace</InputLabel>
            <Select label='Select Namespace' onChange={handleHostNamespaceChange}>
            {namespaceList}
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" type="submit">Create</Button>
          <span>{currentProcess}</span><span>{inProgress}</span>
        </form>
      </div>
    </div>
  )
}
export default CreateCluster;
