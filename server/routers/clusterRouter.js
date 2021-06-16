const express = require('express');
const router = express.Router();
const clusterController = require('../controllers/clusterController');

router.post('/rtcCreate', clusterController.createCluster, (req, res) => {
  res.status(200).send('posted to database');
})

module.exports = router;