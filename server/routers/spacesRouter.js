const express = require('express');
const router = express.Router();
const spacesController = require('../controllers/spacesController');



router.post('/create', 
spacesController.addNamespace,
spacesController.createNamespace, (req, res) => {
  res.status(200).send('posted to database');
})


router.post('/deploy',
spacesController.deploy,
  (req, res) => {
  const { jeff } = res.locals;
  res.status(200).json(jeff);
})

router.post('/getip',
spacesController.getExternalIp,
  (req, res) => {
  const { getServices } = res.locals;
  res.status(200).json(getServices);
})

router.get('/fetch', spacesController.fetchSpaces, (req, res) => {
  res.status(200).json(res.locals.spaces);
})

// below route may be consolidated into '/' route
// router.post('/add', spacesController.addNamespace, spacesModel.addNamespace, (req, res) => {
//   res.status(200).send('posted to database');
// })


module.exports = router;