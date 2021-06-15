const express = require('express');
const router = express.Router();

const spacesController = require('../controllers/spacesController');

router.post('/', spacesController.addNamespace, (req, res) => {
  res.status(200).send('posted to database');
})

module.exports = router;