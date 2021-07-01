import React, { useState, useContext } from 'react';
import { TextField, Button, CircularProgress, FormControl, InputLabel, Select, MenuItem, Box } from '@material-ui/core'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { AppContext } from './AppContext';


const deployComp = () => {

  const [hostCluster, setHostClusterName] = useState('');
  const [createHostNamespace, setCreateHostNamespace] = useState('');
  const [deployHostNamespace, setDeployHostNamespace] = useState ('');
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
          if (element.slice(0, 3) === '35.') {
            setExternalIp(element);
          };
        })
        setClickMe(`Click here to visit ${deploymentName}`);
      })
  }




  return (
    <div id="deployComp">
      <form>
        <Box
        border="1px solid #d5d5d5"
        padding="1em"
        borderRadius="20px"
        minHeight="17vh"
        display="flex"
        flexDirection="column"
        >
          <Box
          // border="1px solid blue"
          >
          <h2>Deploy an Image</h2>
          </Box>
          <TextField label='Deployment Name' name='deploymentName' onChange={handleSetDeploymentName} />

          <FormControl>
            <InputLabel id="inputLabels">Select Namespace</InputLabel>
            <Select label='Deploy Host Namespace' name='hostNamespace' onChange={handleSetCreateHostNamespace}>
            {namespaceDropdown}
            </Select>
          </FormControl>

          <TextField label='Image File' name='ImageFile' onChange={handleSetImageFile} />
          <br/>
          <Button type="submit" variant="contained" color="primary" onClick={deployButton}>Deploy</Button>
          </Box>
        </form> 
        <br/>
        <Box
        border="1px solid #d5d5d5"
        padding="1em"
        borderRadius="20px"
        minHeight="15vh"
        display="flex"
        flexDirection="column"
        justifyContent="flexStart"
        >
          <Box
          display="flex"
          flexDirection="row"
          // border="1px solid blue"
          >
            <Box>
          <h2>Visit your Container</h2>
          </Box>
          <Box>
          <a href={`http://${externalIp}`}>{clickMe}</a>
          </Box>
          </Box>
          <FormControl>
          <InputLabel id="inputLabels">Select Namespace</InputLabel>
            <Select label='Deploy Host Namespace' name='hostNamespace' onChange={handleSetCreateHostNamespace}>
            {namespaceDropdown}
            </Select>
          </FormControl>

         <TextField label='Deployment Name' name='deploymentName' onChange={handleSetDeploymentName} />
        <Button type="submit" variant="contained" color="secondary" onClick={getIp}>Get External IP</Button>
        
        </Box>


    </div>



  )
}


export default deployComp;