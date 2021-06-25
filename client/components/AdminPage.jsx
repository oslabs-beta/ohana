import React, { useContext, useEffect } from 'react';
import TeamsDisplay from './TeamsDisplay.jsx'
import CreateTeam from './CreateTeam.jsx';
import CreateUser from './CreateUser.jsx';
import { AppContext } from './AppContext.js';

const AdminPage = () => {
  const { setIsLoggedIn, setIsAdmin } = useContext(AppContext);
  useEffect(() => {
    fetch('/cookies')
      .then(res => res.json())
      .then(data => {
        setIsLoggedIn(data.isLoggedIn);
        setIsAdmin(data.isAdmin);
      })
  })
  return (
    <div id='adminpage'>
      <CreateTeam />
      <TeamsDisplay />
      <CreateUser />
    </div>
  )
}

export default AdminPage;