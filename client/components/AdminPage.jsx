import React from 'react';
import TeamsDisplay from './TeamsDisplay.jsx'
import CreateTeam from './CreateTeam.jsx';
import CreateUser from './CreateUser.jsx';




const AdminPage = () => {


  return (
    <div id='adminpage'>
      <h1>here lies the admin page</h1>
      <CreateTeam />
      <TeamsDisplay />
      <CreateUser />
    </div>
  )


}

export default AdminPage;