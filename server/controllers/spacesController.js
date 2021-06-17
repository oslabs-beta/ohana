const db = require('../db/models');
const { runTerminalCommand, kubectl, gcloud } = require('../../terminalCommands.js')
const spacesController = {};

spacesController.addNamespace = (req, res, next) => {
  const { hostNamespace, team_id, projectName } = req.body;
  const params = [hostNamespace, team_id, projectName];
  const query = `
  INSERT INTO namespaces2(name, team_id, project)
  VALUES ($1, $2, $3)`

  db.query(query, params)
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({ log: `Error in spacesController.addNamespace: ${err}` });
    })
}

spacesController.createNamespace = (req, res, next) => {
  console.log(req.body)
  const { hostNamespace } = req.body;
  runTerminalCommand(gcloud.getCredentials(hostNamespace))
  .then((data) => {
    console.log(data)
    runTerminalCommand(kubectl.createNamespace(hostNamespace))
  return next();
})
}

spacesController.fetchSpaces = (req, res, next) => {
  const query = `
  SELECT * FROM namespaces2;
  `

  db.query(query)
    .then((data) => {
      res.locals.spaces = data.rows
      return next();
    })
}

module.exports = spacesController;
