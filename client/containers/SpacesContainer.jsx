import React, { useEffect, useContext, useState } from 'react';
import CreateSpace from '../components/CreateSpace.jsx';
import SpacesList from '../components/SpacesList.jsx';
import { AppContext } from '../components/AppContext.js';

const SpacesContainer = () => {
  const { setIsLoggedIn, setIsAdmin, setClusterNames, setNamespaces, setTeamId } = useContext(AppContext);
  useEffect(() => {
    fetch('/cookies')
      .then(res => res.json())
      .then(data => {
        setIsLoggedIn(data.isLoggedIn);
        setIsAdmin(data.isAdmin);
        setTeamId(data.teamId);
      })
    fetch('/clusters/list')
      .then((res) => res.json())
      .then(data => {
        let names = [];
        data.forEach(element => names.push(element.name))
        setClusterNames(names)
      })
    fetch('/spaces/fetchspaces')
      .then((res) => res.json())
      .then(data => {
        let namespaces = [];
        data.forEach(element => namespaces.push(element.name))
        setNamespaces(namespaces)
    })
  }, [])
  return (
    <div id='Spaces-Container'>
      <CreateSpace />
      <SpacesList />
    </div>
  )
}

export default SpacesContainer;