import React from 'react';
import { Button, TextField, Select, FormControlLabel, Checkbox } from '@material-ui/core'
import { kubectl, vCluster, runTerminalCommand } from '../../server/terminalCommands.js'
//import terminal commands

const CreateCluster = () => {

  const clusterName = () => {
  const [clusterName, setClusterName] = useState(false)
  const [hostNamespace, setHostNamespace] = useState(false)

  return (
    <div id='create-clusters'>
    <h1>Create a vCluster</h1>

    <div id='clusters'>
      <form method="POST" action="/clusters/create">
        <TextField label='clusters' name='clusters' onChange={handleClusterNameChange} value={clusterName} >Create clusters</TextField>
        <TextField label='host-namespace' name='hostns' onChange={handleSetHostNamespace} >Set namespace</TextField>
        {/* need to add in text fields for cluster creation */}
        <Button type="submit">Create</Button>
      </form>

      <Button onClick={formSubmit}></Button>
    </div>
  </div>
)
}

export default CreateCluster;
