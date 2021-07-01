import React, { useContext, useEffect } from 'react';
import TeamsDisplay from './TeamsDisplay.jsx'
import CreateTeam from './CreateTeam.jsx';
import CreateUser from './CreateUser.jsx';
import { AppContext } from './AppContext.js';

const AdminPage = () => {
  return (
    <div id='adminpage'>
      <CreateTeam />
      <TeamsDisplay />
      <CreateUser />
    </div>
  )
}

// test commit

export default AdminPage;