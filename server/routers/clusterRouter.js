const express = require('express');
const router = express.Router();
const clusterController = require('../controllers/clusterController');

router.post('/create',
  clusterController.addCluster,
  clusterController.createCluster,
  (req, res) => {
    res.status(200).json('Successfully created cluster');
  }
)

router.get('/vcluster', 
  clusterController.fetchClusters, 
  (req, res) => {
  res.status(200).json(res.locals.kyung)
})
module.exports = router;