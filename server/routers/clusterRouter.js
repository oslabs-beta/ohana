const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const clusterController = require('../controllers/clusterController');

router.post('/rtcCreate', clusterController.createCluster, (req, res) => {
  res.status(200).send('posted to database');
})
=======

const clusterController = require('../controllers/clusterController');

router.post('/create',
  clusterController.createCluster,
  (req, res) => {
    res.status(200).json('Successfully created cluster');
  }
)
>>>>>>> 17973a421f580fec5662c147822791bd09027559

module.exports = router;