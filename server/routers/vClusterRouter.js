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
  (req, res) => res.status(200).json(res.locals.kyung))

module.exports = router;