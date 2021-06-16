const db = require('../db/models');
const { runTerminalCommand, kubectl } = require('../../terminalCommands.js')
const spacesController = {};

// CREATE TABLE "namespaces" (
//     "_id" smallserial PRIMARY KEY NOT NULL,
//     "name" varchar NOT NULL,
//     "team_id" smallint NOT NULL,
//     "project" varchar
//   );

spacesController.addNamespace = (req, res, next) => {
  const { hostNamespace, team_id, project } = req.body;
  const params = [hostNamespace, team_id, project];
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
  runTerminalCommand(kubectl.createNamespace)
  return next();
}

module.exports = spacesController;
