const db = require('../db/models');

const clusterController = {};

// CREATE TABLE "vclusters3" (
//   "_id" smallserial PRIMARY KEY NOT NULL,
//   "owner_id" smallint NOT NULL,
//   "team_id" smallint NOT NULL,
//   "namespace_id" smallint NOT NULL,
//   "project" varchar
// );

clusterController.getClusters = (req, res, next) => {
  const query = `
  SELECT * FROM vclusters3`

  db.query(query)
    .then((result) => {
      res.locals.vcluster = result;
      return next();
    })
    .catch((err) => {
      return next({ log: `Error in clusterController.getClusters: ${err}` });
    })
}

const { runTerminalCommand, vCluster, gcloud } = require('../../terminalCommands.js')
const clusterController = {};

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

clusterController.createCluster = (req, res, next) => {
  console.log(req.body);
  const { clusterName, vClusterName, hostNamespace } = req.body;
  runTerminalCommand(gcloud.getCredentials(hostNamespace))
    .then((data) => {
      console.log('1', data)
      runTerminalCommand(vCluster.create(vClusterName, hostNamespace))
        .catch(err => console.log(err))
    })
}


module.exports = clusterController;