const db = require('../db/models');

const teamsController = {};

teamsController.createTeam = (req, res, next) => {
  // console.log('am i hitting teamsController middleware?')
  const { teamName } = req.body;
  const query = `INSERT INTO teams (name) VALUES ('${teamName}')`;

  db.query(query)
    .then(() => next())
    .catch((err) => {
      return next({
        log: `Error in teamsController.createTeam: ${err}`,
        message: `Unable to add new team`
    })
  })
}

teamsController.fetchTeams = (req, res, next) => {
  const query = `
  SELECT name FROM teams
  `
  db.query(query)
    .then((data) => {
      res.locals.teamNames = data.rows
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error in fetching teams: ${err}`,
        message: `Unable to fetch teams`
      })
    })
}

module.exports = teamsController;