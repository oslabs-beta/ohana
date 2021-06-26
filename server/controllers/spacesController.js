const db = require('../db/models');
const { runTerminalCommand, kubectl, gcloud } = require('../../terminalCommands.js')
const spacesController = {};

//will need to edit the database schema

spacesController.fetchClusters = (req, res, next) => {
  const query = `
  SELECT clusterName FROM clusters5;
  `
  db.query(query)
    .then((data) => {
      console.log(data)
      res.locals.clusters = data.rows
      return next();
    })
}

spacesController.addNamespace = (req, res, next) => {
  const { createHostNamespace, team_id, projectName } = req.body;
  const params = [createHostNamespace, team_id, projectName];
  const query = `
  INSERT INTO namespaces5(name, team_id, project)
  VALUES ($1, $2, $3)`

  db.query(query, params)
    .then((data) => {
      console.log(data)
      return next();
    })
    .catch((err) => {
      return next({ log: `Error in spacesController.addNamespace: ${err}` });
    })
}

// spacesController.deleteNamespaceFromDB = (req, res, next) => {
//   const { hostNamespace, team_id, projectName } = req.body;
//   const params = [hostNamespace, team_id, projectName];
//   const query = `
//   INSERT INTO namespaces2(name, team_id, project)
//   VALUES ($1, $2, $3)`

//   db.query(query, params)
//     .then(() => {
//       return next();
//     })
//     .catch((err) => {
//       return next({ log: `Error in spacesController.addNamespace: ${err}` });
//     })
// }

spacesController.createNamespace = (req, res, next) => {
  console.log(req.body)
  const { clusterName, hostNamespace } = req.body;
  // need to make gcloud into a function
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
  const query = `
  SELECT * FROM namespaces5;
  `
  db.query(query)
    .then((data) => {
      console.log(data)
      res.locals.spaces = data.rows
      return next();
    })
}

spacesController.fetchNamespaces = (req, res, next) => {
  const query = `
  SELECT name FROM namespaces5;
  `
  db.query(query)
    .then((data) => {
      console.log(data)
      res.locals.namespaces = data.rows
      return next();
    })
}

module.exports = spacesController;
