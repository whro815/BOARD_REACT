const express = require('express');
const router = express.Router();

// User middleWare
const userMid = require('../controller/User');

// Auth (인증)
const auth = require('../controller/Auth');

// User Save
router.post('/register', userMid.registerPostMid);

// User Login
router.post('/login', userMid.loginPostMid);

// User Auth
router.get('/auth', auth, userMid.authGetMid);

module.exports = router;