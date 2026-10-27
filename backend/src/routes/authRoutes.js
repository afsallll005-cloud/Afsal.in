const express = require('express');
const router = express.Router();
const { login, verify, changePassword } = require('../controllers/authController');

router.post('/login', login);
router.get('/verify', verify);
router.put('/change-password', changePassword);

module.exports = router;
