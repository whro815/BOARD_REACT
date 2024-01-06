const express = require('express');
const router = express.Router();

// User middleWare
const userMid = require('../controller/User');

// Auth (인증)
// const auth = require('../controller/Auth'); => ERROR => WHY?
// => error message => router.get에서 callback function을 받아와야함
// => *** (Error reason) 근대 객체를 받아옴 ***
// => 객체안의 콜백함수를 가져와야함 => So?
// => { auth } 중괄호 처리 해줘야함
const { auth } = require('../controller/Auth');

// User Save
router.post('/register', userMid.registerPostMid);

// User Login
router.post('/login', userMid.loginPostMid);

// User Auth
router.get('/auth', auth, userMid.authGetMid);

// User Logout
router.get('/logout', auth, userMid.logoutGetMid)

module.exports = router;