import React, { useState, useEffect, useContext } from 'react';
import CreateCluster from '../components/CreateCluster.jsx';
import VClustersList from '../components/VClustersList.jsx';
import { AppContext } from '../components/AppContext'

const ClusterContainer = () => {
  const { setIsLoggedIn, setIsAdmin, setClusterNames, setNamespaces, setTeamId } = useContext(AppContext);
  useEffect(() => {
    fetch('/cookies')
      .then(res => res.json())
      .then(data => {
        console.log('cookie request data', data)
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
    <div id='vClusterContainer'>
      <CreateCluster />
      <VClustersList />
    </div>
  )
}

export default ClusterContainer;
