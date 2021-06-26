import React, { useState } from 'react';
import { Button, TextField, Select } from '@material-ui/core'

const CreateSpace = () => {
  const [hostNamespace, setHostNamespace] = useState('');
  // const [team_id, setTeamId] = useState('');
  const [teamName, setTeamName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [deploymentName, setDeploymentName] = useState('');
  const [clusterName, setClusterName] = useState('');
  const [externalIp, setExternalIp] = useState('');
  const [clickMe, setClickMe] = useState('');

  const handleSetHostNamespace = (e) => {
    setHostNamespace(e.target.value)
  }

  const handleSetTeamName = (e) => {
    setTeamName(e.target.value);
  }

  const handleSetProject = (e) => {
    setProjectName(e.target.value);
  }

  const handleSetImageFile = (e) => {
    setImageFile(e.target.value);
  }

  const handleSetDeploymentName = (e) => {
    setDeploymentName(e.target.value);
  }

  const handleSetClusterName = (e) => {
    setClusterName(e.target.value);
  }

  const formSubmit = (e) => {
    // const data = { clusterName, hostNamespace, team_id, projectName };
    const data = { clusterName, hostNamespace };
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
    const data = { deploymentName, hostNamespace, imageFile };
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
    const data = { deploymentName, hostNamespace }
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
        {/* <form method="POST" action="/spaces/create">
          <h2>Create a Namespace</h2>
          <TextField label='Host Cluster' name='hostCluster' onChange={handleSetClusterName} />
          <TextField label='Host Namespace' name='hostNamespace' onChange={handleSetHostNamespace} />
          <TextField label='Team ID' name='team_id' onChange={handleSetTeamId} />
          <TextField label='Project Name' name='projectName' onChange={handleSetProject} />
          <Button type="submit" variant="contained" color="primary" onClick={formSubmit}>Create</Button>
        </form> */}

        <form method="POST" action="/spaces/create">
          <h2>Create a Namespace</h2>
          <TextField label='Host Cluster' name='hostCluster' onChange={handleSetClusterName} />
          <TextField label='Host Namespace' name='hostNamespace' onChange={handleSetHostNamespace} />
          {/* <TextField label='Team Name' name='teamName' onChange={handleSetTeamName} /> */}

          <Button type="submit" variant="contained" color="primary" onClick={formSubmit}>Create</Button>
        </form>

        <form>
          <h2>Deploy an Image</h2>

          <TextField label='Deployment Name' name='deploymentName' onChange={handleSetDeploymentName} />
          <TextField label='Host Namespace' name='hostNamespace' onChange={handleSetHostNamespace} />
          <TextField label='Config File' name='ImageFile' onChange={handleSetImageFile} />
          <Button type="submit" variant="contained" color="primary" onClick={deployButton}>Deploy</Button>
        </form>
        <TextField label='Host Namespace' name='hostNamespace' onChange={handleSetHostNamespace} />
        <TextField label='Get Deployment' name='deploymentName' onChange={handleSetDeploymentName} />
        <Button type="submit" variant="contained" color="secondary" onClick={getIp}>Get External IP</Button>
        <a href={`http://${externalIp}`}>{clickMe}</a>
      </div>
    </div>
  )
};

export default CreateSpace;
