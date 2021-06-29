import React, { useState, useEffect, useContext } from 'react';
import { TextField, Button, CircularProgress, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { AppContext } from './AppContext';

const CreateSpace = () => {

  const [hostCluster, setHostClusterName] = useState('');
  const [createHostNamespace, setCreateHostNamespace] = useState('');
  const [deployHostNamespace, setDeployHostNamespace] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [deploymentName, setDeploymentName] = useState('');
  const [externalIp, setExternalIp] = useState('');
  const [clickMe, setClickMe] = useState('');
  const { clusterNames, namespaceNames } = useContext(AppContext)

  const clusterNamesDropdown = [];
  clusterNames.forEach(name => clusterNamesDropdown.push(<MenuItem value={name}>{name}</MenuItem>))

  const namespaceDropdown = [];
  namespaceNames.forEach(name => namespaceDropdown.push(<MenuItem value={name}>{name}</MenuItem>))

  const handleSetHostClusterName = (e) => {
    setHostClusterName(e.target.value);
  }

  const handleSetCreateHostNamespace = (e) => {
    setCreateHostNamespace(e.target.value)
    setDeployHostNamespace(e.target.value)
  }

  const handleSetImageFile = (e) => {
    setImageFile(e.target.value);
  }

  const handleSetDeploymentName = (e) => {
    setDeploymentName(e.target.value);
  }

  const formSubmit = (e) => {
    const data = { hostCluster, createHostNamespace };
    e.preventDefault();
    fetch('/spaces/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        setExternalIp(data);
      })
      .catch(err => console.log(err))
  }

  const deployButton = (e) => {
    const data = { deploymentName, deployHostNamespace, imageFile };
    e.preventDefault();
    fetch('/spaces/deploy', {
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

  const getIp = (e) => {
    e.preventDefault();
    const data = { deploymentName, deployHostNamespace }
    fetch('/spaces/getip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        const array = data.split(' ')
        array.forEach(element => {
          if (element.slice(0, 3) === '34.') {
            setExternalIp(element);
          };
        })
        setClickMe(`Click here to visit ${deploymentName}`);
      })
  }

  return (
    <div id='create-spaces'>
      <h1>Create a namespace and deploy</h1>

      <div id='spaces'>
        <form method="POST" action="/spaces/create">
          <h2>Create a Namespace</h2>

          <FormControl>
            <InputLabel id="inputLabels">Select Cluster</InputLabel>
            <Select label='Select Cluster' name='hostCluster' onChange={handleSetHostClusterName}>
              {clusterNamesDropdown}
            </Select>
          </FormControl>

          <TextField label='Host Namespace' name='hostNamespace' onChange={handleSetCreateHostNamespace} />
          <Button type="submit" variant="contained" color="primary" onSubmit={formSubmit}>Create</Button>
        </form>

        <form>
          <h2>Deploy an Image</h2>
          <TextField label='Deployment Name' name='deploymentName' onChange={handleSetDeploymentName} />

          <FormControl>
            <InputLabel id="inputLabels">Select Namespace</InputLabel>
            <Select label='Deploy Host Namespace' name='hostNamespace' onChange={handleSetCreateHostNamespace}>
              {namespaceDropdown}
            </Select>
          </FormControl>

          <TextField label='Image File' name='ImageFile' onChange={handleSetImageFile} />
          <Button type="submit" variant="contained" color="primary" onClick={deployButton}>Deploy</Button>
        </form>

        <FormControl>
          <InputLabel id="inputLabels">Select Namespace</InputLabel>
          <Select label='Deploy Host Namespace' name='hostNamespace' onChange={handleSetCreateHostNamespace}>
            {namespaceDropdown}
          </Select>
        </FormControl>

        <TextField label='Deployment Name' name='deploymentName' onChange={handleSetDeploymentName} />
        <Button type="submit" variant="contained" color="secondary" onClick={getIp}>Get External IP</Button>
        <a href={`http://${externalIp}`}>{clickMe}</a>
      </div>
    </div>
  )
};

export default CreateSpace;
