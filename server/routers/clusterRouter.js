const express = require('express');
const router = express.Router();
const clusterController = require('../controllers/clusterController');

router.post('/create',
<<<<<<< HEAD
clusterController.addCluster,
clusterController.createCluster,
(req, res) => {
    res.status(200).json('Successfully created cluster');
=======
  clusterController.addCluster,
  clusterController.createCluster,
  (req, res) => {
    const { vClusterName } = res.locals;
    res.status(200).json(`Successfully created ${vClusterName} on cluster-1!`);
>>>>>>> 4765fcce0db6b9d48597b3688aee1f50b5a7fb30
  }
)

router.get('/vcluster', 
clusterController.fetchClusters, 
(req, res) => {
  res.status(200).json(res.locals.kyung)
})
module.exports = router;