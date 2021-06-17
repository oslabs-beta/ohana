import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';

const VClustersList = () => {

  const handleClick = (e) => {
    e.preventDefault();

    fetch('/vcluster')
      .then(response => response.json())
      .then(data => console.log(data))
  }



  return (
    <div id='vClustersList'>
      <h3>Current Virtual Clusters</h3>

      <div id='spaces'>
        <Button onClick={handleClick}>Get VClusters</Button>
      </div>
    </div>
  )
}



export default VClustersList;