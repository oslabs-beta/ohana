import React, { useState, useEffect } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const VClustersList = () => {
  const [vClusters, setvClusters] = useState([])
  
// fetch vclusters logic
  const handleClick = (e) => {

    e.preventDefault();

    fetch('/clusters/vcluster')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setvClusters(data);
      })
  }

  // helper function to destructure each object in the array
  function createData(id, team_id, namespace, project) {
    return { id, team_id, namespace, project };
  }
  
  // iterate over array to destructure each object and assign to index in new rows array
  const rows = vClusters.map((cluster) => {
    return createData(cluster._id, cluster.team_id, cluster.namespace_id, cluster.project);
  })

  // some material ui shit idk
  const classes = useStyles();
  
  return (
    <div id='vClustersList'>
      <h3>Current Virtual Clusters</h3>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>vCluster ID</TableCell>
            <TableCell align="right">Team ID</TableCell>
            <TableCell align="right">Namespace</TableCell>
            <TableCell align="right">Project</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.team_id}</TableCell>
              <TableCell align="right">{row.namespace}</TableCell>
              <TableCell align="right">{row.project}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      <div id='spaces'>
        <Button onClick={handleClick}>Get VClusters</Button>
      </div>
    </div>
  )
}



export default VClustersList;