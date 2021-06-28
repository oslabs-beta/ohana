import React, { useState, useEffect, useContext } from 'react';
import { TextField, Button, CircularProgress, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { AppContext } from './AppContext';

const CreateSpace = () => {
  const [hostCluster, setHostClusterName] = useState('');
  const [createHostNamespace, setCreateHostNamespace] = useState('');
  const [deployHostNamespace, setDeployHostNamespace] = useState ('');
  const [team_id, setTeamId] = useState('');
  const [projectName, setProjectName] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [deploymentName, setDeploymentName] = useState('');
  const [externalIp, setExternalIp] = useState('');
  const [clickMe, setClickMe] = useState('');
  // const [clusterArray, setClusterArray] = useState([]);

  const [deploymentArray, setDeploymentArray] = useState([]);
  const { clusterNames } = useContext(AppContext)

  const clusterNamesDropdown = [];
  clusterNames.forEach(name => clusterNamesDropdown.push(<MenuItem value={name}>{name}</MenuItem>))

//   useEffect(() => {
//     fetch('spaces/fetchspaces')
//     .then(res => {
//       console.log('spaces/spaces', res)
//       res.json()
//     .then(data => {
//       console.log('what is in my fetch request 1', data)
//       const deploymentArray = data.map(element => element.name)
//       setDeploymentArray(deploymentArray);
//     })
//   })
//   .catch(err => console.log(err))
// }, [])

//   useEffect(() => {
//     fetch('spaces/fetchclusters')
//     .then(res => {
//       console.log('spaces/clusters', res)
//       res.json()
//     .then(data => {
//       console.log('what is in my fetch request 2', data)
//       const clusterArray = data.map(element => element.name)
//       setClusterArray(clusterArray)
//     })
//   })
//   .catch(err => console.log(err))
// }, [])

  const handleSetHostClusterName = (e) => {
    setHostClusterName(e.target.value);
  }

  const handleSetCreateHostNamespace = (e) => {
    setCreateHostNamespace(e.target.value)
  }

  const handleSetDeployHostNamespace = (e) => {
    setDeployHostNamespace(e.target.value)
  }

  const handleSetTeamId = (e) => {
    setTeamId(e.target.value);
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

  const formSubmit = (e) => {
    const data = { hostCluster, createHostNamespace, team_id, projectName };
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

  const clusterList = clusterArray.map(element => <MenuItem value={`${element}`}>{element}</MenuItem>)
  const deploymentList = deploymentArray.map(element => <MenuItem value={`${element}`}>{element}</MenuItem>)

  return (
    <div id='create-spaces'>
      <h1>Create a namespace and deploy</h1>

      <div id='spaces'>
        <form method="POST" action="/spaces/create">
          <h2>Create a Namespace</h2>
          {/* <FormControl>
          <InputLabel id="inputLabels">Select Cluster</InputLabel>
            <Select label='Select Cluster' name='hostCluster' onChange={handleSetHostClusterName}>
            {clusterList}
            </Select>
          </FormControl> */}
          <TextField label='Host Namespace' name='hostNamespace' onChange={handleSetCreateHostNamespace} />
          {/* <TextField label='Host Cluster' name='hostCluster' onChange={handleSetClusterName} /> */}
          <Select>
            {clusterNamesDropdown}
          </Select>
          <TextField label='Host Namespace' name='hostNamespace' onChange={handleSetHostNamespace} />
          <TextField label='Team ID' name='team_id' onChange={handleSetTeamId} />
          <TextField label='Project Name' name='projectName' onChange={handleSetProject} />
          <Button type="submit" variant="contained" color="primary" onSubmit={formSubmit}>Create</Button>
        </form>
        <form>
          <h2>Deploy an Image</h2>
          <TextField label='Deployment Name' name='deploymentName' onChange={handleSetDeploymentName} />
          <FormControl>
            <InputLabel id="inputLabels">Select Namespace</InputLabel>
            <Select label='Deploy Host Namespace' name='hostNamespace' onChange={handleSetDeployHostNamespace}>
            {deploymentList}
            </Select>
          </FormControl>
          {/* <TextField label='Deploy Host Namespace' name='hostNamespace' onChange={handleSetDeployHostNamespace} /> */}
          <TextField label='Image File' name='ImageFile' onChange={handleSetImageFile} />
          <Button type="submit" variant="contained" color="primary" onClick={deployButton}>Deploy</Button>
        </form>
          <FormControl>
          <InputLabel id="inputLabels">Select Namespace</InputLabel>
            <Select label='Deploy Host Namespace' name='hostNamespace' onChange={handleSetDeployHostNamespace}>
            {deploymentList}
            </Select>
          </FormControl>
          {/* <TextField label='Deploy Host Namespace' name='hostNamespace' onChange={handleSetDeployHostNamespace} /> */}
        <TextField label='Deployment Name' name='deploymentName' onChange={handleSetDeploymentName} />
        <Button type="submit" variant="contained" color="secondary" onClick={getIp}>Get External IP</Button>
        <a href={`http://${externalIp}`}>{clickMe}</a>
      </div>
    </div>
  )
};

export default CreateSpace;
