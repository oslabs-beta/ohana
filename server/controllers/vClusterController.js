const db = require('../db/models');
const { runTerminalCommand, vCluster, gcloud } = require('../../terminalCommands.js')
const vClusterController = {};


vClusterController.addVCluster = (req, res, next) => {
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
      return next({ log: `Error in clsuterController.addVCluster: ${err}` });
    })
}

// clusterController.deleteClusterFromDB = (req, res, next) => {
//   const { hostNamespace, vClusterName, projectName } = req.body;
//   const params = [hostNamespace, vClusterName, projectName];
//   const query = `
//   INSERT INTO vclusters3(team_id, namespace_id, project)
//   VALUES ($1, $2, $3)`

//   db.query(query, params)
//     .then(() => {
//       return next();
//     })
//     .catch((err) => {
//       return next({ log: `Error in clsuterController.addCluster: ${err}` });
//     })
// }

vClusterController.createVCluster = (req, res, next) => {

  console.log(req.body);
  const { clusterName, vClusterName, hostNamespace } = req.body;
  res.locals.vClusterName = vClusterName;
  // need to make gcloud into a function
  runTerminalCommand(gcloud.getCredentials(clusterName))
    .then((data) => {
      console.log('1', data)
      runTerminalCommand(vCluster.create(vClusterName, hostNamespace))
        .then(() => next())
        // runTerminalCommand(vCluster.connect(vClusterName, hostNamespace))
        .catch(err => console.log(err))
    }).catch(err => next({ log: `clusterController.createCluster: ${err}` }))
}

vClusterController.deleteVCluster = (req, res, next) => {
  console.log(req.body);
  const { clusterName, vClusterName, hostNamespace } = req.body;
  // need to make gcloud into a function
  runTerminalCommand(gcloud.getCredentials(clusterName))
    .then((data) => {
      console.log('1', data)
      runTerminalCommand(vCluster.create(vClusterName, hostNamespace))
        .catch(err => console.log(err))
    })
}

<<<<<<< HEAD:server/controllers/vClusterController.js
vClusterController.fetchVClusters = (req, res, next) => {
=======

clusterController.fetchClusters = (req, res, next) => {
>>>>>>> 25a8c8b1bd3fc18932dffba4befce05475ea6b39:server/controllers/clusterController.js
  const query = `
  SELECT * FROM vclusters3;
  `
  db.query(query)
    .then((data) => {
      res.locals.kyung = data.rows
      return next();
    })
}
module.exports = vClusterController;