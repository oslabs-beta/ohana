import React, { useState, useEffect } from 'react';
import { Button, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@material-ui/core';

// required styling for material-ui for table
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const VClustersList = () => {
  const [vClusters, setvClusters] = useState([])

  const handleClick = (e) => {

    e.preventDefault();

    fetch('/vclusters')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setvClusters(data);
      })
  }

  // helper function to destructure each object in the array
  function createData(id, team_id, namespace, namespace_id) {
    return { id, team_id, namespace, namespace_id };
  }

  // iterate over array to destructure each object and assign to index in new rows array
  const rows = vClusters.map((cluster) => {
    return createData(cluster._id, cluster.team_id, cluster.name, cluster.namespace_id);
  })

  const classes = useStyles();

  return (
    <div id='vClustersList'>
      {/* <Box> */}
      <h3>Current Virtual Clusters</h3>
      <Button id="get-vclusters" onClick={handleClick} variant="outlined">Get VClusters</Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>vCluster ID</TableCell>
              <TableCell align="right">Team ID</TableCell>
              <TableCell align="right">Namespace</TableCell>
              <TableCell align="right">Namespace ID</TableCell>
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
                <TableCell align="right">{row.namespace_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* </Box> */}
    </div>
  )
}

export default VClustersList;