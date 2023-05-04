const express = require('express');;

const router = express.Router();

const UserController = require('../../controller/userController')

router.post('/signUp', UserController.create);
router.post('/signIn', UserController.signIn);
router.get('/isAuthenticated',UserController.isAuthenticated);

module.exports  = router;