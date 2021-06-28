const db = require('../db/models');

const teamsController = {};

teamsController.createTeam = (req, res, next) => {
  console.log('am i hitting teamsController middleware?')
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

module.exports = teamsController;