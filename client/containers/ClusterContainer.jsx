import React from 'react';
import CreateCluster from '../components/CreateCluster.jsx';
import VClustersList from '../components/VClustersList.jsx';

const ClusterContainer = () => {




  return (
    <div id='vClusterContainer'>
    <CreateCluster />
    <VClustersList />
    </div>
  )
}

export default ClusterContainer;