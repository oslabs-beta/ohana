const db = require('../db/models');
const { runTerminalCommand, vCluster, gcloud } = require('../../terminalCommands.js')
const clusterController = {};

// will need to edit the cluster db
clusterController.addCluster = (req, res, next) => {
  const { hostNamespace, vClusterName, projectName } = req.body;
  const params = [hostNamespace, vClusterName, projectName];
  const query = `
  INSERT INTO vclusters3(team_id, namespace_id, project)
  VALUES ($1, $2, $3)`

  db.query(query, params)
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({ log: `Error in clsuterController.addCluster: ${err}` });
    })
}

clusterController.deleteClusterFromDB = (req, res, next) => {
  const { hostNamespace, vClusterName, projectName } = req.body;
  const params = [hostNamespace, vClusterName, projectName];
  const query = `
  INSERT INTO vclusters3(team_id, namespace_id, project)
  VALUES ($1, $2, $3)`

  db.query(query, params)
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({ log: `Error in clsuterController.addCluster: ${err}` });
    })
}

clusterController.createCluster = (req, res, next) => {
    console.log(req.body);
    const { clusterName, vClusterName, hostNamespace } = req.body;
    runTerminalCommand(gcloud.getCredentials(clusterName))
    .then((data) => {
      console.log('1',data)
      runTerminalCommand(vCluster.create(vClusterName, hostNamespace))
    .catch(err => console.log(err))
  })
}

clusterController.deleteCluster = (req, res, next) => {
  console.log(req.body);
  const { clusterName, vClusterName, hostNamespace } = req.body;
  runTerminalCommand(gcloud.getCredentials(clusterName))
  .then((data) => {
    console.log('1',data)
    runTerminalCommand(vCluster.create(vClusterName, hostNamespace))
  .catch(err => console.log(err))
})
}

module.exports = clusterController;