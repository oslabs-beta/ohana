const express = require('express');
const router = express.Router();
const clusterController = require('../controllers/clusterController.js');

router.post('/',
  clusterController.addCluster,
  // clusterController.createCluster,
  (req, res) => {
    const { vClusterName } = res.locals;
    return res.status(200).json(`Successfully created ${vClusterName} on cluster-1!`);
  }
)

router.get('/vclusters', 
  clusterController.fetchClusters, 
  (req, res) => res.status(200).json(res.locals.kyung));
  
router.get('/list', 
  clusterController.getClusters, 
  (req, res) => {
    const { clusterNames } = res.locals;
    console.log('clusterNames', clusterNames)
    return res.status(200).json(clusterNames)
})
module.exports = router;