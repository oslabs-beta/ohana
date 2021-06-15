import React from 'react';
import CreateCluster from '../components/CreateCluster.jsx';
import ClustersList from '../components/vClustersList.jsx';

const ClusterContainer = () => {




  return (
    <div id='vClusterContainer'>
    <h1>this is vCluster Container</h1>
    <CreateCluster />
    <ClustersList />
    </div>
  )
}

export default ClusterContainer;