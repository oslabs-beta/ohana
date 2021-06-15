import React from 'react';

const CreateSpace = () => {


  const formSubmit = (e) => {
    e.preventDefault();
    setRedirect(true);
  }

  return (
    <div id='createspace'>
      <h1>Create a namespace</h1>

      <div id='spaces'>
        <form method="POST" action="/spaces">
          <TextField label='namespace' name='namespace'>Create namespace</TextField>
          <Button type="submit">Create</Button>
        </form>

        <Button onClick={formSubmit}></Button>
      </div>
      
    </div>
  )
}

export default CreateSpace;

// Need Create Spaces
// Need Create vClusters
// Need Space Info
// Need vCluster Info