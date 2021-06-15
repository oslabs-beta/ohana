import React from 'react';

const SpacesPage = () => {


  const formSubmit = (e) => {
    e.preventDefault();
    setRedirect(true);
  }

  return (
    <div id='spaces'>
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

export default SpacesPage;