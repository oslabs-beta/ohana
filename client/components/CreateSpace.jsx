import React, { useState, useContext } from "react";
import {
  TextField,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@material-ui/core";
import { AppContext } from "./AppContext";

const CreateSpace = () => {
  const [hostCluster, setHostClusterName] = useState("");
  const [createHostNamespace, setCreateHostNamespace] = useState("");
  const [deployHostNamespace, setDeployHostNamespace] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [deploymentName, setDeploymentName] = useState("");
  const [externalIp, setExternalIp] = useState("");
  const [clickMe, setClickMe] = useState("");
  const { clusterNames, namespaceNames } = useContext(AppContext);

  const clusterNamesDropdown = [];
  clusterNames.forEach((name) =>
    clusterNamesDropdown.push(<MenuItem value={name}>{name}</MenuItem>)
  );

  const namespaceDropdown = [];
  namespaceNames.forEach((name) =>
    namespaceDropdown.push(<MenuItem value={name}>{name}</MenuItem>)
  );

  const handleSetHostClusterName = (e) => {
    setHostClusterName(e.target.value);
  };

  const handleSetCreateHostNamespace = (e) => {
    setCreateHostNamespace(e.target.value);
    setDeployHostNamespace(e.target.value);
  };

  const handleSetImageFile = (e) => {
    setImageFile(e.target.value);
  };

  const handleSetDeploymentName = (e) => {
    setDeploymentName(e.target.value);
  };

  const formSubmit = (e) => {
    const data = { hostCluster, createHostNamespace };
    e.preventDefault();
    fetch("/spaces/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setExternalIp(data);
      })
      .catch((err) => console.log(err));
  };

  const deployButton = (e) => {
    const data = { deploymentName, deployHostNamespace, imageFile };
    e.preventDefault();
    fetch("/spaces/deploy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const getIp = (e) => {
    e.preventDefault();
    const data = { deploymentName, deployHostNamespace };
    fetch("/spaces/getip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        const ip = data.trim();
        setExternalIp(ip);
      });
    setClickMe(`Click here to visit ${deploymentName}`);
  };

  return (
    <div id='create-spaces'>
      {/* <h1>Create a namespace and deploy</h1> */}

      <div id='spaces'>
        <form method='POST' action='/spaces/create'>
          <Box
            display='flex'
            flexDirection='column'
            // border="1px solid blue"
            minHeight='30vh'
          >
            <Box
              display='flex'
              justifyContent='flexStart'
              // border="1px solid green"
              width='50vw'
              flexDirection='column'
            >
              <Box>
                <h2>Create a Namespace</h2>
              </Box>
            </Box>

            <Box
              display='flex'
              flexDirection='column'
              minHeight='23vh'
              justifyContent='space-between'
            >
              <FormControl>
                <InputLabel id='inputLabels'>Select Cluster</InputLabel>
                <Select
                  label='Select Cluster'
                  name='hostCluster'
                  onChange={handleSetHostClusterName}
                >
                  {clusterNamesDropdown}
                </Select>
              </FormControl>

              <TextField
                label='New Namespace'
                name='hostNamespace'
                onChange={handleSetCreateHostNamespace}
              />
              <Button
                type='submit'
                variant='contained'
                color='primary'
                onSubmit={formSubmit}
              >
                Create
              </Button>
            </Box>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default CreateSpace;
