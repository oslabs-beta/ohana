const express = require('express');
const router = express.Router();
const spacesController = require('../controllers/spacesController');

router.post('/create', 
spacesController.addNamespace,
spacesController.createNamespace, (req, res) => {
  res.status(200).send('Added Space to Database and successfully created Space');
})

module.exports = router;