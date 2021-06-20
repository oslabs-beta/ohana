const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/create',
  userController.bcryptPassword,
  userController.addNewUser,
  userController.editAccessUser,
  userController.createServiceAccount,
  (req, res) => {
    res.status(200).send('Successfully added new user');
  })

router.post('/login',
  userController.loginCheck,
  userController.isAdminCheck,
  userController.assignJwt,
  (req, res) => {
    const { token } = res.locals;
    res.status(200).json(token)
  }
)

router.post('/verify',
  userController.verifyAdmin,
  (req, res) => {
    const { isAdmin } = res.locals;
    res.status(200).json(isAdmin);
  }
)

module.exports = router;