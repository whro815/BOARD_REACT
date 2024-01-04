const express = require('express');
const router = express.Router();

// User middleWare
const userMid = require('../controller/User');

// User
router.post('/register', userMid.registerPostMid);

router.post('/login', userMid.loginPostMid);

module.exports = router;