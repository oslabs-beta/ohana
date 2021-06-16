const express = require('express');
const router = express.Router();

const clusterController = require('../controllers/clusterController');

router.get('/', clusterController.getClusters, (req, res) => {
  res.status(200).json('retrieved vclusters from database');
})

module.exports = router;