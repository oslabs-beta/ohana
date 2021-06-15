import React from 'react';
import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';

const vClustersList = () => {

  const formSubmit = (e) => {
    e.preventDefault();
    setRedirect(true);
  }

  return (
    <div id='vClustersList'>
      <h3>Current Virtual Clusters</h3>

      <div id='spaces'>
        <form method="GET" action="/vcluster">
          <TextField label='vcluster' name='vcluster'>Search Virtual Cluster</TextField>
          <Button type="submit">List Virtual Cluster</Button>
        </form>

        <Button onClick={formSubmit}></Button>
      </div>
    </div>
  )
}


export default vClustersList;