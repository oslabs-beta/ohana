const express = require('express');
const router = express.Router();

const clusterController = require('../controllers/clusterController');

router.get('/', clusterController.getClusters, (req, res) => {
  res.status(200).send('retrieved vclusters from database');
})

module.exports = router;