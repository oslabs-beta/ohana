const db = require ('../db/models');
const spacesController = {};

spacesController.addNamespace = (req, res, next) => {
  const { namespace, team_id, project } = req.body;
  const params = [namespace, team_id, project];
  const query = `
  INSERT INTO namespaces2(name, team_id, project)
  VALUES ($1, $2, $3)`

  db.query(query, params)
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({ log: `Error in spacesController.addNamespace: ${err}` });
    })
}

module.exports = spacesController;