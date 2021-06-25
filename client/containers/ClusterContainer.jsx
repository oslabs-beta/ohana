import React from 'react';
import CreateCluster from '../components/CreateCluster.jsx';
import VClustersList from '../components/VClustersList.jsx';

const ClusterContainer = () => {
  
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
    <div id='vClusterContainer'>
      <CreateCluster />
      <VClustersList />
    </div>
  )
}

export default ClusterContainer;
