import React, { useState } from 'react';
import { Button, TextField, Select, FormControlLabel, Checkbox } from '@material-ui/core'
import { kubectl, vCluster, runTerminalCommand } from '../../server/terminalCommands.js'

const CreateSpace = () => {
  const [hostNamespace, setHostNamespace] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
    // import terminal commands
    runTerminalCommand(kubectl.createNamespace);
  }

  return (
    <div id='create-spaces'>
      <h1>Create a namespace</h1>

      <div id='spaces'>
        <form method="POST" action="/spaces/create">
          <TextField label='Create namespace' name='namespace' onChange={setHostNamespace}/>
          {/* need to add in additional text fields for namespace creation */}
          <Button type="submit" onClick={formSubmit}>Create</Button>
        </form>
      </div>
    </div>
  )
}

export default CreateSpace;
