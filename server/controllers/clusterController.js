const db = require('../db/models');
const { runTerminalCommand, vCluster } = require('../../terminalCommands')

const clusterController = {};

clusterController.createCluster = (req, res, next) => {
  const { vClusterName, hostNamespace } = req.body;
  runTerminalCommand(vCluster.create(vClusterName, hostNamespace))
    .then(() => {
      return next();
    })
    .catch(err => next({log: `Error in clusterController.createCluster: ${err}`}))
}

clusterController.addCluster = (req, res, next) => {
  const { namespace, team_id, project } = req.body;
  const params = [namespace, team_id, project];
  const query = `
  INSERT INTO clusters(name, team_id, project)
  VALUES ($1, $2, $3)`

  db.query(query, params)
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({ log: `Error in clusterController.addCluster: ${err}` });
    })
}


module.exports = clusterController;