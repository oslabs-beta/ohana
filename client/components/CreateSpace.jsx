import React from 'react';
//import terminal commands

const CreateCluster = () => {


  return (
    <div id='create-clusters'>
    <h1>Create a namespace</h1>

    <div id='clusters'>
      <form method="POST" action="/clusters/create">
        <TextField label='clusters' name='clusters'>Create clusters</TextField>
        {/* need to add in text fields for cluster creation */}
        <Button type="submit">Create</Button>
      </form>

      <Button onClick={formSubmit}></Button>
    </div>
  </div>
)
}

export default CreateCluster;