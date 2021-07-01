const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teamsController');

router.post('/', teamsController.createTeam, (req, res) => {
  return res.status(200).json('Successfully created team on database');
})

router.get('/fetch', teamsController.fetchTeams, (req, res) => {
  teamNames = res.locals.teamNames
  return res.status(200).json(teamNames)
})

module.exports = router;