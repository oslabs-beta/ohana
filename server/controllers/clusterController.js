const db = require('../db/models');
const { runTerminalCommand, vCluster, gcloud } = require('../../terminalCommands.js')
const clusterController = {};

// // spacesController.addCluster = (req, res, next) => {
// //   const { hostNamespace, team_id, project } = req.body;
// //   const params = [hostNamespace, team_id, project];
// //   const query = `
// //   INSERT INTO namespaces2(name, team_id, project)
// //   VALUES ($1, $2, $3)`

// //   db.query(query, params)
// //     .then(() => {
// //       return next();
// //     })
// //     .catch((err) => {
// //       return next({ log: `Error in spacesController.addNamespace: ${err}` });
// //     })
// // }


clusterController.createCluster = (req, res, next) => {
    console.log(req.body);
    const { clusterName, vClusterName, hostNamespace } = req.body;
    runTerminalCommand(gcloud.getCredentials)
    .then(() => runTerminalCommand(vCluster.create(vClusterName, hostNamespace)))
    .then(() => runTerminalCommand(vCluster.connect(vClusterName, hostNamespace)))
    return next();
}

module.exports = clusterController;