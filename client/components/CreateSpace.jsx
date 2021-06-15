import React from 'react';

<<<<<<< HEAD
const CreateSpace = () => {
=======
const SpacesPage = () => {
>>>>>>> 5843a93bd1cef8fd9eaf4951b299d53f8b66cdb9


  const formSubmit = (e) => {
    e.preventDefault();
    setRedirect(true);
  }

  return (
<<<<<<< HEAD
    <div id='createspace'>
=======
    <div id='spaces'>
>>>>>>> 5843a93bd1cef8fd9eaf4951b299d53f8b66cdb9
      <h1>Create a namespace</h1>

      <div id='spaces'>
        <form method="POST" action="/spaces">
          <TextField label='namespace' name='namespace'>Create namespace</TextField>
          <Button type="submit">Create</Button>
        </form>

        <Button onClick={formSubmit}></Button>
      </div>
<<<<<<< HEAD
      
=======

>>>>>>> 5843a93bd1cef8fd9eaf4951b299d53f8b66cdb9
    </div>
  )
}

<<<<<<< HEAD
export default CreateSpace;

// Need Create Spaces
// Need Create vClusters
// Need Space Info
// Need vCluster Info
=======
export default SpacesPage;
>>>>>>> 5843a93bd1cef8fd9eaf4951b299d53f8b66cdb9
