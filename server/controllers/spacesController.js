const db = require('../db/models');
const { runTerminalCommand, kubectl, gcloud } = require('../../terminalCommands.js');
const { reset } = require('nodemon');
const spacesController = {};


// spacesController.fetchClusters = (req, res, next) => {
//   const query = `
//   SELECT name FROM clusters;
//   `
//   db.query(query)
//     .then((data) => {
//       console.log(data)
//       res.locals.clusters = data.rows
//       return next();
//     })
// }

spacesController.clusterIdLookup = (req, res, next) => {
  // do we need to pull in hostNamespace if we aren't using it?
  const { hostCluster, hostNamespace } = req.body;
  const query = `SELECT _id FROM clusters WHERE name='${hostCluster}'`;
  db.query(query)
    .then((data) => {
      console.log(data.rows[0]._id);
      res.locals.clusterId = data.rows[0]._id;
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error in spacesController.clusterIdLookup: ${err}`,
        message: `Error looking up cluster id`
      })
    })
}

spacesController.addNamespace = (req, res, next) => {
  const { hostNamespace } = req.body;
  const { clusterId } = res.locals;
  const params = [hostNamespace, clusterId];
  const query = 'INSERT INTO namespaces (name, cluster_id) VALUES ($1, $2)';

  db.query(query, params)
    .then((data) => {
      console.log(data)
      return next();
    })
    .catch((err) => {
      return next({ log: `Error in spacesController.addNamespace: ${err}` });
    })
}

spacesController.createNamespace = (req, res, next) => {
  console.log(req.body)
  const { clusterName, hostNamespace } = req.body;
  runTerminalCommand(gcloud.getCredentials(clusterName))
    .then((data) => {
      console.log(data)
      runTerminalCommand(kubectl.createNamespace(hostNamespace))
        .then((data) => {
          console.log(data)
          return next();
        })
    })
}

spacesController.deploy = (req, res, next) => {
  const { deploymentName, hostNamespace, imageFile } = req.body;
  runTerminalCommand(kubectl.deployImage(deploymentName, hostNamespace, imageFile))
    .then(() => {
      runTerminalCommand(kubectl.expose(deploymentName, hostNamespace))
        .then(() => runTerminalCommand(`kubectl get services -n ${hostNamespace} ${deploymentName}`))
        .then((data) => {
          console.log(data);
          res.locals.jeff = data;
          return next();
        })
    })
}

spacesController.getExternalIp = (req, res, next) => {
  const { deploymentName, hostNamespace } = req.body;
  console.log(deploymentName);
  runTerminalCommand(`kubectl get services -n ${hostNamespace} ${deploymentName}`)
    .then((data) => {
      res.locals.getServices = data;
      return next()
    })
}

spacesController.fetchSpaces = (req, res, next) => {
  const query = 
  `
  SELECT * FROM namespaces;
  `
  db.query(query)
    .then((data) => {
      console.log('fetchspaces data', data)
      res.locals.spaces = data.rows
      return next();
    })
}

spacesController.fetchNamespaces = (req, res, next) => {
  const { teamId } = res.locals;
  const params = [teamId]
  const query = `
  SELECT name FROM namespaces WHERE team_id = $1;
  `
  db.query(query, params)
    .then((data) => {
      console.log(data)
      res.locals.namespaces = data.rows
      return next();
    })
}

module.exports = spacesController;
