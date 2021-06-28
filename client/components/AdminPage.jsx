import React, { useContext, useEffect } from 'react';
import TeamsDisplay from './TeamsDisplay.jsx'
import CreateTeam from './CreateTeam.jsx';
import CreateUser from './CreateUser.jsx';
import { AppContext } from './AppContext.js';

const AdminPage = () => {
  const { setIsLoggedIn, setIsAdmin, setClusterNames } = useContext(AppContext);
  useEffect(() => {
    fetch('/cookies')
      .then(res => res.json())
      .then(data => {
        setIsLoggedIn(data.isLoggedIn);
        setIsAdmin(data.isAdmin);
      })
    fetch('/clusters/list')
      .then((res) => res.json())
      .then(data => {
        let names = [];
        data.forEach(element => names.push(element.name))
        setClusterNames(names)
      })
  }, [])
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