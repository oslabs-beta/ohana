import React from 'react';
import CreateCluster from '../components/CreateCluster.jsx';
import VClustersList from '../components/VClustersList.jsx';

const ClusterContainer = () => {




  return (
    <div id='vClusterContainer'>
    <h1>this is vCluster Container</h1>
    <CreateCluster />
    <VClustersList />
    </div>
  )
}

export default ClusterContainer;