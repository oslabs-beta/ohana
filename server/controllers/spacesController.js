const db = require('../db/models');
const { runTerminalCommand, kubectl, gcloud } = require('../../terminalCommands.js');
const { reset } = require('nodemon');
const spacesController = {};

spacesController.clusterIdLookup = (req, res, next) => {
  const { hostCluster } = req.body;
  const params = [hostCluster];
  const query = `SELECT _id FROM clusters WHERE name=$1`;
  db.query(query, params)
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
  const { clusterId, teamId } = res.locals;
  const params = [hostNamespace, clusterId, teamId];
  // if the team ID is a foreign key, do we need to add this in or is it automatic?
  const query = 'INSERT INTO namespaces (name, cluster_id, team_id) VALUES ($1, $2, $3)';

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
  const { hostCluster, hostNamespace } = req.body;
  runTerminalCommand(gcloud.getCredentials(hostCluster))
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
  const { deploymentName, deployHostNamespace, imageFile } = req.body;
  runTerminalCommand(kubectl.deployImage(deploymentName, deployHostNamespace, imageFile))
    .then(() => {
      runTerminalCommand(kubectl.expose(deploymentName, deployHostNamespace))
        .then(() => runTerminalCommand(`kubectl get services -n ${deployHostNamespace} ${deploymentName}`))
        .then((data) => {
          console.log(data);
          res.locals.jeff = data;
          return next();
        })
    })
}

spacesController.getExternalIp = (req, res, next) => {
  const { deploymentName, deployHostNamespace } = req.body;
  console.log(deploymentName);
  runTerminalCommand(`kubectl get services -n ${deployHostNamespace} ${deploymentName}`)
    .then((data) => {
      res.locals.getServices = data;
      return next()
    })
}

spacesController.fetchSpaces = (req, res, next) => {
  const query = 'SELECT * FROM namespaces;';
  db.query(query)
    .then((data) => {
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
      res.locals.namespaces = data.rows
      return next();
    })
}

module.exports = spacesController;
