const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const spacesController = require('../controllers/spacesController');

router.post('/', 
spacesController.addNamespace, (req, res) => {
=======

const spacesController = require('../controllers/spacesController');

router.post('/', spacesController.addNamespace, (req, res) => {
>>>>>>> 5843a93bd1cef8fd9eaf4951b299d53f8b66cdb9
  res.status(200).send('posted to database');
})

module.exports = router;