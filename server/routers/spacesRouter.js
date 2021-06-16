const express = require('express');
const router = express.Router();
const spacesController = require('../controllers/spacesController');

router.post('/create', spacesController.addNamespace, (req, res) => {
  res.status(200).send('posted to database');
})

router.post('/rtcCreate', spacesController.createNamespace, (req, res) => {
  res.status(200).send('posted to terminal');
})

module.exports = router;