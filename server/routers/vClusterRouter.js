const express = require('express');
const router = express.Router();
const vClusterController = require('../controllers/vClusterController');

router.post('/create',
  // vClusterController.addVCluster,
  vClusterController.createVCluster,
  (req, res) => {
    const { vClusterName } = res.locals;
    res.status(200).json(`Successfully created ${vClusterName} on cluster-1!`);
  }
)

router.get('/',
  vClusterController.fetchVClusters,
  (req, res) => {
    res.status(200).json(res.locals.kyung)
  });

router.get('/fetchnamespaces', 
  vClusterController.fetchNamespaces, 
  (req, res) => {
    res.status(200).json(res.locals.clusternamespaces)
  });

router.get('/fetchclusters', 
  vClusterController.fetchClusters, 
  (req, res) => {
    res.status(200).json(res.locals.clusterclusters)
  });

module.exports = router;