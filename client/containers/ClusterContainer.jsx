import React, {useContext, useEffect } from 'react';
import CreateCluster from '../components/CreateCluster.jsx';
import VClustersList from '../components/VClustersList.jsx';
import { AppContext } from '../components/AppContext.js';

const ClusterContainer = () => {
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
    <div id='vClusterContainer'>
      <CreateCluster />
      <VClustersList />
    </div>
  )
}

export default ClusterContainer;