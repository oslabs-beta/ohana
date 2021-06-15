// this file contains middleware to perform actions on spaces

// const terminalCommands = require('../server/terminalCommands');
const { kubectl, gcloud, vCluster, runTerminalCommands} = require('../terminalCommands');
const spacesModel = {};


spacesModel.addNamespace = (req, res, next) => {
  const { namespace, team_id, project } = req.body;
    // run terminal command(s) to create a new space in kiosk
    terminalCommands.runTerminalCommand(kubectl.createSpace)  
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({ log: `Error in spacesModel.addNamespace: ${err}` });
    })
}

module.exports = spacesModel;