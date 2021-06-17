const express = require('express');
const router = express.Router();
const spacesController = require('../controllers/spacesController');
// const spacesModel = require('../models/spacesModel');

router.post('/create', 
spacesController.addNamespace,
spacesController.createNamespace, (req, res) => {
  res.status(200).send('posted to database');
})

router.get('/fetchSpaces',
spacesController.fetchNamespaces,
  (req, res) => {
  res.status(200).json(res.locals.kyung);
})

router.post('/deploy',
spacesController.deploy,
  (req, res) => {
  res.status(200).send('Successfully deployed');
})

module.exports = router;