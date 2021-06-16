const express = require('express');
const router = express.Router();

const clusterController = require('../controllers/clusterController');

router.post('/create',
  clusterController.createCluster,
  (req, res) => {
    res.status(200).json('Successfully created cluster');
  }
)

module.exports = router;