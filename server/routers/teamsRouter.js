const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teamsController');

router.post('/', teamsController.createTeam, (req, res) => {
  return res.status(200).json('Successfully created team on database');
})

module.exports = router;