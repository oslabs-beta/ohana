const db = require('../db/models');
const { runTerminalCommand, vCluster, gcloud } = require('../../terminalCommands.js')
const vClusterController = {};


vClusterController.addVCluster = (req, res, next) => {
  const { vClusterName } = req.body;
  const params = [vClusterName];
  const query = `
  INSERT INTO vclusters(name)
  VALUES ($1)`
  db.query(query, params)
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({ log: `Error in clusterController.addVCluster: ${err}` });
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
//       return next({ log: `Error in clusterController.addCluster: ${err}` });
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

vClusterController.fetchVClusters = (req, res, next) => {
  const query = `
  SELECT * FROM vclusters;
  `
  db.query(query)
    .then((data) => {
      res.locals.kyung = data.rows
      return next();
    })
}

vClusterController.fetchNamespaces = (req, res, next) => {
  const query = `
  SELECT name FROM namespaces;
  `
  db.query(query)
    .then((data) => {
      res.locals.clusternamespaces = data.rows
      return next();
    })
}

vClusterController.fetchClusters = (req, res, next) => {
  const query = `
  SELECT name FROM clusters;
  `
  db.query(query)
    .then((data) => {
      res.locals.clusterclusters = data.rows
      return next();
    })
}


module.exports = vClusterController;