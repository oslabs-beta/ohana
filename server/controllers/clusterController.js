const db = require('../db/models');
const { runTerminalCommand, vCluster, gcloud } = require('../../terminalCommands.js')
const clusterController = {};

clusterController.createCluster = (req, res, next) => {
    console.log(req.body);
    const { clusterName, vClusterName, hostNamespace } = req.body;
    runTerminalCommand(gcloud.getCredentials)
    .then(() => runTerminalCommand(vCluster.create(vClusterName, hostNamespace)))
    .then(() => runTerminalCommand(vCluster.connect(vClusterName, hostNamespace)))
    return next();
}

module.exports = clusterController;